import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppBtn: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/201006404614" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
};

export default WhatsAppBtn;