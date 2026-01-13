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
  Linkedin,
  ExternalLink,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Aya Lamouchi
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "accueil", label: "Accueil" },
                { id: "apropos", label: "À Propos" },
                { id: "experience", label: "Expérience" },
                { id: "projets", label: "Projets" },
                { id: "competences", label: "Compétences" },
                { id: "certifications", label: "Certifications" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-pink-500 transition-colors ${
                    activeSection === item.id
                      ? "text-pink-500 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Section Héro */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center pt-20 px-6"
      >
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-pink-100 rounded-full text-pink-600 text-sm font-semibold">
              Développeuse Full Stack
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Bonjour, je suis
              <span className="block bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                Aya Lamouchi
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Étudiante en informatique passionnée par la résolution de
              problèmes et le développement logiciel, avec une expérience
              croissante en Java, C, Laravel et design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:ayalamouchi6@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Me Contacter
              </a>
              <button
                onClick={() => scrollToSection("projets")}
                className="px-8 py-3 border-2 border-pink-500 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-all"
              >
                Voir les Projets
              </button>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={20} className="text-pink-500" />
                <span className="text-sm">ayalamouchi6@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={20} className="text-pink-500" />
                <span className="text-sm">+216 54670520</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Aya Lamouchi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection("apropos")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-pink-500" />
        </button>
      </section>

      {/* Section À Propos */}
      <section id="apropos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-100">
              <MapPin className="text-pink-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Localisation</h3>
              <p className="text-gray-600">Gouvernorat de Bizerte, Tunisie</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-100">
              <GraduationCap className="text-pink-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Formation</h3>
              <p className="text-gray-600">
                Institut Supérieur des Études Technologiques de Bizerte
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-100">
              <Code className="text-pink-500 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Spécialisation</h3>
              <p className="text-gray-600">Développement Full Stack</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Je suis une étudiante en informatique passionnée par la résolution
              de problèmes et le développement logiciel, avec une expérience
              croissante en Java, C, Laravel et design. À travers mes stages et
              projets académiques, j'ai développé la capacité de créer des
              solutions web efficaces et d'aborder les défis techniques avec
              créativité et discipline. Je prévois de poursuivre mes études
              d'ingénierie et, à l'avenir, j'aspire à apprendre et explorer le
              domaine de la cybersécurité pour élargir mes compétences
              techniques et ouvrir de nouvelles opportunités de carrière.
            </p>
          </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Expérience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {/* Expérience 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Briefcase className="text-pink-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Développeuse Web Stagiaire
                  </h3>
                  <p className="text-pink-600 font-semibold mb-2">
                    PLM Resources Company · Stage
                  </p>
                  <p className="text-gray-600 mb-4">
                    janv. 2025 - févr. 2025 · 2 mois | Bizerte, Tunisie
                  </p>
                  <p className="text-gray-700 mb-4">
                    Lors de mon stage chez PLM Resources, j'ai travaillé sur le
                    développement d'une application web de certification,
                    permettant aux utilisateurs d'obtenir un certificat après
                    avoir passé un examen, sans suivi de cours.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                      PHP
                    </span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Briefcase className="text-pink-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Développeuse Web Stagiaire
                  </h3>
                  <p className="text-pink-600 font-semibold mb-2">
                    Société Tunisienne de l'Électricité et du Gaz (STEG) · Stage
                  </p>
                  <p className="text-gray-600 mb-4">
                    janv. 2024 - févr. 2024 · 2 mois | Bizerte, Tunisie
                  </p>
                  <p className="text-gray-700">
                    Stage d'observation pour me familiariser avec le monde
                    professionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Projet 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-pink-100">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-pink-500" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Programmation Compétitive sur Codeforces
                </h3>
              </div>
              <p className="text-sm text-pink-600 font-semibold mb-4">
                mai 2024 - aujourd'hui
              </p>
              <p className="text-gray-700 mb-6">
                En tant qu'étudiante de deuxième année DSI, je participe à la
                programmation compétitive sur Codeforces, où je pratique les
                algorithmes et structures de données à travers divers défis.
              </p>
              <div className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold">
                <span>ayalamouchi6 - Codeforces</span>
                <ExternalLink size={18} />
              </div>
            </div>

            {/* Projet 2 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-pink-100">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-pink-500" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">
                  SITE_Conference
                </h3>
              </div>
              <p className="text-sm text-pink-600 font-semibold mb-4">
                juin 2025 - juin 2025
              </p>
              <p className="text-gray-700 mb-6">
                Une plateforme web construite avec TypeScript et Laravel pour
                l'événement SITE. Le site web offre un aperçu des éditions
                précédentes, permettant aux participants d'explorer les moments
                forts passés. Il prend également en charge l'inscription et les
                paiements en ligne, permettant aux utilisateurs de s'inscrire
                avec leurs emails, de recevoir des badges numériques et
                d'obtenir des certificats après l'événement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white text-pink-700 rounded-full text-sm font-semibold">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-white text-pink-700 rounded-full text-sm font-semibold">
                  Laravel
                </span>
                <span className="px-3 py-1 bg-white text-pink-700 rounded-full text-sm font-semibold">
                  MySQL
                </span>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-pink-100">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-pink-500" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">
                  BusGameSimulator
                </h3>
              </div>
              <p className="text-sm text-pink-600 font-semibold mb-4">
                févr. 2024 - avr. 2025
              </p>
              <p className="text-gray-700 mb-6">
                Ce projet est un système de simulation basé sur le langage C
                conçu pour modéliser les transports publics urbains en mode
                graphique, utilisant la bibliothèque SDL1.2. Il simule le
                fonctionnement des bus, des zones et des lignes de transport au
                sein d'une ville, permettant aux utilisateurs d'évaluer
                l'efficacité et la valeur de diverses activités de transport.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-pink-700 rounded-full text-sm font-semibold">
                  C
                </span>
                <span className="px-3 py-1 bg-white text-pink-700 rounded-full text-sm font-semibold">
                  SDL1.2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Langages",
                skills: [
                  "TypeScript",
                  "JavaScript",
                  "PHP",
                  "Python",
                  "C",
                  "Java",
                ],
              },
              {
                category: "Frameworks & Bibliothèques",
                skills: ["Laravel", "React", "Bootstrap"],
              },
              {
                category: "Bases de Données & Outils",
                skills: ["MySQL", "Git", "GitHub", "JSON"],
              },
              { category: "Technologies Web", skills: ["HTML5", "CSS3"] },
              {
                category: "Résolution de Problèmes",
                skills: ["Algorithmes", "Structures de Données", "Codeforces"],
              },
              {
                category: "Langues",
                skills: ["Français (Natif)", "Anglais (B2)"],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-pink-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 rounded-lg text-sm font-semibold border border-pink-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Certifications */}
      <section id="certifications" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Attestation mini-projet",
              "Code it up 5.0 ISET Bizerte",
              "Certificat de Participation - IEEEXtreme",
              "Certificat EFSET Anglais 51/100 (B2 Intermédiaire)",
              "Atelier : Introduction au Développement Web - SFECTORIA",
              "Participation à l'événement IEEE Day",
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-pink-200 flex items-center gap-4"
              >
                <Award className="text-pink-500 flex-shrink-0" size={32} />
                <div>
                  <p className="font-semibold text-gray-900">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-pink-500 to-rose-600"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Restons en Contact</h2>
          <p className="text-xl mb-8 opacity-90">
            N'hésitez pas à me contacter pour toute opportunité ou collaboration
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:ayalamouchi6@gmail.com"
              className="bg-white text-pink-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-4"
            >
              <Mail size={32} />
              <div className="text-left">
                <p className="font-semibold text-sm opacity-75">Email</p>
                <p className="font-bold">ayalamouchi6@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+21654670520"
              className="bg-white text-pink-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-4"
            >
              <Phone size={32} />
              <div className="text-left">
                <p className="font-semibold text-sm opacity-75">Téléphone</p>
                <p className="font-bold">+216 54670520</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/aya-lamouchi-383ab72a2/"
              className="p-4 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ayalamouchi"
              className="p-4 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Aya Lamouchi. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Conçu avec passion et créativité
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
