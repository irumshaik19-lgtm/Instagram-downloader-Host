import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, Grid, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AdSenseSlot from '@/components/AdSenseSlot';
import DownloadResult from '@/components/DownloadResult';
import { fetchInstagramMedia } from '@/lib/instagram';

const CarouselDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter an Instagram carousel URL",
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
        description: "Carousel content fetched successfully!",
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
        <title>Instagram Carousel Downloader - Download All Photos & Videos | InstaDownloader</title>
        <meta name="description" content="Download all photos and videos from Instagram carousels at once. Free Instagram carousel downloader with bulk download support." />
      </Helmet>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <Grid className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Instagram Carousel Downloader
            </h1>
            <p className="text-xl text-slate-300">
              Download all photos and videos from Instagram carousels in one click
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
                  Instagram Carousel URL
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.instagram.com/p/..."
                  className="w-full px-6 py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <AdSenseSlot slot="carousel-near-download" style={{ minHeight: '100px' }} />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download Carousel
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
            <h2 className="text-2xl font-bold text-white mb-6">What is a Carousel?</h2>
            <p className="text-slate-300 mb-6">
              An Instagram carousel is a post that contains multiple photos or videos that users can swipe through. 
              Our tool allows you to download all media from a carousel post at once, saving you time and effort.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Bulk Download
                </h3>
                <p className="text-sm text-slate-400 ml-4">Download all items from carousel at once</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Mixed Content
                </h3>
                <p className="text-sm text-slate-400 ml-4">Supports both photos and videos</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  High Quality
                </h3>
                <p className="text-sm text-slate-400 ml-4">All media in original quality</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Easy to Use
                </h3>
                <p className="text-sm text-slate-400 ml-4">Simple one-click download process</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CarouselDownloader;
