import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ChartBar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/education", name: "Education" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:your.email@example.com",
    },
  ];

  return (
    <footer className="w-full py-6 px-4 mt-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Your Name. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
