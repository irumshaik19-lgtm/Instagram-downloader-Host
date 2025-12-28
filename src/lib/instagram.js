// Utility to handle Instagram media fetching using RapidAPI
// We use 'instagram-downloader-download-instagram-videos-stories' from RapidAPI.

const RAPIDAPI_KEY = '6b00492dd5msh9acc1e3a9e2b0f2p159605jsncad9b423229c';
const RAPIDAPI_HOST = 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com';

export const fetchInstagramMedia = async (url) => {
  // Check for valid URL structure
  if (!url.includes('instagram.com')) {
    throw new Error('Invalid Instagram URL. Please check and try again.');
  }

  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/index?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST
      }
    });

    if (!response.ok) {
      if (response.status === 403 || response.status === 401) {
        throw new Error('API Key invalid or quota exceeded. Please check your RapidAPI subscription.');
      }
      throw new Error(`Failed to fetch media. Status: ${response.status}`);
    }

    const data = await response.json();

    // The API structure varies, but let's map a common RapidAPI response to our internal format
    if (!data || (!data.media && !data.video_url && !data.display_url && !data.items)) {
       throw new Error('Content not found. The account might be private or the link is invalid.');
    }

    // Normalize the data
    const mediaItems = [];
    
    // Handle specific API response variations
    // Some APIs return 'items' or 'media' array for carousels
    const rawMedia = data.media || data.items || [];
    
    if (Array.isArray(rawMedia) && rawMedia.length > 0) {
        // Carousel or multi-item
        rawMedia.forEach(item => {
            if (typeof item === 'string') {
                 mediaItems.push({
                     type: item.includes('.mp4') ? 'video' : 'image',
                     url: item
                 });
            } else {
                 // Try to find the best quality url
                 const itemUrl = item.video_url || item.display_url || item.url || item.media;
                 const itemType = (item.Type === 'Video' || item.video_url || (itemUrl && itemUrl.includes('.mp4'))) ? 'video' : 'image';
                 
                 if (itemUrl) {
                    mediaItems.push({
                        type: itemType,
                        url: itemUrl
                    });
                 }
            }
        });
    } else {
        // Single Item fallback (if media array is empty or non-existent)
        const isVideo = data.Type === 'Video' || !!data.video_url;
        const singleUrl = data.video_url || data.display_url || data.media;
        
        if (singleUrl) {
            mediaItems.push({
                type: isVideo ? 'video' : 'image',
                url: singleUrl
            });
        }
    }

    if (mediaItems.length === 0) {
        throw new Error('No downloadable media found in this post.');
    }

    return {
      success: true,
      data: {
        id: data.id || Date.now().toString(),
        type: mediaItems.length > 1 ? 'carousel' : mediaItems[0].type,
        caption: data.title || data.caption || 'Downloaded via InstaDownloader',
        media: mediaItems
      }
    };

  } catch (error) {
    console.error("API Error:", error);
    // Propagate friendly error
    throw new Error(error.message || 'An unexpected error occurred while fetching content.');
  }
};

export const downloadMedia = async (mediaUrl, filename) => {
  try {
    // Attempt to proxy fetch to avoid CORS if possible, otherwise generic download
    const response = await fetch(mediaUrl);
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.warn('Direct download failed (likely CORS), opening in new tab:', error);
    window.open(mediaUrl, '_blank');
  }
};
