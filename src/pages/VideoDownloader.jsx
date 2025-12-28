import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, Video, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AdSenseSlot from '@/components/AdSenseSlot';
import DownloadResult from '@/components/DownloadResult';
import { fetchInstagramMedia } from '@/lib/instagram';

const VideoDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter an Instagram video URL",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await fetchInstagramMedia(url);
      setResult(data.data);
      toast({
        title: "Success",
        description: "Video fetched successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Instagram Video Downloader - Download IG Videos in HD | InstaDownloader</title>
        <meta name="description" content="Download Instagram videos in high quality. Fast, free, and easy to use Instagram video downloader. No login required." />
      </Helmet>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Instagram Video Downloader
            </h1>
            <p className="text-xl text-slate-300">
              Download Instagram videos in high quality with just a click
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl"
          >
            <form onSubmit={handleDownload} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Instagram Video URL
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.instagram.com/reel/..."
                  className="w-full px-6 py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>

              <AdSenseSlot slot="video-near-download" style={{ minHeight: '100px' }} />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download Video
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {result && <DownloadResult data={result} />}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-slate-800/30 rounded-xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">How to Download Instagram Videos</h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Open Instagram</h3>
                  <p className="text-sm text-slate-400">Navigate to the video post you want to download</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Copy the URL</h3>
                  <p className="text-sm text-slate-400">Click the three dots and select "Copy Link"</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Paste and Download</h3>
                  <p className="text-sm text-slate-400">Paste the URL above and click the download button</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VideoDownloader;
