import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Code2, Send, Phone, ArrowRight,Check, MailIcon } from 'lucide-react';
import Navbar from '../Components/Navbar';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mail, setMail] = useState(false);

  const phoneNumber = '+91 7982001670';
  const mailId = 'abhishekgigaiw@gmail.com';

  

  const contacts = [
    {
      label: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/abhishek-kumar-pundir-ba4110326/',
      bgGradient: 'from-blue-600 to-blue-400',
      textColor: 'text-white',
      iconColor: 'text-white',
      hoverBg: 'hover:shadow-blue-500/50',
    },
    {
      label: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      link: 'https://github.com/Abhishe295',
      bgGradient: 'from-gray-800 to-gray-600',
      textColor: 'text-white',
      iconColor: 'text-white',
      hoverBg: 'hover:shadow-gray-500/50',
    },
    {
      label: 'LeetCode',
      icon: <Code2 className="w-6 h-6" />,
      link: 'https://leetcode.com/u/Abhishek_Kumar9999/',
      bgGradient: 'from-orange-500 to-yellow-500',
      textColor: 'text-white',
      iconColor: 'text-white',
      hoverBg: 'hover:shadow-orange-500/50',
    },
    {
      label: 'Gmail',
      icon: <Mail className="w-6 h-6" />,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=abhishekgigaiw@gmail.com',
      bgGradient: 'from-red-500 to-red-400',
      textColor: 'text-white',
      iconColor: 'text-white',
      hoverBg: 'hover:shadow-red-500/50',
    },
  ];

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };



  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  const handleMail = () => {
    navigator.clipboard.writeText(mailId);
    setMail(true);
    setTimeout(() => setMail(false), 2000); // Reset after 2s
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-base-200">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto px-4 py-8 text-center w-full mt-16">
  <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2 leading-tight">
    Let's Connect
  </h1>
  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
  <p className="text-base text-base-content/70 max-w-xl mx-auto mb-2">
    I'm always excited to collaborate or chat about tech.
  </p>
  <p className="text-sm text-base-content/50 max-w-xl mx-auto">
    Reach out through any platform below.
  </p>
</div>

        {/* Contact Cards Grid */}
        <div className="max-w-5xl mx-auto px-4 pb-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative h-44 rounded-2xl border-2 border-base-300 transition-all duration-300 overflow-hidden cursor-pointer
                  ${hoveredIndex === idx 
                    ? `bg-gradient-to-br ${contact.bgGradient} shadow-2xl ${contact.hoverBg} -translate-y-2` 
                    : 'bg-base-100 shadow-lg hover:shadow-xl'}`}
              >
                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6 z-10">
                  {/* Icon Container */}
                  <div className={`p-4 rounded-xl transition-all duration-300 
                    ${hoveredIndex === idx 
                      ? 'bg-white/20 scale-110' 
                      : 'bg-base-200 scale-100'}`}>
                    <div className={`transition-all duration-300 
                      ${hoveredIndex === idx 
                        ? `${contact.iconColor} scale-125` 
                        : 'text-base-content scale-100'}`}>
                      {contact.icon}
                    </div>
                  </div>

                  {/* Label */}
                  <span className={`text-xl font-bold transition-all duration-300 
                    ${hoveredIndex === idx 
                      ? `${contact.textColor}` 
                      : 'text-base-content'}`}>
                    {contact.label}
                  </span>

                  {/* Arrow */}
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 transform
                    ${hoveredIndex === idx 
                      ? `${contact.iconColor} translate-x-1 translate-y-1 opacity-100` 
                      : 'text-base-content/50 opacity-0'}`} />
                </div>

                {/* Loading State */}
                {isLoading && hoveredIndex === idx && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/20 backdrop-blur-sm">
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Phone Number Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-8 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/60">
            <p className="text-base-content/70 text-center mb-3">
              Prefer a direct conversation? I'm available for calls and would love to chat!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button
        onClick={handleCopy}
        className="btn btn-primary btn-lg gap-2 group hover:scale-105 transition-transform duration-300"
      >
        {copied ? <Check className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
        {copied ? 'Copied!' : phoneNumber}
      </button>
      <button
        onClick={handleMail}
        className="btn btn-secondary btn-lg gap-2 group hover:scale-105 transition-transform duration-300"
      >
        {copied ? <Check className="w-5 h-5" /> : <MailIcon className="w-5 h-5" />}
        {copied ? 'Copied!' : mailId}
      </button>
    </div>

          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;