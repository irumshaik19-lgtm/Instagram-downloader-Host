import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { downloadMedia } from '@/lib/instagram';
import AdSenseSlot from '@/components/AdSenseSlot';

const DownloadResult = ({ data }) => {
  if (!data || !data.media) return null;

  const handleDownload = (url, type, index) => {
    const filename = `insta-download-${index}.${type === 'video' ? 'mp4' : 'jpg'}`;
    downloadMedia(url, filename);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-8"
    >
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Download className="w-5 h-5 text-green-400" />
          Ready to Download
        </h3>

        <div className="grid gap-6">
          {data.media.map((item, index) => (
            <div key={index} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 flex flex-col sm:flex-row gap-6 items-center">
              <div className="relative w-full sm:w-32 h-32 flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden">
                {item.type === 'video' ? (
                  <video 
                    src={item.url} 
                    className="w-full h-full object-cover"
                    muted
                    loop
                    onMouseOver={e => e.target.play()}
                    onMouseOut={e => e.target.pause()}
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt="Instagram content" 
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full backdrop-blur-sm">
                  {item.type === 'video' ? (
                    <VideoIcon className="w-4 h-4 text-white" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0 w-full text-center sm:text-left">
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {data.caption || 'Instagram Media'}
                </p>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  <Button
                    onClick={() => handleDownload(item.url, item.type, index)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {item.type === 'video' ? 'Video' : 'Photo'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(item.url, '_blank')}
                    className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Original
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdSenseSlot slot="after-results" style={{ minHeight: '250px' }} />
    </motion.div>
  );
};

export default DownloadResult;
