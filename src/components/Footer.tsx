import { Github, Twitter, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  isDark: boolean;
}

export function Footer({  }: FooterProps) {
  return (
    <footer className="mt-8 sm:mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Browser Lingo</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Making language translation simple and accessible for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="/" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Home</a></li>
              <li><a href="/features" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Features <span className="text-xs text-indigo-500">(Coming Soon)</span></a></li>
              <li><a href="/pricing" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Pricing <span className="text-xs text-indigo-500">(Coming Soon)</span></a></li>
              <li><a href="/blog" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Blog <span className="text-xs text-indigo-500">(Coming Soon)</span></a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="/docs" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Documentation <span className="text-xs text-indigo-500">(Coming Soon)</span></a></li>
              <li><a href="/https://mymemory.translated.net/" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">API Reference</a></li>
              <li><a href="/support" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Support <span className="text-xs text-indigo-500">(Coming Soon)</span></a></li>
              <li><a href="/status" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Status <span className="text-xs text-indigo-500">(Coming Soon)</span></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              © 2024 Browser Lingo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="/privacy" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Privacy Policy</a>
              <a href="/terms" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Terms of Service</a>
              <a href="/cookies" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 