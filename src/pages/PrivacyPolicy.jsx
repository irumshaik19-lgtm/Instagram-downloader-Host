import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Your Data Protection | InstaDownloader</title>
        <meta name="description" content="Read our privacy policy to understand how InstaDownloader protects your data and respects your privacy while using our Instagram download service." />
      </Helmet>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-slate-400">Last updated: December 28, 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-slate-300 leading-relaxed">
                At InstaDownloader, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our Instagram downloading service. By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">URLs Provided</h3>
                  <p className="text-slate-300">
                    When you use our service, you provide Instagram URLs that you want to download. These URLs are processed temporarily and are not stored on our servers after the download is complete.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                  <p className="text-slate-300">
                    We may collect anonymous usage data such as browser type, device type, and general location (country level) to improve our service. This data is not personally identifiable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cookies</h3>
                  <p className="text-slate-300">
                    We use cookies to enhance user experience and analyze website traffic. You can disable cookies in your browser settings, though this may affect service functionality.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">To provide and maintain our download service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">To improve and optimize our website performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">To analyze usage patterns and trends</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">To detect and prevent technical issues and abuse</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Storage and Security</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We do not store the content you download. All downloads are processed in real-time and are not saved to our servers. We implement industry-standard security measures to protect any data that is temporarily processed.
              </p>
              <p className="text-slate-300 leading-relaxed">
                However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party services you visit.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We use Google AdSense for advertising. Google may use cookies to serve ads based on your prior visits to our website. You can opt out of personalized advertising by visiting Google's Ads Settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-slate-300 leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our contact page or email us at privacy@instadownloader.com
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
