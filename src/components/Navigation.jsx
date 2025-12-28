import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/video',
    label: 'Video Downloader'
  }, {
    path: '/photo',
    label: 'Photo Downloader'
  }, {
    path: '/carousel',
    label: 'Carousel Downloader'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  const isActive = path => location.pathname === path;
  return <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Insta Vid Downloader</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 text-white border border-purple-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
                {link.label}
              </Link>)}
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-slate-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 text-white border border-purple-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
                {link.label}
              </Link>)}
          </div>
        </motion.div>}
    </nav>;
};
export default Navigation;
