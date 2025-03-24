import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface RegistrationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationPopup({ isOpen, onClose }: RegistrationPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md glass-card p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4">Registration Fee</h3>
              <p className="text-4xl font-bold text-blue-400 mb-2">₹499</p>
              <p className="text-gray-300">per team</p>
            </div>

            <a 
              href="https://forms.gle/WCJqAaM93wx8oFUT7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Proceed to Registration
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}