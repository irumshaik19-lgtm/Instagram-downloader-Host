import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-2 rounded-lg">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                InstaDownloader
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Download Instagram content easily and quickly. Free, fast, and secure.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-white mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/video" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Video Downloader
              </Link>
              <Link to="/photo" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Photo Downloader
              </Link>
              <Link to="/carousel" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Carousel Downloader
              </Link>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-white mb-4 block">Information</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-slate-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold text-white mb-4 block">Connect With Us</span>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} InstaDownloader. All rights reserved.
          </p>
          <p className="text-center text-xs text-slate-500 mt-2">
            This website is not affiliated with Instagram or Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
