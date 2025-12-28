import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, Image, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AdSenseSlot from '@/components/AdSenseSlot';
import DownloadResult from '@/components/DownloadResult';
import { fetchInstagramMedia } from '@/lib/instagram';

const PhotoDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter an Instagram photo URL",
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
        description: "Photo fetched successfully!",
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
        <title>Instagram Photo Downloader - Save IG Photos in Full Quality | InstaDownloader</title>
        <meta name="description" content="Download Instagram photos in original quality. Fast and free Instagram photo downloader. No watermarks, no registration." />
      </Helmet>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl mb-6">
              <Image className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Instagram Photo Downloader
            </h1>
            <p className="text-xl text-slate-300">
              Save Instagram photos in full quality without watermarks
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
                  Instagram Photo URL
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.instagram.com/p/..."
                  className="w-full px-6 py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <AdSenseSlot slot="photo-near-download" style={{ minHeight: '100px' }} />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download Photo
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
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Full Quality
                </h3>
                <p className="text-sm text-slate-400 ml-4">Download photos in original resolution</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  No Watermarks
                </h3>
                <p className="text-sm text-slate-400 ml-4">Clean photos without any watermarks</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Fast Download
                </h3>
                <p className="text-sm text-slate-400 ml-4">Quick processing and instant downloads</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  100% Free
                </h3>
                <p className="text-sm text-slate-400 ml-4">No registration or payment required</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PhotoDownloader;
