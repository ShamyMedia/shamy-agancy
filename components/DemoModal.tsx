import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, url, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  // Reset loading state when url changes
  React.useEffect(() => {
    setIsLoading(true);
  }, [url]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-8 bg-black/80 backdrop-blur-sm h-[100dvh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="bg-white w-full h-[90dvh] md:h-full md:max-w-6xl md:max-h-[90vh] rounded-t-2xl md:rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-gray-100 bg-white shrink-0">
              <h3 className="font-bold text-md md:text-lg text-gray-800 truncate max-w-[50%]">
                {title}
              </h3>
              <div className="flex items-center gap-2 md:gap-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm flex items-center gap-1 md:gap-2 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 px-3 py-1.5 rounded-full transition-colors"
                >
                  <span className="hidden sm:inline">{language === 'ar' ? 'فتح في نافذة جديدة' : 'Open in new tab'}</span>
                  <span className="sm:hidden">{language === 'ar' ? 'فتح' : 'Open'}</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow relative bg-gray-50 w-full h-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 size={40} className="animate-spin text-primary-600" />
                    <p className="text-gray-500 text-sm font-medium animate-pulse">
                      {language === 'ar' ? 'جاري تحميل النموذج...' : 'Loading Demo...'}
                    </p>
                  </div>
                </div>
              )}
              <iframe
                src={url}
                className="w-full h-full border-0 relative z-10 bg-transparent"
                onLoad={() => setIsLoading(false)}
                title={`Demo: ${title}`}
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;