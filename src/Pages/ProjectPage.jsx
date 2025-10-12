import React from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import MindWell from '../assets/MindWell.png';
import Coshira from '../assets/Coshira.png';
import Chatty from '../assets/Chatty.jpg';
import MemoryCard from '../assets/MemoryCard.jpg';
import MusicPlayer from '../assets/MusicPlayer.png';

const ProjectPage = () => {
  const themes = ['primary', 'secondary', 'accent'];

const projects = [
  {
    name: "MindWell",
    image: MindWell,
    shortDesc: "A thoughtful mental wellness platform that helps users track emotions, jot down daily reflections, and chat with an AI companion for mindful growth.",
    tags: ["MERN", "Python", "AI", "OpenCV", "Librosa", "Socket.io"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/ThinkBoard",
  },
  {
    name: "Music-Player",
    image: MusicPlayer,
    shortDesc: "An elegant and responsive music player with shuffled playlists, smooth controls, and a modern UI built entirely with vanilla web technologies.",
    tags: ["JavaScript", "HTML5", "CSS"],
    theme: themes[1],
    link: "https://github.com/Abhishe295/Music-Player-with-shuffled-list",
  },
  {
    name: "Memory Card Game",
    image: MemoryCard,
    shortDesc: "A dynamic emoji-based card matching game with multiple levels, interactive feedback, and score tracking for casual fun and memory training.",
    tags: ["JavaScript", "Game Logic", "CSS"],
    theme: themes[2],
    link: "https://github.com/Abhishe295/Memory---card-game-with-levels",
  },
  {
    name: "Project-Coshira",
    image: Coshira,
    shortDesc: "A collaborative student hub where learners can connect, share academic resources, and engage in discussions within an intuitive UI.",
    tags: ["JavaScript", "HTML5", "CSS"],
    theme: themes[2],
    link: "https://github.com/Abhishe295/Project-Coshira",
  },
  {
    name: "Chatty",
    image: Chatty,
    shortDesc: "A real-time chat application enabling fast and reliable communication with socket-powered messaging, typing indicators, and emoji support.",
    tags: ["Node.js", "Express", "Socket.io", "React"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/REalTime---Chatapp-",
  },
  {
    name: "Scroll",
    shortDesc: "A futuristic gesture-based scrolling app that allows users to navigate pages using hand movements — ideal for hands-free browsing and fun demos.",
    tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    theme: themes[1],
    link: "https://github.com/Abhishe295/Scroll",
  },
  {
    name: "Solar-System",
    shortDesc: "An interactive 3D solar system simulation that visualizes planetary motion and orbit mechanics using CSS animations and JavaScript physics.",
    tags: ["Canvas", "HTML5", "JavaScript", "CSS"],
    theme: themes[2],
    link: "https://github.com/Abhishe295/Solar-System",
  },
  {
    name: "Encrypted-Communication",
    shortDesc: "A secure communication project featuring Morse code translation, speech-to-text conversion, and encryption for safe data transmission.",
    tags: ["Arduino", "C++", "Python", "pyttsx3", "SpeechRec"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/Encrypted-Communication",
  },
  {
    name: "Jarvis",
    shortDesc: "A personalized AI voice assistant that executes commands, automates desktop actions, and provides smart conversational feedback.",
    tags: ["Python", "SpeechRec", "NLP", "pyttsx3", "pyautogui", "pywhatkit"],
    theme: themes[1],
    link: "https://github.com/Abhishe295/Jarvis",
  },
  {
    name: "Authenticator",
    shortDesc: "A full-stack authentication system with JWT, secure password handling, email verification, and a responsive React-based UI.",
    tags: ["React", "JWT", "MongoDB", "Express"],
    theme: themes[2],
    link: "https://github.com/Abhishe295/Authenticator",
  },
  {
    name: "Clock",
    shortDesc: "A sleek and minimalist digital clock that auto-adapts its theme based on the current system mode for a seamless user experience.",
    tags: ["JavaScript", "CSS", "HTML5"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/Clock",
  },
  {
    name: "Text-to-Voice-converter",
    shortDesc: "A lightweight text-to-speech web app that converts written text into audio output with multi-language support using browser APIs.",
    tags: ["Web Speech API", "JavaScript"],
    theme: themes[1],
    link: "https://github.com/Abhishe295/Text-to-Voice-converter",
  },
  {
    name: "QR-Code-generate",
    shortDesc: "A simple yet efficient QR code generator that can encode URLs, text, or contact information using qrcode.js.",
    tags: ["qrcode.js", "HTML5", "JavaScript"],
    theme: themes[2],
    link: "https://github.com/Abhishe295/QR-Code-generate",
  },
  {
    name: "To-do-list",
    shortDesc: "An interactive task manager that supports drag-and-drop reordering, local storage persistence, and clean UI animations.",
    tags: ["HTML5", "CSS", "JavaScript", "LocalStorage"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/To-do-list",
  },
  {
    name: "Note-Pad",
    shortDesc: "A simple notepad web app for writing, saving, and editing notes with optional markdown formatting and offline access.",
    tags: ["HTML5", "JavaScript", "CSS"],
    theme: themes[1],
    link: "https://github.com/Abhishe295/Note-Pad",
  },
  {
    name: "Age-Calculator",
    shortDesc: "A handy age calculator that determines exact age from a given birth date, accurately handling leap years and date differences.",
    tags: ["JavaScript"],
    theme: themes[2],
    link: "https://github.com/Abhishe295/Age-Calculator",
  },
  {
    name: "Calculator",
    shortDesc: "A fast and functional calculator app that supports basic arithmetic and keyboard shortcuts with a polished UI.",
    tags: ["JavaScript", "Math.js"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/Calculator",
  },
  {
    name: "Chat-bot",
    shortDesc: "An intelligent chatbot capable of handling both image and text inputs while delivering contextual and engaging responses.",
    tags: ["JavaScript", "Gemini API", "HTML5"],
    theme: themes[1],
    link: "https://github.com/Abhishe295/Chat-bot-accepts-pictures-also",
  },
  {
    name: "Search-for-images",
    shortDesc: "An image search web app that fetches results from external APIs with infinite scrolling and smooth loading animations.",
    tags: ["Unsplash API", "JavaScript", "HTML5"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/Search-for-images",
  },
  {
    name: "INFINITY-HUB",
    shortDesc: "A dashboard-style UI for movie and series tracking with categorized watchlists and responsive layouts.",
    tags: ["HTML5", "CSS", "JavaScript"],
    theme: themes[1],
    link: "https://github.com/Abhishe295/INFINITY-HUB",
  },
  {
    name: "Tic-Tac-Toe",
    shortDesc: "A modernized version of the classic Tic-Tac-Toe game featuring an AI opponent, score tracking, and responsive design.",
    tags: ["JavaScript", "HTML5", "CSS"],
    theme: themes[2],
    link: "https://github.com/Abhishe295/Tic-Tac-Toe",
  },
  {
    name: "Weather-App",
    shortDesc: "A dynamic weather app that detects your location and displays real-time forecasts with visually adaptive backgrounds.",
    tags: ["OpenWeather API", "Geolocation", "JavaScript"],
    theme: themes[0],
    link: "https://github.com/Abhishe295/Weather-with-geo-loaction",
  },
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-base-200">
      <Navbar />
      
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-5">
        <div className="max-w-7xl mx-auto">
          {/* Header with description */}
          <div className="mb-12 sm:mb-16 text-center">
            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 leading-tight">
              My Projects
            </h1>
            
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" /> */}
            
            <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              These are all my projects which showcase my expertise in full-stack development, UI/UX design, AI and ML, and modern web frameworks. Each project represents a unique challenge solved with innovation and precision.
            </p>
            <div className="mt-2 h-1 w-4/12 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <div key={index} className="h-full">
                <Card
                  name={project.name}
                  image={project.image}
                  shortDesc={project.shortDesc}
                  tags={project.tags}
                  theme={project.theme}
                  link = {project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;