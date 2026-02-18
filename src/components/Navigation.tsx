import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20
lg:bg-transparent lg:border-none lg:backdrop-blur-none">
      <div className="container mx-auto px-6 lg:px-20 py-4 lg:py-8">
        <div className="flex items-center justify-between">
          <button 
          onClick={() => onNavigate("home")}
          className="text-2xl lg:text-4xl font-bold cursor-pointer">
            <span><img src="" alt="" /></span>
            <span className="text-white">@dimas</span>
            <span className="text-green-400">asna</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm lg:text-xl cursor-pointer font-medium transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? "text-green-400"
                    : "text-gray-300 hover:text-green-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-400 hover:text-green-300 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-green-400"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
