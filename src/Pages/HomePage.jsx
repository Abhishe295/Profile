import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence,useSpring } from 'framer-motion';
import { Dumbbell, Activity, Book, ChefHat, Sparkles, Zap, Rocket, ArrowRight, Star, FileDown, Eye } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import MindWell from '../assets/MindWell.png';
import Chatty from '../assets/Chatty.jpg';
import MemoryCard from '../assets/MemoryCard.jpg';
import Abhishek from '../assets/Abhishek.jpg';

const letters = "!<>-_\\/[]{}—=+*^?#________";

function scrambleText(original, setDisplay) {
  let iteration = 0;

  const interval = setInterval(() => {
    setDisplay(() =>
      original
        .split("")
        .map((char, i) => {
          if (i < iteration) return original[i];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("")
    );

    iteration += 1;

    if (iteration >= original.length) clearInterval(interval);
  }, 20);
}

const LoadingScreen = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState("Code");
  const [displayText, setDisplayText] = useState("Code");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentStep = 0;
    const totalTime = 3000; // 3 secs
    const interval = 20;
    const steps = totalTime / interval;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      if (newProgress >= 33 && newProgress < 66 && loadingText !== "Chaos") {
        setLoadingText("Chaos");
        scrambleText("Chaos", setDisplayText);
      } else if (newProgress >= 66 && loadingText !== "Abhishek") {
        setLoadingText("Abhishek");
        scrambleText("Abhishek", setDisplayText);
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        onComplete();
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const glitchPercent =
    Math.random() > 0.97 ? Math.floor(progress + Math.random() * 5) : progress;

  return (
    <div className="fixed inset-0 z-[9999] bg-base-100 flex items-center justify-center overflow-hidden">

      {/* Huge % number (theme styled) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            text-[250px] md:text-[400px] font-black text-base-content/10
            select-none leading-none tracking-tighter animate-pulse
          "
        >
          {Math.floor(glitchPercent)}
        </div>
      </div>

      {/* Foreground text */}
      <div className="relative z-10 text-center">
        <h1
          className="
            text-7xl md:text-9xl font-black 
            bg-gradient-to-r from-primary via-secondary to-accent 
            bg-clip-text text-transparent 
            transition-all duration-300
          "
        >
          {displayText}
        </h1>

        <p className="mt-3 text-primary/70 font-mono tracking-widest animate-pulse text-sm">
          SYSTEM BOOTING • INITIALIZING MODULES • DECRYPTING SOUL
        </p>
      </div>
    </div>
  );
};

const LiquidCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Smooth physics-based trailing blobs
  const blob1X = useSpring(0, { stiffness: 90, damping: 20 });
  const blob1Y = useSpring(0, { stiffness: 90, damping: 20 });

  const blob2X = useSpring(0, { stiffness: 50, damping: 18 });
  const blob2Y = useSpring(0, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
      blob1X.set(e.clientX);
      blob1Y.set(e.clientY);
      blob2X.set(e.clientX);
      blob2Y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [blob1X, blob1Y, blob2X, blob2Y]);

  // Calculate distortion values
  const dx = mouse.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const dy = mouse.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const dist = Math.hypot(dx, dy);

  // --- Distortion calculations ---
  const shrink = 1 - Math.min(dist, 300) / 2000;
  const bend = 1 + Math.min(dist, 400) / 20000;
  const ripple = 1 + (1 - Math.min(dist, 150) / 150) * 0.05;
  const swirl = (dx / 2000);
  const pullX = dx * 0.03;
  const pullY = dy * 0.03;

  const transform = `
    perspective(900px)
    rotateX(55deg)
    translateZ(-120px)
    translateX(${pullX}px)
    translateY(${pullY}px)
    scale(${shrink})
    scale(${bend})
    rotate(${swirl}deg)
    scale(${ripple})
  `;

  return (
    <>
      {/* ================= GRID OVERLAY (BLACKHOLE EFFECT) ================= */}
      <div className="pointer-events-none fixed inset-0 z-[9997]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59,130,246,0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,130,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform,
            transformOrigin: "center center",
            maskImage: `radial-gradient(circle 500px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.95), transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 500px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.95), transparent 70%)`,
          }}
        />
      </div>

      {/* ================= BACKGROUND GLOW ================= */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(138, 43, 226, 0.18), transparent 40%)`,
        }}
      />

      {/* ================= BLOBS (GOOEY CURSOR) ================= */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{ filter: "url(#gooey)" }}
      >
        {/* Main Blob */}
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 fixed shadow-2xl"
          style={{
            x: blob1X,
            y: blob1Y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        {/* Smaller trailing Blob */}
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 fixed opacity-80 shadow-xl"
          style={{
            x: blob2X,
            y: blob2Y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      {/* ================= GOOEY SVG FILTER ================= */}
      <svg className="hidden">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10
              "
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
};



const HomePage = () => {
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const resumePath = '/resume.pdf';

  const handleViewResume = () => {
    window.open(resumePath, '_blank');
    setShowResumeMenu(false);
    toast.success('Opening resume in new tab!', {
      icon: '👀',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Abhishek_Kumar_Pundir_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeMenu(false);
    toast.success('Resume downloaded successfully!', {
      icon: '📥',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const themes = ['primary','secondary','accent'];
  const featuredProjects = [
    {
        name: "MindWell",
        image: MindWell,
        shortDesc: "A thoughtful mental wellness platform that helps users track emotions, jot down daily reflections, and chat with an AI companion for mindful growth.",
        tags: ["MERN", "Python", "AI", "OpenCV", "Librosa", "Socket.io"],
        theme: themes[0],
        link: "https://github.com/Abhishe295/ThinkBoard",
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
        name: "Memory Card Game",
        image: MemoryCard,
        shortDesc: "A dynamic emoji-based card matching game with multiple levels, interactive feedback, and score tracking for casual fun and memory training.",
        tags: ["JavaScript", "Game Logic", "CSS"],
        theme: themes[2],
        link: "https://github.com/Abhishe295/Memory---card-game-with-levels",
      },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 text-base-content overflow-hidden cursor-none">
          <LiquidCursor isHovering={isHovering} />
          <Toaster position="top-center" reverseOrder={false} />
          
          {/* Animated background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <Navbar />

          {/* Hero Section with Liquid Hover Effect */}
          <section 
            className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-32"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4"
              >
                <h1 className="text-6xl md:text-7xl font-black leading-tight">
                  Hi, I'm
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                    Abhishek Kumar Pundir
                  </span>
                </h1>

                <div className="flex justify-center items-center gap-3 text-2xl md:text-3xl font-bold text-base-content/80">
                  <Zap className="w-8 h-8 text-primary animate-pulse" />
                  <span>Full Stack & AI Developer</span>
                </div>

                <p className="text-xl text-base-content/70 leading-relaxed max-w-xl mx-auto">
                  Crafting intelligent, user-centric web experiences with cutting-edge AI.
                  Transforming ideas into scalable digital solutions.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <motion.a
                    href="/project"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/50"
                  >
                    <Rocket className="w-5 h-5" />
                    Explore Projects
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  
                  {/* Resume Button with Dropdown */}
                  <div className="relative">
                    <motion.button
                      onClick={() => setShowResumeMenu(!showResumeMenu)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-secondary btn-lg gap-2 shadow-lg shadow-secondary/50"
                    >
                      <FileDown className="w-5 h-5" />
                      Resume
                    </motion.button>
                    
                    {showResumeMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-base-100 rounded-lg shadow-xl border border-base-300 overflow-hidden z-50"
                      >
                        <button
                          onClick={handleViewResume}
                          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-base-200 transition-colors text-left"
                        >
                          <Eye className="w-5 h-5 text-primary" />
                          <span className="font-medium">View Resume</span>
                        </button>
                        <button
                          onClick={handleDownloadResume}
                          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-base-200 transition-colors text-left border-t border-base-300"
                        >
                          <FileDown className="w-5 h-5 text-secondary" />
                          <span className="font-medium">Download Resume</span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30"></div>

                    {/* Circular image container */}
                    <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 border-4 border-primary/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <img
                        src={Abhishek}
                        alt="Abhishek Kumar Pundir"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Rotating dashed ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-base-content/80 leading-relaxed">
                    I'm <span className="font-bold text-primary">Abhishek Kumar Pundir</span>, a <span className="font-bold text-secondary">full-stack developer</span> and AI enthusiast studying B.Tech in CSE (AI/ML) at Lovely Professional University. I love building projects that combine coding, problem-solving, and creativity—whether it's a web app, a game, or a small AI experiment.
                  </p>
                  <p className="text-lg text-base-content/80 leading-relaxed">
                    I enjoy experimenting with JavaScript, Python, and AI/ML tools, and I like making things that are interactive and fun. From creating real-time chat apps to developing memory games and music players, I focus on learning by doing and pushing my skills further every day.
                  </p>
                  <p className="text-lg text-base-content/80 leading-relaxed">
                    Outside coding, I'm into running, going to the gym, cooking, and reading books. I try to balance learning and fitness because both help me stay focused and motivated for my projects.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Tech <span className="text-secondary">Arsenal</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { title: "Frontend", items: ["React", "Tailwind", "DaisyUI", "Bootstrap", "Chakra","NextJS"], gradient: "from-primary to-primary/50", icon: "🎨" },
                { title: "Backend", items: ["Node.js", "Express.js", "REST APIs","Websocket","WebRTC","Fast APIs"], gradient: "from-secondary to-secondary/50", icon: "⚙️" },
                { title: "Database", items: ["MongoDB", "MySQL", "SQLite"], gradient: "from-accent to-accent/50", icon: "🗄️" },
                { title: "AI/ML", items: ["TensorFlow", "OpenCV", "NLP", "PyTorch","NumPy","MediaPipe"], gradient: "from-success to-success/50", icon: "🤖" }
              ].map((stack, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" 
                       style={{ background: `linear-gradient(135deg, var(--p) 0%, var(--s) 100%)` }}></div>
                  <div className={`relative card bg-base-100/50 backdrop-blur-sm border-2 border-base-300 hover:border-primary shadow-xl h-full transition-all`}>
                    <div className="card-body">
                      <div className="text-4xl mb-2">{stack.icon}</div>
                      <h3 className="card-title text-2xl font-bold mb-4">{stack.title}</h3>
                      <ul className="space-y-2">
                        {stack.items.map((tech, i) => (
                          <li key={i} className="flex items-center gap-2 text-base-content/70">
                            <Star className="w-3 h-3 text-primary fill-primary" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Featured Projects Section */}
          <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              <p className="text-xl text-base-content/60 mt-6">Bringing ideas to life, one project at a time</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card {...project} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.a
                href="/project"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-lg gap-2 border-2"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </section>

          {/* Hobbies Section */}
          <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Beyond <span className="text-accent">Code</span>
              </h2>
              <div className="w-36 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Activity className="w-12 h-12" />,
                  title: "Running",
                  desc: "Early morning runs that fuel discipline, clarity, and endurance.",
                  color: "accent",
                },
                {
                  icon: <Dumbbell className="w-12 h-12" />,
                  title: "Gyming",
                  desc: "Building strength, resilience, and the V-shaped vision—one rep at a time.",
                  color: "primary",
                },
                {
                  icon: <Book className="w-12 h-12" />,
                  title: "Book Reading",
                  desc: "Absorbing new ideas, perspectives, and stories that spark imagination.",
                  color: "secondary",
                },
                {
                  icon: <ChefHat className="w-12 h-12" />,
                  title: "Cooking",
                  desc: "Experimenting with flavors and plating creativity that nourishes both mind and soul.",
                  color: "success",
                },
              ].map((hobby, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.07, rotate: 2 }}
                  className="transition-all"
                >
                  <div
                    className={`card bg-gradient-to-br from-base-100 to-base-200 border-2 border-${hobby.color}/30 hover:border-${hobby.color} backdrop-blur-lg h-72 shadow-2xl`}
                  >
                    <div className="card-body items-center text-center justify-center space-y-4">
                      <div className={`p-4 rounded-2xl bg-${hobby.color}/10 text-${hobby.color}`}>
                        {hobby.icon}
                      </div>
                      <h3 className="card-title text-2xl">{hobby.title}</h3>
                      <p className="text-sm text-base-content/60 leading-relaxed">
                        {hobby.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="relative border-t border-base-300 bg-base-200/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">Abhishek Kumar Pundir</p>
                <p className="text-base-content/60">&copy; 2025 — Built with React & DaisyUI 💻</p>
              </div>
            </div>
          </footer>

          <style jsx>{`
            @keyframes gradient {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 3s ease infinite;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default HomePage;