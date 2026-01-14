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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-pink-500/30 shadow-2xl shadow-pink-500/50 backdrop-blur-sm bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                <img 
                  src="/aya-photo.jpg" 
                  alt="Aya Lamouchi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-9xl font-bold bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-transparent">AL</div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur-2xl opacity-50 animate-pulse" />
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
              { title: "HealthyfiTN", period: "Oct 2025 - Dec 2025", description: language === "fr" ? "Solution de santé numérique complète avec app mobile Kotlin et plateforme web Angular. Système de rendez-vous médicaux, surveillance santé continue, modèle IA pour analyse nutritionnelle, avatar 3D et chatbot Gemini." : "Complete digital healthcare solution with Kotlin mobile app and Angular web platform. Medical appointment system, continuous health monitoring, AI nutritional analysis, 3D avatar and Gemini chatbot.", tech: ["Angular", "Spring Boot", "Kotlin", "Python", "Flask"], icon: Zap },
              { title: "Smart-Learn", period: "Nov 2025 - Dec 2025", description: language === "fr" ? "Plateforme éducative révolutionnaire combinant quiz interactifs, contenu YouTube et personnalisation IA. Évaluations automatiques, parcours adaptatifs et progression gamifiée." : "Revolutionary educational platform combining interactive quizzes, YouTube content and AI personalization. Automatic assessments, adaptive paths and gamified progress.", tech: ["Flutter", "Spring Boot", "MySQL", "Gemini API"], icon: Sparkles },
              { title: "SITE Conference", period: "June 2025", description: language === "fr" ? "Plateforme web pour l'événement SITE Conference. Aperçu des éditions, inscription et paiement en ligne, notifications email, badges numériques et génération de certificats." : "Web platform for SITE Conference event. Edition overview, online registration and payment, email notifications, digital badges and certificate generation.", tech: ["TypeScript", "Laravel", "MySQL"], icon: Globe },
              { title: "Mazroub", period: "2025", description: language === "fr" ? "Application web full-stack de gestion de transport en Tunisie. Gestion des rôles utilisateur/chauffeur/admin, réservation et suivi des trajets." : "Full-stack transport management web application in Tunisia. User/driver/admin role management, booking and trip tracking.", tech: ["Laravel", "Spring Boot", "Vue.js", "MongoDB"], icon: Users },
              { title: "BusGameSimulator", period: "Feb 2024 - Apr 2025", description: language === "fr" ? "Système de simulation en C modélisant les transports publics urbains en mode graphique avec SDL1.2. Simulation de bus, zones et lignes de transport." : "C-based simulation system modeling urban public transportation in graphics mode with SDL1.2. Bus, zone and transport line simulation.", tech: ["C", "SDL1.2"], icon: Database },
              { title: "Codeforces", period: language === "fr" ? "Mai 2024 - présent" : "May 2024 - present", description: language === "fr" ? "Participation active à la programmation compétitive sur Codeforces, pratiquant algorithmes et structures de données à travers divers défis." : "Active participation in competitive programming on Codeforces, practicing algorithms and data structures through various challenges.", tech: ["Algorithms", "Problem Solving"], icon: Code },
            ].map((project, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 backdrop-blur-sm" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform"><project.icon className="text-pink-400" size={24} /></div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-sm text-pink-400 font-semibold mb-3">{project.period}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tech.map((tech, i) => (<span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold border border-purple-500/30">{tech}</span>))}</div>
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
              { category: language === "fr" ? "Langages" : "Languages", icon: Code, skills: ["C", "Java", "PHP", "Python", "JavaScript", "TypeScript", "Kotlin", "Dart"] },
              { category: "Frameworks", icon: Zap, skills: ["Angular", "Vue.js", "Laravel", "Spring Boot", "Flutter", "React"] },
              { category: language === "fr" ? "Bases de Données" : "Databases", icon: Database, skills: ["MongoDB", "MySQL", "SQL"] },
              { category: "UI/UX Design", icon: Palette, skills: ["Figma", "Adobe XD", "Tailwind CSS", "Bootstrap"] },
              { category: language === "fr" ? "Outils" : "Tools", icon: Globe, skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"] },
              { category: language === "fr" ? "Langues" : "Languages", icon: Users, skills: [language === "fr" ? "Arabe (Natif)" : "Arabic (Native)", language === "fr" ? "Français (Maîtrise)" : "French (Fluent)", language === "fr" ? "Anglais (B2)" : "English (B2)", language === "fr" ? "Espagnol (Élémentaire)" : "Spanish (Elementary)"] },
            ].map((group, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 backdrop-blur-sm" onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
                <div className="flex items-center gap-3 mb-4">
                  <group.icon className="text-pink-400 group-hover:scale-110 transition-transform" size={24} />
                  <h3 className="text-xl font-bold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">{group.skills.map((skill, i) => (<span key={i} className="px-3 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-200 rounded-lg text-sm font-semibold border border-pink-500/30 hover:border-pink-500/50 transition-all">{skill}</span>))}</div>
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
              { title: language === "fr" ? "Challenge SITE2025 - Gagnante" : "SITE2025 Challenge - Winner", issuer: "ISET Bizerte", date: "Sept 2025" },
              { title: language === "fr" ? "Attestation Bus Game Simulator" : "Bus Game Simulator Project", issuer: "ISET Bizerte", date: "Oct 2025" },
              { title: language === "fr" ? "Certificat EF SET B2" : "EF SET B2 Certificate", issuer: "EF Standard English Test", date: "2024" },
              { title: language === "fr" ? "Participation IEEE Xtreme 18.0" : "IEEE Xtreme 18.0 Participant", issuer: "IEEE", date: "2024" },
              { title: language === "fr" ? "Vice-Présidente CS Chapter" : "Vice President CS Chapter", issuer: "IEEE ISET Bizerte", date: "2024-2025" },
              { title: language === "fr" ? "Membre Active IEEE" : "Active IEEE Member", issuer: "IEEE ISET Bizerte", date: "2023-Present" },
            ].map((cert, idx) => (
              <div 
                key={idx} 
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 backdrop-blur-sm" 
                onMouseEnter={() => setCursorVariant("hover")} 
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl group-hover:rotate-12 transition-transform">
                    <Award className="text-pink-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-pink-400 text-xs font-semibold">{cert.date}</p>
                  </div>
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