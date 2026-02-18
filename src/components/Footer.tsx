import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-500/20 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>Made with</span>
            <Heart size={16} className="text-green-400 fill-green-400 animate-pulse" />
            <span>by @dimasasna</span>
          </div>

          <div className="text-gray-400 text-sm">
            {currentYear} All rights reserved.
          </div>

          {/* <div className="flex items-center gap-4 text-sm">
            <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors">
              Back to top
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
