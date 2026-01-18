import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Github,
  Users,
  Globe,
  Sparkles,
  Zap,
  Database,
  Palette,
  Menu,
  X,
  ArrowUpRight,
  Calendar,
  Download,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [language, setLanguage] = useState("fr");
  const [iconRotation, setIconRotation] = useState(0); // ✅ ICI
  useEffect(() => {
  const interval = setInterval(() => {
    setIconRotation(prev => (prev + 0.5) % 360);
  }, 50); 
  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["accueil", "apropos", "experience", "projets", "competences", "certifications", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const content = {
    fr: {
      nav: ["Accueil", "À Propos", "Expérience", "Projets", "Compétences", "Certifications", "Contact"],
      hero: {
        badge: "Développeuse Full Stack & IA",
        greeting: "Bonjour, je suis",
        name: "Aya Lamouchi",
        description: "Étudiante en Systèmes d'Information passionnée par le développement web, l'intelligence artificielle et la résolution de problèmes complexes.",
        cta1: "Me Contacter",
        cta2: "Voir Projets",
        downloadCV: "Télécharger CV"
      },
      about: {
        title: "À Propos",
        location: "Localisation",
        locationText: "Bizerte, Tunisie",
        education: "Formation",
        educationText: "ISET Bizerte",
        specialization: "Spécialisation",
        specializationText: "Développement Full Stack & IA",
        description: "Étudiante en 3ᵉ année de Licence Appliquée en Développement des Systèmes d'Information à l'ISET Bizerte. Passionnée par la programmation, le développement web et l'intelligence artificielle. Curieuse et rigoureuse, je m'investis pleinement dans les projets techniques et associatifs. Actuellement à la recherche d'un Stage de Projet de Fin d'Études (PFE) pour appliquer mes compétences dans un environnement professionnel stimulant."
      },
      contact: {
        title: "Restons en Contact",
        subtitle: "N'hésitez pas à me contacter pour toute opportunité ou collaboration",
        email: "Email",
        phone: "Téléphone"
      },
      footer: {
        rights: "Tous droits réservés.",
        tagline: "Conçu avec passion et créativité"
      }
    },
    en: {
      nav: ["Home", "About", "Experience", "Projects", "Skills", "Certifications", "Contact"],
      hero: {
        badge: "Full Stack Developer & AI",
        greeting: "Hello, I'm",
        name: "Aya Lamouchi",
        description: "Information Systems student passionate about web development, artificial intelligence, and solving complex problems.",
        cta1: "Contact Me",
        cta2: "View Projects",
        downloadCV: "Download CV"
      },
      about: {
        title: "About Me",
        location: "Location",
        locationText: "Bizerte, Tunisia",
        education: "Education",
        educationText: "ISET Bizerte",
        specialization: "Specialization",
        specializationText: "Full Stack Development & AI",
        description: "Third-year student pursuing an Applied Bachelor's Degree in Information Systems Development at ISET Bizerte. Passionate about programming, web development, and artificial intelligence. Currently seeking a Final Year Project Internship (PFE) to apply my technical, analytical, and teamwork skills in a professional environment."
      },
      contact: {
        title: "Let's Connect",
        subtitle: "Feel free to reach out for opportunities or collaboration",
        email: "Email",
        phone: "Phone"
      },
      footer: {
        rights: "All rights reserved.",
        tagline: "Designed with passion and creativity"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <div className="hidden lg:block fixed w-8 h-8 border-2 border-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: `translate(-50%, -50%) scale(${cursorVariant === "hover" ? 1.5 : 1})` }} />

      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-pink-500/10" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl animate-pulse">A</div>
              <button onClick={() => setLanguage(language === "fr" ? "en" : "fr")} className="ml-4 px-3 py-1 text-sm bg-pink-500/20 hover:bg-pink-500/30 rounded-full transition-colors border border-pink-500/30">{language === "fr" ? "EN" : "FR"}</button>
            </div>
            <div className="hidden md:flex space-x-1">
              {t.nav.map((label, idx) => {
                const id = ["accueil", "apropos", "experience", "projets", "competences", "certifications", "contact"][idx];
                return (<button key={id} onClick={() => scrollToSection(id)} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === id ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold" : "text-gray-300 hover:text-white hover:bg-white/5"}`}>{label}</button>);
              })}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeIn">
              {t.nav.map((label, idx) => {
                const id = ["accueil", "apropos", "experience", "projets", "competences", "certifications", "contact"][idx];
                return (<button key={id} onClick={() => scrollToSection(id)} className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === id ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-300 hover:bg-white/5"}`}>{label}</button>);
              })}
            </div>
          )}
        </div>
      </nav>

      <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full border border-pink-500/30 backdrop-blur-sm">
              <Sparkles size={16} className="text-pink-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{t.hero.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">{t.hero.greeting}<span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">{t.hero.name}</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">{t.hero.description}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection("contact")} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105 flex items-center gap-2">{t.hero.cta1}<ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button>
              <button onClick={() => scrollToSection("projets")} onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")} className="px-8 py-4 border-2 border-pink-500/50 rounded-xl font-semibold hover:bg-pink-500/10 transition-all hover:scale-105 backdrop-blur-sm">{t.hero.cta2}</button>
<a 
  href={language === "fr" ? "/cv-fr.pdf" : "/cv-en.pdf"} 
  download={language === "fr" ? "CV_Aya_Lamouchi_FR.pdf" : "CV_Aya_Lamouchi_EN.pdf"}
  target="_blank"
  rel="noopener noreferrer"
  onMouseEnter={() => setCursorVariant("hover")} 
  onMouseLeave={() => setCursorVariant("default")} 
  className="px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold hover:bg-purple-500/10 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2"
>
  <Download size={20} />
  {t.hero.downloadCV}
</a>            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-400"><Mail size={20} className="text-pink-400" /><span className="text-sm">ayalamouchi6@gmail.com</span></div>
              <div className="flex items-center gap-2 text-gray-400"><Phone size={20} className="text-pink-400" /><span className="text-sm">+216 54 670 520</span></div>
              <div className="flex items-center gap-2 text-gray-400"><MapPin size={20} className="text-pink-400" /><span className="text-sm">Bizerte, Tunisia</span></div>
            </div>
          </div>
          <div className="flex justify-center animate-slideInRight">
            <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] aspect-square">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              
              {/* Main Circle Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl border border-pink-500/30"></div>
              
              {/* Orbiting Tech Icons - responsive */}
              {[
                { svg: <svg viewBox="0 0 38 57" fill="none" className="w-6 h-6 md:w-8 md:h-8"><path d="M19 28.5C19 23.26 23.26 19 28.5 19C33.74 19 38 23.26 38 28.5C38 33.74 33.74 38 28.5 38C23.26 38 19 33.74 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 42.26 4.26 38 9.5 38H19V47.5C19 52.74 14.74 57 9.5 57C4.26 57 0 52.74 0 47.5Z" fill="#0ACF83"/><path d="M0 28.5C0 23.26 4.26 19 9.5 19H19V38H9.5C4.26 38 0 33.74 0 28.5Z" fill="#FF7262"/><path d="M0 9.5C0 4.26 4.26 0 9.5 0H19V19H9.5C4.26 19 0 14.74 0 9.5Z" fill="#F24E1E"/><path d="M19 0H28.5C33.74 0 38 4.26 38 9.5C38 14.74 33.74 19 28.5 19H19V0Z" fill="#A259FF"/></svg>, baseAngle: 0 },
                { svg: <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8"><path d="M18.8 2.5L4.1 17.2l4.3 4.3 18.8-18.8L18.8 2.5z" fill="#42A5F5"/><path d="M22.9 11.5L9.1 25.3l4.3 4.3 13.7-13.7-4.2-4.4z" fill="#0D47A1"/><path d="M18.6 20.4l4.3 4.3-4.3 4.3-4.3-4.3z" fill="#42A5F5"/></svg>, baseAngle: 45 },
                { svg: <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8"><defs><linearGradient id="kotlinGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#E44857"/><stop offset="100%" stopColor="#C711E1"/></linearGradient></defs><path d="M0 32L16 16L0 0z" fill="url(#kotlinGrad)"/><path d="M16 0L32 0L16 16z" fill="url(#kotlinGrad)"/><path d="M16 16L32 32L0 32z" fill="url(#kotlinGrad)"/></svg>, baseAngle: 90 },
                { svg: <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8"><path d="M16 2L3 7l2 17.5L16 30l11-5.5L29 7z" fill="#DD0031"/><path d="M16 2v28l11-5.5L29 7z" fill="#C3002F"/><path d="M16 5.5L9.5 20h3l1.3-3.5h6.4L21.5 20h3L16 5.5zm0 4.7l2.4 5.8h-4.8z" fill="#FFF"/></svg>, baseAngle: 135 },
                { svg: <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8"><circle cx="16" cy="16" r="14" fill="#6DB33F"/><path d="M24.8 11.5c-1.4-2.4-4-4-6.9-4-2.8 0-5.3 1.5-6.7 3.7.3-.1.7-.1 1-.1 1.6 0 3 .8 3.9 2 .1.2.3.4.4.6.3.5.5 1 .6 1.6 0 .2.1.4.1.6v.2c0 2.2-1.8 4-4 4-.4 0-.8-.1-1.2-.2-1-.3-1.9-.9-2.5-1.7-.2-.2-.3-.5-.5-.8-.1-.2-.2-.4-.3-.6-.3-.8-.5-1.6-.5-2.5 0-.4 0-.8.1-1.2-1.6 1.8-2.6 4.1-2.6 6.7 0 5.5 4.5 10 10 10s10-4.5 10-10c0-2.9-1.2-5.5-3.2-7.3zm-7.3 12.3c-3.2-.3-5.7-3-5.7-6.3 0-.4 0-.8.1-1.2.3 0 .6.1.9.1 3.1 0 5.7-2.3 6.1-5.3.3 0 .6-.1.9-.1 3.6 0 6.5 2.9 6.5 6.5 0 3.5-2.8 6.4-6.3 6.5-.5 0-1 0-1.5-.1-.3-.1-.6-.1-1-.1z" fill="#FFF"/></svg>, baseAngle: 180 },
                { svg: <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><path d="M16 11.5c4.7 0 8.5 1.8 8.5 4s-3.8 4-8.5 4-8.5-1.8-8.5-4 3.8-4 8.5-4m0-2c-5.5 0-10 2.5-10 5.5s4.5 5.5 10 5.5 10-2.5 10-5.5-4.5-5.5-10-5.5z" fill="#61DAFB"/><path d="M11.5 13.75c2.3-4.1 5.5-6.75 7.1-5.88 1.6.87 1.3 5.1-.9 9.13-2.3 4.1-5.5 6.75-7.1 5.88-1.6-.87-1.3-5.1.9-9.13m-1.1-1.87c-3 5.2-3.5 10.3-1.1 11.7 2.4 1.4 6.7-1.5 9.7-6.7 3-5.2 3.5-10.3 1.1-11.7-2.4-1.4-6.7 1.5-9.7 6.7z" fill="#61DAFB"/><path d="M11.5 18.25c-2.3-4.1-2.6-8.26-.9-9.13 1.6-.87 4.8 1.78 7.1 5.88 2.3 4.1 2.6 8.26.9 9.13-1.6.87-4.8-1.78-7.1-5.88m-1.1 1.87c3 5.2 7.3 8.1 9.7 6.7 2.4-1.4 1.9-6.5-1.1-11.7-3-5.2-7.3-8.1-9.7-6.7-2.4 1.4-1.9 6.5 1.1 11.7z" fill="#61DAFB"/></svg>, baseAngle: 225 },
                { svg: <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8"><path d="M16 28L4 20V8l12-6 12 6v12L16 28z" fill="#FF2D20"/><path d="M16 2v26l12-8V8L16 2z" fill="#E74430"/><path d="M11 15.5l5 3 5-3V12l-5-3-5 3v3.5z" fill="#FFF"/></svg>, baseAngle: 270 },
                { svg: <svg viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8"><defs><linearGradient id="pyBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></linearGradient><linearGradient id="pyYellow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFE873"/><stop offset="100%" stopColor="#FFC331"/></linearGradient></defs><path d="M15.9 2c-2.5 0-4.7.2-6.3.5C6.1 3.3 5 4.8 5 7.8v3.7h10.5v1.3H5c-2.8 0-5 1.7-5 5.7s1.8 5.5 5 5.5h3v-4.3c0-3.1 2.7-5.7 5.9-5.7h7c2.6 0 4.7-2.1 4.7-4.7V7.8c0-2.8-2.4-4.9-5.3-5.3-1.8-.3-3.6-.5-5.4-.5zm-1.1 2.9c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6.7-1.6 1.6-1.6z" fill="url(#pyBlue)"/><path d="M16.1 30c2.5 0 4.7-.2 6.3-.5 3.5-.8 4.6-2.3 4.6-5.3v-3.7H16.5v-1.3H27c2.8 0 5-1.7 5-5.7s-1.8-5.5-5-5.5h-3v4.3c0 3.1-2.7 5.7-5.9 5.7h-7c-2.6 0-4.7 2.1-4.7 4.7v4.5c0 2.8 2.4 4.9 5.3 5.3 1.8.3 3.6.5 5.4.5zm1.1-2.9c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6z" fill="url(#pyYellow)"/></svg>, baseAngle: 315 },
              ].map((item, idx) => {
                const containerWidth = window.innerWidth < 768 ? 300 : window.innerWidth < 1024 ? 400 : 500;
                const radius = containerWidth * 0.36; // 36% du container
                const currentAngle = (item.baseAngle + iconRotation) * (Math.PI / 180);
                const x = containerWidth / 2 + radius * Math.cos(currentAngle);
                const y = containerWidth / 2 + radius * Math.sin(currentAngle);
                
                return (
                  <div
                    key={idx}
                    className="absolute w-12 h-12 md:w-16 md:h-16 bg-gray-800/90 backdrop-blur-md rounded-2xl border-2 border-pink-500/30 flex items-center justify-center shadow-xl shadow-pink-500/20 hover:scale-110 hover:border-pink-500/60 hover:shadow-pink-500/40 transition-all"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                      transition: 'left 0.05s linear, top 0.05s linear'
                    }}
                  >
                    {item.svg}
                  </div>
                );
              })}

              {/* Center Photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-pink-500/60 shadow-2xl shadow-pink-500/50 bg-white z-10">
                <img 
                  src="/aya-photo.jpg" 
                  alt="Aya Lamouchi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl md:text-7xl font-bold bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent">AL</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection("apropos")} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"><ChevronDown size={32} className="text-pink-400" /></button>
      </section>

      <section id="apropos" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{t.about.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MapPin, title: t.about.location, text: t.about.locationText },
              { icon: GraduationCap, title: t.about.education, text: t.about.educationText },
              { icon: Code, title: t.about.specialization, text: t.about.specializationText },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 backdrop-blur-sm" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
                <item.icon className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-2xl border border-pink-500/20 backdrop-blur-sm">
            <p className="text-lg text-gray-300 leading-relaxed">{t.about.description}</p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{language === "fr" ? "Expérience" : "Experience"}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto" />
          </div>
          <div className="space-y-8">
            {[
              { title: language === "fr" ? "Stage en Développement Web (Perfectionnement)" : "Web Development Internship (Advanced)", company: "PLM Resources", period: language === "fr" ? "janv. 2025 - févr. 2025" : "Jan 2025 - Feb 2025", description: language === "fr" ? "Conception et développement d'une application web de certification, PLM Academy, permettant aux utilisateurs d'obtenir des certificats après avoir passé des examens sans suivre de cours." : "Design and development of a web certification application, PLM Academy, allowing users to obtain certificates after passing exams without taking courses.", tech: ["PHP", "MySQL"] },
              { title: language === "fr" ? "Stage en Développement Web (Initiation)" : "Web Development Internship (Introductory)", company: "STEG", period: language === "fr" ? "janv. 2024 - févr. 2024" : "Jan 2024 - Feb 2024", description: language === "fr" ? "Introduction aux pratiques et technologies de développement web dans un environnement professionnel." : "Introduction to web development practices and technologies in a professional environment.", tech: [] },
            ].map((exp, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-[1.02] backdrop-blur-sm" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform"><Briefcase className="text-pink-400" size={28} /></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-pink-400 font-semibold mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-400 mb-4"><Calendar size={16} /><span className="text-sm">{exp.period}</span></div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    {exp.tech.length > 0 && (<div className="flex flex-wrap gap-2">{exp.tech.map((tech, i) => (<span key={i} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-semibold border border-pink-500/30">{tech}</span>))}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{language === "fr" ? "Projets" : "Projects"}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "HealthyfiTN", 
                subtitle: language === "fr" ? "Application de santé mobile" : "Mobile health app",
                description: language === "fr" ? "Clean and simple blogging platform with markdown support" : "Clean and simple blogging platform with markdown support", 
                tech: ["HTML", "Tailwind", "JavaScript"], 
                image: "/health.png",
                githubLink: "https://github.com/rayenbenzid1/VIRTUAL-DOCTOR-ANGULAR",
                demoLink: "#"
              },
              { 
                title: "Smart-Learn", 
                subtitle: language === "fr" ? "Plateforme éducative" : "Educational platform",
                description: language === "fr" ? "Landing page for a game with animations and parallax effects" : "Landing page for a game with animations and parallax effects", 
                tech: ["HTML", "CSS", "GSAP"], 
                image: "/project2.png",
                githubLink: "https://github.com/AmineAdded/Smart-Learn",
                demoLink: "#"
              },
              { 
                title: "SITE Conference", 
                subtitle: language === "fr" ? "Gestion d'événements" : "Event management",
                description: language === "fr" ? "Task tracking web app with CRUD features and clean UI" : "Task tracking web app with CRUD features and clean UI", 
                tech: ["HTML", "CSS", "API"], 
                image: "/conference.png",
                githubLink: "https://github.com/AmineAdded/SITE_Conference.git",
                demoLink: "#"
              },
              { 
                title: "Mazroub", 
                subtitle: language === "fr" ? "Gestion de transport" : "Transport management",
                description: language === "fr" ? "Landing page for a game with animations and parallax effects" : "Landing page for a game with animations and parallax effects", 
                tech: ["Laravel", "Spring Boot", "Vue.js"], 
                image: "/project.png",
                githubLink: "#",
                demoLink: "#"
              },
              { 
                title: "BusGameSimulator", 
                subtitle: language === "fr" ? "Simulation de transport" : "Transport simulation",
                description: language === "fr" ? "Task tracking web app with CRUD features and clean UI" : "Task tracking web app with CRUD features and clean UI", 
                tech: ["C", "SDL1.2"], 
                image: "/project3.png",
                githubLink: "#",
                demoLink: "https://youtu.be/YNaWm81Q88c?si=n4YmmN014vV1Eiba"
              },
              { 
                title: "Codeforces", 
                subtitle: language === "fr" ? "Programmation compétitive" : "Competitive programming",
                description: language === "fr" ? "Clean and simple blogging platform with markdown support" : "Clean and simple blogging platform with markdown support", 
                tech: ["Algorithms", "Problem Solving"], 
                image: "/project1.png",
                githubLink: "#",
                demoLink: "#"
              },
            ].map((project, idx) => (
              <div key={idx} className="group relative bg-[#1a0b2e] rounded-3xl overflow-hidden border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
                {/* Project Image */}
                <div className="relative h-52 bg-gradient-to-br from-purple-900/30 to-pink-900/30 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 ${project.image ? 'hidden' : 'flex'} items-center justify-center`}>
                    <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center">
                      <Code size={48} className="text-pink-400" />
                    </div>
                  </div>
                  {/* Hover Cursor Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={24} className="text-pink-400" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-pink-500/10 text-pink-300 rounded-full text-xs font-medium border border-pink-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-xl text-white text-sm font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 rounded-xl text-pink-300 text-sm font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowUpRight size={16} />
                      {language === "fr" ? "Démo" : "Live Demo"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="competences" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{language === "fr" ? "Compétences" : "Skills"}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                category: language === "fr" ? "Langages" : "Languages", 
                icon: Code, 
                skills: [
                  { name: "C", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 25.3c-6.2 0-11.3-5-11.3-11.3S9.8 4.7 16 4.7 27.3 9.8 27.3 16 22.2 27.3 16 27.3z" fill="#A8B9CC"/><path d="M19.4 13.8h2.3v1.5h-2.3v2.3h-1.5v-2.3h-2.3v-1.5h2.3v-2.3h1.5v2.3z" fill="#A8B9CC"/></svg> },
                  { name: "Java", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M11.6 24.8s-1.1.6.8.8c2.3.3 3.5.2 6-.3 0 0 .7.4 1.6.8-5.7 2.4-13-.1-8.4-1.3z" fill="#E76F00"/><path d="M11 21.5s-1.2.9.7 1.1c2.5.3 4.5.3 7.9-.4 0 0 .5.5 1.2.7-6.9 2-14.6.2-9.8-1.4z" fill="#E76F00"/><path d="M15.4 16.7c1.4 1.6-0.4 3-0.4 3s3.5-1.8 1.9-4.1c-1.5-2.1-2.6-3.1 3.5-6.6 0 0-9.6 2.4-5 7.7z" fill="#E76F00"/></svg> },
                  { name: "PHP", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><ellipse cx="16" cy="16" rx="14" ry="7.5" fill="#8892BF"/><path d="M8 13h2.5c1.7 0 2.5.8 2.5 2s-.8 2-2.5 2H9v2H8v-6zm1 3h1.5c.8 0 1.5-.3 1.5-1s-.7-1-1.5-1H9v2zm7-3h2.5c1.7 0 2.5.8 2.5 2v4h-1v-1.5h-3V19h-1v-6zm1 3.5h2.5V15c0-.7-.7-1-1.5-1H17v2.5zm7-3.5h1v2.5h2.5V13h1v6h-1v-2.5H24V19h-1v-6z" fill="#fff"/></svg> },
                  { name: "Python", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><defs><linearGradient id="pyBlue2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></linearGradient><linearGradient id="pyYellow2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFE873"/><stop offset="100%" stopColor="#FFC331"/></linearGradient></defs><path d="M15.9 4c-1.7 0-3.2.1-4.3.4C9.8 4.9 9 5.9 9 7.8v2.5h7v.9H9c-1.9 0-3.4 1.1-3.4 3.8s1.2 3.7 3.4 3.7h2v-2.9c0-2.1 1.8-3.8 4-3.8h4.7c1.8 0 3.2-1.4 3.2-3.1V7.8c0-1.9-1.6-3.3-3.6-3.6-1.2-.2-2.4-.3-3.6-.3zm-.7 2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" fill="url(#pyBlue2)"/><path d="M16.1 28c1.7 0 3.2-.1 4.3-.4 1.8-.5 2.6-1.5 2.6-3.4v-2.5h-7v-.9h7c1.9 0 3.4-1.1 3.4-3.8s-1.2-3.7-3.4-3.7h-2v2.9c0 2.1-1.8 3.8-4 3.8h-4.7c-1.8 0-3.2 1.4-3.2 3.1v3c0 1.9 1.6 3.3 3.6 3.6 1.2.2 2.4.3 3.6.3zm.7-2c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z" fill="url(#pyYellow2)"/></svg> },
                  { name: "JavaScript", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#F7DF1E"/><path d="M18.5 20.5c.6 1 1.4 1.7 2.8 1.7 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.3-2-1.9l-.7-.3c-2.2-.9-3.6-2.1-3.6-4.5 0-2.2 1.7-3.9 4.4-3.9 1.9 0 3.3.7 4.3 2.4l-2.3 1.5c-.5-.9-1.1-1.3-2-1.3s-1.5.6-1.5 1.3c0 .9.6 1.3 1.9 1.8l.7.3c2.6 1.1 4 2.2 4 4.7 0 2.7-2.1 4.1-5 4.1-2.8 0-4.6-1.3-5.5-3.1l2.4-1.4zm-9.2.1c.4.8 .8 1.4 1.8 1.4.9 0 1.5-.4 1.5-1.8v-9.8h3v9.9c0 3-1.8 4.4-4.3 4.4-2.3 0-3.7-1.2-4.4-2.6l2.4-1.5z" fill="#000"/></svg> },
                  { name: "TypeScript", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#3178C6"/><path d="M18.5 10.5h7v1.8h-2.5v11.2h-2v-11.2h-2.5v-1.8zm-6 1.8v11.2h-2v-11.2H8v-1.8h7v1.8h-2.5z" fill="#fff"/></svg> },
                  { name: "Kotlin", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><defs><linearGradient id="kotlinGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#E44857"/><stop offset="100%" stopColor="#C711E1"/></linearGradient></defs><path d="M4 28L16 16 4 4z" fill="url(#kotlinGrad2)"/><path d="M16 4h12L16 16z" fill="url(#kotlinGrad2)"/><path d="M16 16l12 12H4z" fill="url(#kotlinGrad2)"/></svg> },
                  { name: "Dart", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M6 6l12-2v20L6 26z" fill="#00D2B8"/><path d="M18 4l8 8-8 8V4z" fill="#00A8E1"/><path d="M6 26l12-6-12-6v12z" fill="#00D2B8"/><path d="M18 20l8 8-8-2v-6z" fill="#00A8E1"/></svg> }
                ]
              },
              { 
                category: "Frameworks", 
                icon: Zap, 
                skills: [
                  { name: "Angular", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 4L4 8l1.8 15.2L16 28l10.2-4.8L28 8z" fill="#DD0031"/><path d="M16 4v24l10.2-4.8L28 8z" fill="#C3002F"/><path d="M16 7l-5.5 12.5h2l1.1-2.8h4.8l1.1 2.8h2L16 7zm0 3.2l1.8 4.3h-3.6l1.8-4.3z" fill="#FFF"/></svg> },
                  { name: "Vue.js", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M2 4l14 24L30 4h-5.5L16 18 7.5 4z" fill="#41B883"/><path d="M7.5 4L16 18 24.5 4h-4.8L16 11.5 12.3 4z" fill="#35495E"/></svg> },
                  { name: "Laravel", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 26L6 20V10l10-6 10 6v10L16 26z" fill="#FF2D20"/><path d="M16 4v22l10-6V10L16 4z" fill="#E74430"/><path d="M12 14l4 2.5 4-2.5v-2.5l-4-2.5-4 2.5V14z" fill="#FFF"/></svg> },
                  { name: "Spring Boot", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><circle cx="16" cy="16" r="12" fill="#6DB33F"/><path d="M22 12c-1.2-2-3.5-3.3-6-3.3-2.4 0-4.6 1.3-5.8 3.2.3-.1.6-.1.9-.1 1.4 0 2.6.7 3.4 1.7.1.2.3.4.4.5.3.4.4.9.5 1.4 0 .2.1.3.1.5v.2c0 1.9-1.5 3.5-3.5 3.5-.4 0-.7-.1-1-.2-.9-.3-1.6-.8-2.2-1.5-.2-.2-.3-.4-.4-.7-.1-.2-.2-.3-.3-.5-.2-.7-.4-1.4-.4-2.2 0-.3 0-.7.1-1-1.4 1.5-2.3 3.6-2.3 5.8 0 4.8 3.9 8.7 8.7 8.7s8.7-3.9 8.7-8.7c0-2.5-1-4.8-2.8-6.4zm-6.4 10.7c-2.8-.3-5-2.6-5-5.5 0-.3 0-.7.1-1 .3 0 .5.1.8.1 2.7 0 5-2 5.3-4.6.3 0 .5-.1.8-.1 3.1 0 5.7 2.5 5.7 5.7 0 3-2.5 5.6-5.5 5.7-.4 0-.9 0-1.3-.1-.3-.1-.6-.1-.9-.2z" fill="#FFF"/></svg> },
                  { name: "Flutter", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M17 5L7 15l3.5 3.5L27 2z" fill="#42A5F5"/><path d="M20.5 10.5L10.5 20.5l3.5 3.5L24.5 13.5z" fill="#0D47A1"/><path d="M17 17.5l3.5 3.5-3.5 3.5-3.5-3.5z" fill="#42A5F5"/></svg> },
                  { name: "React", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><circle cx="16" cy="16" r="2" fill="#61DAFB"/><path d="M16 12c4 0 7 1.5 7 3.5s-3 3.5-7 3.5-7-1.5-7-3.5 3-3.5 7-3.5m0-1.5c-4.7 0-8.5 2.2-8.5 5s3.8 5 8.5 5 8.5-2.2 8.5-5-3.8-5-8.5-5z" fill="#61DAFB"/><path d="M11.5 14c2-3.5 4.7-5.8 6.1-5 1.4.8 1.1 4.4-.8 8-2 3.5-4.7 5.8-6.1 5-1.4-.8-1.1-4.4.8-8m-1-1.6c-2.6 4.5-3 9-1 10.2 2.1 1.2 5.8-1.3 8.4-5.8 2.6-4.5 3-9 1-10.2-2.1-1.2-5.8 1.3-8.4 5.8z" fill="#61DAFB"/><path d="M11.5 18c-2-3.5-2.2-7.1-.8-8 1.4-.8 4.1 1.5 6.1 5 2 3.5 2.2 7.1.8 8-1.4.8-4.1-1.5-6.1-5m-1 1.6c2.6 4.5 6.3 7 8.4 5.8 2.1-1.2 1.6-5.7-1-10.2-2.6-4.5-6.3-7-8.4-5.8-2.1 1.2-1.6 5.7 1 10.2z" fill="#61DAFB"/></svg> }
                ]
              },
              { 
                category: language === "fr" ? "Bases de Données" : "Databases", 
                icon: Database, 
                skills: [
                  { name: "MongoDB", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 4c-.3 0-.5.1-.7.2-2.5 1.3-8.3 6.2-8.3 13.1 0 3.9 1.5 6.4 3 7.9.8.8 1.7 1.3 2.7 1.6.3.1.5.2.8.2h4.9c.3 0 .6-.1.8-.2 1-.3 1.9-.8 2.7-1.6 1.5-1.5 3-4 3-7.9 0-6.9-5.8-11.8-8.3-13.1-.1-.1-.3-.2-.6-.2z" fill="#4DB33D"/><path d="M16 6c-.2 0-.3.1-.5.1-2 1.1-6.5 5.3-6.5 11.2 0 3.3 1.2 5.4 2.4 6.7.7.7 1.4 1.1 2.2 1.3.2.1.4.1.6.1h3.7c.2 0 .4 0 .6-.1.8-.2 1.5-.6 2.2-1.3 1.2-1.3 2.4-3.4 2.4-6.7 0-5.9-4.5-10.1-6.5-11.2-.2 0-.4-.1-.6-.1z" fill="#6CAC48"/><path d="M16 28v-3c-.3 0-.5-.1-.7-.2-.8-.3-1.5-.8-2.1-1.4-1.3-1.4-2.5-3.6-2.5-6.7 0-5.3 3.9-9.1 5.3-10.1v21.4z" fill="#C9E7C9"/></svg> },
                  { name: "MySQL", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M8.7 23.3c-.4 0-.7-.1-1-.3-.5-.3-.7-.8-.5-1.4.2-.4.6-.7 1.1-.7h.3c.5.1.9.4 1 .9.1.5-.1 1-.5 1.3-.2.1-.4.2-.4.2zm14.8-.3c-.3.2-.7.3-1 .3-.2 0-.3-.1-.5-.2-.4-.3-.6-.8-.4-1.3.1-.5.5-.8 1-.9h.3c.5 0 .9.3 1.1.7.2.6 0 1.1-.5 1.4z" fill="#00758F"/><path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" fill="#00758F"/><path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-3.3 12.3c-.4 0-.7-.1-1-.3-.5-.3-.7-.8-.5-1.4.2-.4.6-.7 1.1-.7h.3c.5.1.9.4 1 .9.1.5-.1 1-.5 1.3-.2.1-.4.2-.4.2zm7.8 0c-.3.2-.7.3-1 .3-.2 0-.3-.1-.5-.2-.4-.3-.6-.8-.4-1.3.1-.5.5-.8 1-.9h.3c.5 0 .9.3 1.1.7.2.6 0 1.1-.5 1.4z" fill="#E48E00"/></svg> },
                  { name: "SQL", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 8c-4.4 0-8 1.8-8 4v8c0 2.2 3.6 4 8 4s8-1.8 8-4v-8c0-2.2-3.6-4-8-4z" fill="#336791"/><ellipse cx="16" cy="12" rx="8" ry="4" fill="#5294CF"/><path d="M24 16c0 2.2-3.6 4-8 4s-8-1.8-8-4v-4c0 2.2 3.6 4 8 4s8-1.8 8-4v4z" fill="#477BB0"/></svg> }
                ]
              },
              { 
                category: "UI/UX Design", 
                icon: Palette, 
                skills: [
                  { name: "Figma", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M12 28c2.2 0 4-1.8 4-4v-4H12c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/><path d="M8 16c0-2.2 1.8-4 4-4h4v8H12c-2.2 0-4-1.8-4-4z" fill="#A259FF"/><path d="M8 8c0-2.2 1.8-4 4-4h4v8H12C9.8 12 8 10.2 8 8z" fill="#F24E1E"/><path d="M16 4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V4z" fill="#FF7262"/><path d="M24 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/></svg> },
                  { name: "Adobe XD", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#FF61F6"/><path d="M10 10l3 6-3 6h2.5l1.8-3.8 1.8 3.8H19l-3-6 3-6h-2.5l-1.8 3.8L12.5 10H10zm12 0v12h2.3c1.8 0 2.7-1 2.7-2.5v-7c0-1.5-.9-2.5-2.7-2.5H22zm1.5 1.5h.8c.7 0 1.2.4 1.2 1v7c0 .6-.5 1-1.2 1h-.8v-9z" fill="#fff"/></svg> },
                  { name: "Tailwind CSS", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 8c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 .8.2 1.3.7 1.9 1.3.9.9 2 2 4.3 2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-.9-2-2-4.3-2zm-5 8c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9.9 2 2 4.3 2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-.9-2-2-4.3-2z" fill="#06B6D4"/></svg> },
                  { name: "Bootstrap", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M6 4h20c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#7952B3"/><path d="M16.5 18c1.4 0 2.5-1.1 2.5-2.5S17.9 13 16.5 13H13v5h3.5zm-.5-7c1.4 0 2.5-1.1 2.5-2.5S17.4 6 16 6H11v16h5.5c2.5 0 4.5-2 4.5-4.5 0-1.9-1.2-3.5-3-4.1.7-.6 1-1.5 1-2.4 0-1.9-1.6-3.5-3.5-3.5H13v5h3z" fill="#fff"/></svg> }
                ]
              },
              { 
                category: language === "fr" ? "Outils" : "Tools", 
                icon: Globe, 
                skills: [
                  { name: "Git", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M30.6 14.4L17.6 1.4c-.8-.8-2-.8-2.8 0L12.2 4l3.5 3.5c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.4 3.4c.8-.3 1.8-.1 2.5.6 1 1 1 2.6 0 3.5-1 1-2.6 1-3.5 0-.7-.7-.9-1.8-.6-2.7l-3.2-3.2v8.4c.2.1.5.3.7.5 1 1 1 2.6 0 3.5-1 1-2.6 1-3.5 0-1-1-1-2.6 0-3.5.2-.2.5-.4.8-.5v-8.5c-.3-.1-.5-.3-.8-.5-1-1-1-2.6-.1-3.7L10.2 4 1.4 12.8c-.8.8-.8 2 0 2.8l13 13c.8.8 2 .8 2.8 0l12.9-12.9c.9-.8.9-2.1.1-2.9z" fill="#F05032"/></svg> },
                  { name: "GitHub", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.9-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3-.3-6.1-1.5-6.1-6.7 0-1.5.5-2.7 1.4-3.7-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.7 1.4 1.1-.3 2.2-.5 3.4-.5 1.1 0 2.3.2 3.4.5 2.5-1.8 3.7-1.4 3.7-1.4.8 1.8.3 3.2.1 3.5.9 1 1.4 2.2 1.4 3.7 0 5.2-3.2 6.4-6.2 6.7.5.4.9 1.2.9 2.5v3.7c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z" fill="#fff"/></svg> },
                  { name: "VS Code", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M23.8 3.4l-17 11.8L2.5 11 .8 12.8l4.5 3.2-4.5 3.2 1.7 1.8 4.3-4.2 17 11.8 7.2-2.7V6.1l-7.2-2.7zm4.7 4.8v15.6l-12.8-7.8 12.8-7.8z" fill="#007ACC"/></svg> },
                  { name: "IntelliJ IDEA", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" fill="#000"/><path d="M8 8h5v2H8V8zm0 4h5v2H8v-2zm0 4h5v2H8v-2z" fill="#fff"/><rect x="8" y="20" width="16" height="4" fill="#fff"/></svg> },
                  { name: "Postman", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M28 8.6c0-.7-.5-1.3-1.2-1.5l-11-3.8c-.5-.2-1.1-.2-1.6 0l-11 3.8c-.7.2-1.2.8-1.2 1.5v14.8c0 .7.5 1.3 1.2 1.5l11 3.8c.5.2 1.1.2 1.6 0l11-3.8c.7-.2 1.2-.8 1.2-1.5V8.6z" fill="#FF6C37"/><path d="M16 12l-5 3 5 3 5-3-5-3z" fill="#fff"/></svg> }
                ]
              },
              { 
                category: language === "fr" ? "Langues" : "Languages", 
                icon: Users, 
                skills: [
                  { name: language === "fr" ? "Arabe (Natif)" : "Arabic (Native)", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="2" fill="#007A3D"/><rect y="21.3" width="32" height="10.7" fill="#CE1126"/><rect y="10.7" width="32" height="10.6" fill="#fff"/><path d="M13 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm1 0c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z" fill="#CE1126"/><path d="M18.5 16l2 1.5-0.8-2.5 2-1.5h-2.5l-0.7-2.5-0.7 2.5h-2.5l2 1.5-0.8 2.5z" fill="#CE1126"/></svg> },
                  { name: language === "fr" ? "Français (Maîtrise)" : "French (Fluent)", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="10.7" height="32" fill="#002395"/><rect x="10.7" width="10.6" height="32" fill="#fff"/><rect x="21.3" width="10.7" height="32" fill="#ED2939"/></svg> },
                  { name: language === "fr" ? "Anglais (B2)" : "English (B2)", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" fill="#012169"/><path d="M0 0l32 19.2V0H0zm0 32l32-19.2V32H0z" fill="#fff"/><path d="M13.3 19.2L0 28.8v3.2l18.7-11.2V19.2h-5.4zM18.7 12.8L32 3.2V0L13.3 11.2v1.6h5.4z" fill="#C8102E"/><path d="M32 11.2L18.7 19.2h5.4L32 28.8V32l-18.7-11.2V19.2L0 28.8v3.2l32-19.2z" fill="#fff"/><path d="M0 19.2l13.3 8L18.7 32H32L18.7 19.2h-5.4L0 11.2z" fill="#C8102E"/><rect y="12" width="32" height="8" fill="#fff"/><rect y="13.3" width="32" height="5.4" fill="#C8102E"/><rect x="12" width="8" height="32" fill="#fff"/><rect x="13.3" width="5.4" height="32" fill="#C8102E"/></svg> },
                  { name: language === "fr" ? "Espagnol (Élémentaire)" : "Spanish (Elementary)", icon: <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" fill="#AA151B"/><rect y="8" width="32" height="16" fill="#F1BF00"/><rect y="12" width="32" height="8" fill="#AA151B"/></svg> }
                ]
              },
            ].map((group, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 backdrop-blur-sm" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
                <div className="flex items-center gap-3 mb-4">
                  <group.icon className="text-pink-400 group-hover:scale-110 transition-transform" size={24} />
                  <h3 className="text-xl font-bold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-200 rounded-lg text-sm font-semibold border border-pink-500/30 hover:border-pink-500/50 transition-all flex items-center gap-2">
                      {typeof skill === 'object' && skill.icon && <span className="inline-block">{skill.icon}</span>}
                      {typeof skill === 'object' ? skill.name : skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {language === "fr" ? "Certifications" : "Certifications"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: language === "fr" ? "Challenge SITE2025 - Gagnante" : "SITE2025 Challenge - Winner", issuer: "ISET Bizerte", date: "Sept 2025", image: "/cert-site2025.jpg" },
              { title: language === "fr" ? "Attestation Bus Game Simulator" : "Bus Game Simulator Project", issuer: "ISET Bizerte", date: "Oct 2025", image: "/mini projet.jpg" },
              { title: language === "fr" ? "Certificat EF SET B2" : "EF SET B2 Certificate", issuer: "EF Standard English Test", date: "2024", image: "/cert-efset.png" },
              { title: language === "fr" ? "Participation IEEE Xtreme 18.0" : "IEEE Xtreme 18.0 Participant", issuer: "IEEE", date: "2024", image: "/cert-ieee-xtreme.png" },
              { title: language === "fr" ? "Vice-Présidente CS Chapter" : "Vice President CS Chapter", issuer: "IEEE ISET Bizerte", date: "2024-2025", image: "/cert-ieee-vp.png" },
              { title: language === "fr" ? "Membre Active IEEE" : "Active IEEE Member", issuer: "IEEE ISET Bizerte", date: "2023-Present", image: "/cert-ieee-member.png" },
            ].map((cert, idx) => (
              <div 
                key={idx} 
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 backdrop-blur-sm overflow-hidden cursor-pointer" 
                onMouseEnter={() => setCursorVariant("hover")} 
                onMouseLeave={() => setCursorVariant("default")}
              >
                {/* Image du certificat */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 overflow-hidden">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`absolute inset-0 ${cert.image ? 'hidden' : 'flex'} items-center justify-center`}>
                    <div className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl">
                      <Award className="text-pink-400" size={48} />
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Informations du certificat */}
                <div className="p-6">
                  <h3 className="font-bold text-white mb-2 text-lg">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-pink-400 text-xs font-semibold">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            {t.contact.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:ayalamouchi6@gmail.com"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-4"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-pink-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm text-gray-400 mb-1">{t.contact.email}</p>
                <p className="font-bold text-white">ayalamouchi6@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+21654670520"
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-4"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="p-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform">
                <Phone size={32} className="text-pink-400" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm text-gray-400 mb-1">{t.contact.phone}</p>
                <p className="font-bold text-white">+216 54 670 520</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ayalamouchi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-pink-500/30 hover:border-pink-500/60 hover:scale-110 transition-all backdrop-blur-sm"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <Github size={28} className="text-pink-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/aya-lamouchi-383ab72a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-pink-500/30 hover:border-pink-500/60 hover:scale-110 transition-all backdrop-blur-sm"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <svg className="w-7 h-7 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-pink-500/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Aya Lamouchi. {t.footer.rights}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {t.footer.tagline}
          </p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;