import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, Video, Image, Grid, Zap, Shield, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AdSenseSlot from '@/components/AdSenseSlot';
import DownloadResult from '@/components/DownloadResult';
import { fetchInstagramMedia } from '@/lib/instagram';

const Home = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter an Instagram URL",
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
        description: "Content fetched successfully!",
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

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Download Instagram content in seconds with our optimized servers'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your privacy is our priority. No data stored, completely anonymous'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '24/7 service availability with 99.9% uptime guarantee'
    }
  ];

  const downloaderTypes = [
    {
      icon: Video,
      title: 'Video Downloader',
      description: 'Download Instagram videos in high quality',
      path: '/video',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Image,
      title: 'Photo Downloader',
      description: 'Save Instagram photos instantly',
      path: '/photo',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Grid,
      title: 'Carousel Downloader',
      description: 'Download multiple photos and videos from carousels',
      path: '/carousel',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Instagram Downloader - Download Videos, Photos & Carousels | InstaDownloader</title>
        <meta name="description" content="Free Instagram downloader to save videos, photos, and carousels in high quality. Fast, secure, and easy to use. No login required." />
      </Helmet>

      <div className="min-h-screen">
        <AdSenseSlot slot="top-banner" style={{ minHeight: '90px' }} />

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Instagram Downloader
              </h1>
              <p className="text-xl text-slate-300 mb-12">
                Download Instagram videos, photos, and carousels instantly. Free, fast, and simple.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl"
            >
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste Instagram URL here..."
                    className="w-full px-6 py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </>
                  )}
                </Button>
              </form>

              <AdSenseSlot slot="near-download" style={{ minHeight: '100px', marginTop: '24px' }} />
              
              {result && <DownloadResult data={result} />}
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Downloader</h2>
              <p className="text-slate-400 text-lg">Select the type of content you want to download</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloaderTypes.map((type, index) => (
                <motion.div
                  key={type.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={type.path}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${type.gradient} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}>
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                      <p className="text-slate-400">{type.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-slate-400 text-lg">Experience the best Instagram downloading service</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 rounded-xl p-8 text-center border border-slate-700/50 hover:border-purple-500/30 transition-all"
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-white">Copy URL</h3>
                  <p className="text-slate-400">Copy the Instagram post URL you want to download</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-white">Paste & Process</h3>
                  <p className="text-slate-400">Paste the URL in the input box and click download</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-white">Download</h3>
                  <p className="text-slate-400">Save the content to your device instantly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
