import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { useEffect } from 'react';

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl?: string;
}

const CVPreviewModal = ({ isOpen, onClose, cvUrl = '/resume.pdf' }: CVPreviewModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const downloadUrl = cvUrl.includes('drive.google.com')
    ? cvUrl.replace('/preview', '/view')
    : cvUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div
              className="pointer-events-auto w-full max-w-3xl bg-gray-900 border border-green-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20 flex flex-col"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header — responsive */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-green-400/20 shrink-0 gap-3">

                {/* Kiri: icon + judul */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="p-1.5 sm:p-2 bg-green-500/10 rounded-lg shrink-0">
                    <FileText className="text-green-400" size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                      Curriculum Vitae
                    </h3>
                    <p className="text-gray-400 text-xs truncate">Dimas Asna Nugraha</p>
                  </div>
                </div>

                {/* Kanan: download + close */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500 hover:bg-green-600 text-black text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/30"
                  >
                    <Download size={15} />
                    {/* Teks hanya muncul di sm ke atas, mobile cukup icon */}
                    <span className="hidden sm:inline">Download CV</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Preview */}
              <div className="flex-1 bg-gray-950 overflow-hidden" style={{ minHeight: '60vh' }}>
                <iframe
                  src={cvUrl}
                  className="w-full h-full"
                  style={{ minHeight: '60vh', border: 'none' }}
                  title="CV Preview"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CVPreviewModal;