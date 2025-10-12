import React, { useState } from 'react';
import { Settings, Mail,Palette, Sun,Moon,Check, Shield,Monitor } from 'lucide-react';
import { useThemeStore } from '../lib/useTheme.js';

export default function Navbar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const {theme, setTheme} = useThemeStore();

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-base-100 via-base-100 to-base-100 backdrop-blur-md bg-opacity-95 shadow-xl z-50 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Portfolio Name */}
        <a 
          href="/"
          className="group cursor-pointer"
        >
          <div className="relative">
            <span className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 origin-left inline-block">
              Portfolio
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
          </div>
        </a>

        {/* Right: Contact & Settings */}
        <div className="flex items-center gap-8">
          
          {/* Contact Icon */}
          <a
            href="/contact"
            onMouseEnter={() => setHoveredIcon('contact')}
            onMouseLeave={() => setHoveredIcon(null)}
            className="relative group"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"></div>
            
            <div className={`relative p-3 rounded-full border-2 border-base-300 transition-all duration-300 ${
              hoveredIcon === 'contact' 
                ? 'bg-primary text-base-100 border-primary shadow-lg shadow-primary/50 scale-110' 
                : 'bg-base-200 text-base-content hover:bg-base-300'
            }`}>
              <Mail 
                className={`w-6 h-6 transition-all duration-500 ${
                  hoveredIcon === 'contact' 
                    ? 'rotate-12 scale-110' 
                    : ''
                }`}
              />
            </div>

            {/* Tooltip */}
            <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-base-900 text-base-400 text-base rounded-lg whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 ${
              hoveredIcon === 'contact' ? 'opacity-100 -bottom-14' : ''
            }`}>
              Get in Touch
            </div>

            {/* Ripple Effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-primary opacity-0 scale-0 transition-all duration-700 ${
              hoveredIcon === 'contact' ? 'scale-150 opacity-0' : ''
            }`}></div>
          </a>

          {/* Settings Icon */}
          <a
            href="/theme"
            onMouseEnter={() => setHoveredIcon('settings')}
            onMouseLeave={() => setHoveredIcon(null)}
            className="relative group"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"></div>
            
            <div className={`relative p-3 rounded-full border-2 border-base-300 transition-all duration-300 ${
              hoveredIcon === 'settings' 
                ? 'bg-accent text-base-100 border-accent shadow-lg shadow-accent/50 scale-110' 
                : 'bg-base-200 text-base-content hover:bg-base-300'
            }`}>
              <Settings 
                className={`w-6 h-6 transition-all duration-500 ${
                  hoveredIcon === 'settings' 
                    ? '-rotate-90 scale-110' 
                    : ''
                }`}
              />
            </div>

            {/* Tooltip */}
            <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-base-900 text-base-400 text-md rounded-lg whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 ${
              hoveredIcon === 'settings' ? 'opacity-100 -bottom-14' : ''
            }`}>
              Theme Settings
            </div>

            {/* Ripple Effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-accent opacity-0 scale-0 transition-all duration-700 ${
              hoveredIcon === 'settings' ? 'scale-150 opacity-0' : ''
            }`}></div>
          </a>
          {/* Quick Suggestion */}
          <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost btn-circle hover:scale-110 transition-transform duration-300"
              >
                <Palette className='w-6 h-6 text-base-content' />
              </div>
              <ul 
                tabIndex={0} 
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow-lg border border-base-300"
              >
                <li className='menu-title text-xs font-semibold mb-1'>
                  <span>Quick Themes</span>
                </li>
                <li>
                  <button 
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-3 ${theme === 'light' ? 'bg-primary text-primary-content' : ''}`}
                  >
                    <Sun className='w-4 h-4' />
                    <span>Light</span>
                    {theme === 'light' && <Check className='w-4 h-4 ml-auto' />}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-3 ${theme === 'dark' ? 'bg-primary text-primary-content' : ''}`}
                  >
                    <Moon className='w-4 h-4' />
                    <span>Dark</span>
                    {theme === 'dark' && <Check className='w-4 h-4 ml-auto' />}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setTheme('synthwave')}
                    className={`flex items-center gap-3 ${theme === 'synthwave' ? 'bg-primary text-primary-content' : ''}`}
                  >
                    <Shield className='w-4 h-4' />
                    <span>Synthwave</span>
                    {theme === 'synthwave' && <Check className='w-4 h-4 ml-auto' />}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setTheme('cupcake')}
                    className={`flex items-center gap-3 ${theme === 'cupcake' ? 'bg-primary text-primary-content' : ''}`}
                  >
                    <Monitor className='w-4 h-4' />
                    <span>Cupcake</span>
                    {theme === 'cupcake' && <Check className='w-4 h-4 ml-auto' />}
                  </button>
                </li>
              </ul>
            </div>

        </div>
      </div>
    </nav>
  );
}