import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Usage Guidelines | InstaDownloader</title>
        <meta name="description" content="Read our terms of service to understand the rules and guidelines for using InstaDownloader's Instagram download service." />
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Terms of Service
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
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                By accessing and using InstaDownloader, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Permission is granted to temporarily download content from Instagram for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Use the service for any commercial purpose</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Violate any intellectual property rights</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Attempt to reverse engineer or hack the service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Remove any copyright or proprietary notations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Use the service to violate others' privacy rights</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                InstaDownloader is not affiliated with, endorsed by, or connected to Instagram or Meta Platforms, Inc. The materials and content available through our service are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including:
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Implied warranties of merchantability or fitness for a particular purpose</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Non-infringement of intellectual property or other rights</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Accuracy, reliability, or quality of content downloaded</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Copyright and Content Ownership</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Users are responsible for ensuring they have the right to download and use any content. You acknowledge that:
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">All content on Instagram is owned by the respective creators</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">You should obtain permission from content owners before downloading their content</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Downloaded content should be used in accordance with copyright laws</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">We are not responsible for copyright infringement by users</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                You agree not to use our service to:
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Download content for harassment, stalking, or any illegal purpose</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Violate Instagram's terms of service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Engage in automated or excessive downloading that may harm our servers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-300">Resell or redistribute downloaded content without permission</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitations of Liability</h2>
              <p className="text-slate-300 leading-relaxed">
                In no event shall InstaDownloader or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our service, even if we have been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
              <p className="text-slate-300 leading-relaxed">
                While we strive to maintain 24/7 availability, we do not guarantee uninterrupted access to our service. We reserve the right to modify, suspend, or discontinue the service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to revise these terms of service at any time without notice. By using this service, you agree to be bound by the current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-slate-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our contact page or email us at legal@instadownloader.com
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
