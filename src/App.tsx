import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, Trophy, Users2, Code, Rocket, Globe, Instagram, Linkedin, MessageSquare, MapPin, Clock, Gift, Briefcase, Users, Brain, Network, Star } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CountdownTimer } from './components/CountdownTimer';
import { FAQSection } from './components/FAQSection';
import About from './pages/About';
import { RegistrationSuccess } from './components/RegistrationSuccess';
import Tracks from './pages/Tracks';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
}

function Navigation() {
  return (
   <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white neon-text">
              <img src="https://lh3.googleusercontent.com/a/ACg8ocJAuTcKKDTgQNOGlPBiaC_KNw1SihXTcfziX_dHC8FUnqqaXR4=s576-c-no" alt="XHorizon Logo" className="h-8 w-auto" />
              XHorizon
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">Hack with India</span>
              <img src="https://media.licdn.com/dms/image/v2/D560BAQGz5OEz6lXfOQ/company-logo_200_200/company-logo_200_200/0/1711310376436/hackwithindia_logo?e=1748476800&v=beta&t=ri7sl14XNDvACzKLQxnE6Qgt-EgNvDIqzeOZJ31xe1o" alt="Hack with India Logo" className="h-8 w-8 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </motion.nav>
  );
}

function CollaboratorsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          In Collaboration With
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {[
            {
              name: "The Coding Club",
              logo: "https://media.licdn.com/dms/image/v2/D5603AQEmomPDnJLY3g/profile-displayphoto-shrink_800_800/B56ZWTomH9GQAc-/0/1741938652015?e=1748476800&v=beta&t=S_UPFtevvz7OeITMZoP5RvH2aVfC9r_LAXAoQY2l5G4",
              description: "Empowering students through technology and innovation",
              isCircle: true,
              size: "h-32 w-32"
            },
            {
              name: " Department of AIML",
              logo: "https://media.mbu.asia/wp-content/uploads/2024/06/logo-with-tagline-FINAL-1.png",
              description: "by Mohan Babu University",
              isCircle: false,
              size: "h-32"
            },
            {
              name: "HackwithIndia",
              logo: "https://media.licdn.com/dms/image/v2/D560BAQGz5OEz6lXfOQ/company-logo_200_200/company-logo_200_200/0/1711310376436/hackwithindia_logo?e=1748476800&v=beta&t=ri7sl14XNDvACzKLQxnE6Qgt-EgNvDIqzeOZJ31xe1o",
              description: "India's Premier Student Hackathon Platform",
              isCircle: true,
              size: "h-32 w-32"
            }
          ].map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-blue-500/30">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6 relative flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>
                    <div className={`relative ${partner.size} flex items-center justify-center ${partner.isCircle ? 'rounded-full overflow-hidden' : ''}`}>
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`h-full ${partner.isCircle ? 'w-full object-cover' : 'w-auto object-contain'}`}
                      />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400">{partner.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeContent() {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-6">
        {/* Dynamic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          {/* Floating elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-20 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"
          />

          {/* Main title with enhanced animation */}
       <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"></div>
            <span className="relative block text-lg font-bold text-gray-400 mb-4">Department of AIML presents</span>
            <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-6">
              XHORIZON
            </h1>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200"
          >
            Where Innovation Meets Infinity
          </motion.h2>

          <div className="mb-12">
            <CountdownTimer />
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass-card px-6 py-4 flex items-center gap-3 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 text-blue-400" />
              <span className="text-lg">April 12-13, 2025</span>
            </motion.div>
           
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="glass-card px-6 py-4 flex items-center gap-3 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <MapPin className="w-6 h-6 text-purple-400" />
              <span className="text-lg">Mohan Babu University, Tirupati</span>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tracks">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary relative overflow-hidden group px-8 py-4 text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 group-hover:translate-x-full transition-transform duration-500"></div>
                <span className="relative flex items-center gap-2">
                  Explore Tracks
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group px-8 py-4 text-lg"
              >
                <span className="relative flex items-center gap-2">
                  About Us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex justify-center gap-8"
          >
            <a href="https://www.instagram.com/thecodingclubx/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/the-coding-club-922327356/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://chat.whatsapp.com/KqNmfIapdWE7ntw7D1DRAx" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <MessageSquare className="w-7 h-7" />
            </a>
          </motion.div>
        </motion.div>
      </header>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-24 neon-text"
          >
            Event Timeline
          </motion.h2>

          <div className="hidden md:block absolute left-1/2 top-40 bottom-20 w-1 bg-gradient-to-b from-blue-400/20 via-blue-400/40 to-blue-400/20 transform -translate-x-1/2">
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 glow-effect"></div>
            <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 glow-effect"></div>
          </div>

          <div className="relative">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Registration Opens",
                date: "March 25, 2025",
                time: "10:00 AM",
                position: "left"
              },
              {
                icon: <Users2 className="w-8 h-8" />,
                title: "Team Formation Deadline",
                date: "April 5, 2025",
                time: "11:59 PM",
                position: "right"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Hackathon Kickoff",
                date: "April 12, 2025",
                time: "10:30 AM",
                position: "left"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Winners Announcement",
                date: "April 13, 2025",
                time: "10:30 AM",
                position: "right"
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: event.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-20 md:mb-32 ${
                  event.position === "left" 
                    ? "md:mr-auto md:pr-8 md:text-right" 
                    : "md:ml-auto md:pl-8 md:text-left"
                } md:w-[calc(50%-20px)] last:mb-0`}
              >
                <div className={`
                  flex items-center gap-4 mb-4
                  ${event.position === "left" ? "md:flex-row-reverse" : "md:flex-row"}
                `}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                      {event.icon}
                    </div>
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-8 w-8 h-px bg-gradient-to-r from-blue-400/50 to-transparent">
                  <div className="absolute top-1/2 w-2 h-2 rounded-full bg-blue-400 transform -translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-24 neon-text"
          >
            Prizes & Rewards
          </motion.h2>

          <div className="relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_70%)]"></div>

            {/* Prize cards */}
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  place: "1st",
                  icon: <Trophy className="w-12 h-12" />,
                  prize: "₹15,000",
                  color: "from-yellow-400/20 to-amber-600/20",
                  iconColor: "text-yellow-400",
                  delay: 0.2,
                  extras: ["Paid Internship Opportunity", "Industry Mentorship"]
                },
                {
                  place: "2nd (A)",
                  icon: <Trophy className="w-12 h-12" />,
                  prize: "₹10,000",
                  color: "from-gray-400/20 to-gray-600/20",
                  iconColor: "text-gray-400",
                  delay: 0.3,
                  extras: ["Paid Internship Opportunity", "Industry Mentorship"]
                },
                {
                  place: "2nd (B)",
                  icon: <Trophy className="w-12 h-12" />,
                  prize: "₹5,000",
                  color: "from-amber-700/20 to-amber-900/20",
                  iconColor: "text-amber-700",
                  delay: 0.4,
                  extras: ["Paid Internship Opportunity", "Industry Mentorship"]
                }
              ].map((prize, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prize.delay }}
                  whileHover={{ translateY: -10 }}
                  className="relative group"
                >
                  {/* Card background with pseudo-3D effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-300`}></div>
                  <div className="relative border border-white/10 rounded-2xl backdrop-blur-sm p-8 h-full">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Trophy platform */}
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center ${prize.iconColor}`}
                      >
                        {prize.icon}
                      </motion.div>
                    </div>

                    {/* Prize details */}
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">{prize.place} Place</div>
                      <div className="text-4xl font-bold text-blue-400 mb-4">{prize.prize}</div>
                      <div className="space-y-2">
                        {prize.extras.map((extra, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: prize.delay + 0.1 * i }}
                            className="text-gray-400 flex items-center justify-center gap-2"
                          >
                            <Star className="w-4 h-4 text-blue-400" />
                            {extra}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Track Prize */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
              <div className="relative border border-white/10 rounded-2xl backdrop-blur-sm p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0"
                    >
                      <Globe className="w-12 h-12 text-emerald-400" />
                    </motion.div>
                  </div>
                  <div className="flex-[2] text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Special Prize</h3>
                    <p className="text-4xl font-bold text-emerald-400 mb-4">$2,000</p>
                    <p className="text-gray-400">Blockchain Technology Courses & e-Wallet Credits by Aptos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Internship Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="relative border border-white/10 rounded-2xl backdrop-blur-sm p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto"
                >
                  <Briefcase className="w-8 h-8 text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Top 10 Teams Get</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {['Bubble AI', 'WalletX', 'Naukri'].map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                    >
                      <p className="text-xl font-bold text-blue-400">{company}</p>
                      <p className="text-gray-400 mt-2">Paid Internship</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <CollaboratorsSection />

      <FAQSection />

      <footer className="py-12 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4 neon-text">Ready to Join XHorizon?</h3>
            <p className="text-gray-300 mb-6">Join us for 24 hours of innovation, learning, and fun!</p>
            <Link to="/tracks">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 glow-effect"
              >
                View Tracks
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <div className="mt-8">
              <p className="text-gray-400">Contact us:</p>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://www.instagram.com/thecodingclubx/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/the-coding-club-922327356/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://chat.whatsapp.com/KqNmfIapdWE7ntw7D1DRAx" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </a>
              </div>
            </div>
            <p className="text-gray-400 mt-8">© 2025 XHorizon. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return <HomeContent />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Toaster position="top-center" />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracks" element={<Tracks />} />
          
          <Route path="/registrationsuccess" element={<RegistrationSuccess />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;