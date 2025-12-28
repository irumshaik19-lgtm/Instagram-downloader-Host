import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'We never store your data or downloaded content. Your privacy is our top priority.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Our optimized servers ensure the fastest download speeds for all content types.'
    },
    {
      icon: Heart,
      title: 'User Friendly',
      description: 'Simple, intuitive interface designed for everyone, no technical knowledge required.'
    },
    {
      icon: Users,
      title: 'Always Free',
      description: 'No hidden fees, no premium plans. Our service is completely free for everyone.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Learn More About InstaDownloader | Instagram Downloader</title>
        <meta name="description" content="Learn about InstaDownloader, the best free Instagram downloader. Our mission is to provide fast, secure, and easy content downloading." />
      </Helmet>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              About InstaDownloader
            </h1>
            <p className="text-xl text-slate-300">
              Your trusted partner for Instagram content downloading
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              InstaDownloader was created with a simple goal: to provide users with a fast, secure, and completely free way to download Instagram content. 
              We understand that sometimes you want to save memories, inspirational content, or important information from Instagram posts.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our platform supports downloading videos, photos, and entire carousels in their original quality, all without requiring any login or registration. 
              We're committed to making content downloading accessible to everyone while respecting user privacy and maintaining the highest standards of service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">No Registration Required</h3>
                  <p className="text-sm text-slate-400">Start downloading immediately without creating an account</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Unlimited Downloads</h3>
                  <p className="text-sm text-slate-400">No daily limits or restrictions on the number of downloads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Multiple Formats Supported</h3>
                  <p className="text-sm text-slate-400">Download videos, photos, and carousels with ease</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Mobile & Desktop Compatible</h3>
                  <p className="text-sm text-slate-400">Works perfectly on all devices and browsers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
