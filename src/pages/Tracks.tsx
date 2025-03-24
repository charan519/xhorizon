import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Globe, Rocket, Brain, Lock,
  ChevronRight, ArrowRight, Shield, Database, Cpu
} from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { NavigationButtons } from '../components/NavigationButtons';
import { RegistrationPopup } from '../components/RegistrationPopup';
import { useScrollToTop } from '../hooks/useScrollToTop';

const tracks = [
  {
    id: 'web-dev',
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Create innovative web applications and solutions",
    longDescription: "Build cutting-edge web applications using modern frameworks and technologies. Focus on creating scalable, responsive, and user-friendly solutions.",
    tools: ["React", "Node.js", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 'iot',
    icon: <Cpu className="w-12 h-12" />,
    title: "Internet of Things (IoT) & Embedded Systems",
    description: "Connect the physical world with digital innovation",
    longDescription: "Develop solutions that bridge the physical and digital worlds using IoT devices and embedded systems. Create smart, connected solutions for real-world problems.",
    tools: ["Arduino", "Raspberry Pi", "ESP32", "MQTT", "Sensors"],
    color: "from-emerald-500/20 to-blue-500/20"
  },
  {
    id: 'ai-ml',
    icon: <Brain className="w-12 h-12" />,
    title: "Artificial Intelligence & Machine Learning",
    description: "Build intelligent systems and ML solutions",
    longDescription: "Create AI-powered applications and machine learning models that solve complex problems. Focus on practical applications of AI/ML technologies.",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face"],
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-12 h-12" />,
    title: "Cybersecurity & Ethical Hacking",
    description: "Secure digital systems and networks",
    longDescription: "Develop security solutions and tools for protecting digital assets. Focus on identifying vulnerabilities and implementing robust security measures.",
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "OWASP Tools"],
    color: "from-red-500/20 to-purple-500/20"
  },
  {
    id: 'blockchain',
    icon: <Globe className="w-12 h-12" />,
    title: "Blockchain & Web3",
    description: "Build decentralized applications and solutions",
    longDescription: "Create innovative blockchain-based solutions and decentralized applications. Explore the potential of Web3 technologies.",
    tools: ["Ethereum", "Solidity", "Web3.js", "IPFS", "Hardhat"],
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 'data-science',
    icon: <Database className="w-12 h-12" />,
    title: "Data Science & Big Data Analytics",
    description: "Transform data into actionable insights",
    longDescription: "Analyze large datasets and create data-driven solutions. Focus on extracting meaningful insights and patterns from complex data.",
    tools: ["Python", "Pandas", "Apache Spark", "Tableau", "Power BI"],
    color: "from-green-500/20 to-blue-500/20"
  }
];

function TrackCard({ track, isSelected, onClick }) {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => onClick(track)}
        className={`relative cursor-pointer transition-all duration-300 ${
          isSelected ? 'lg:col-span-2 row-span-2' : ''
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-3xl blur-xl transition-all duration-300 ${
          isSelected ? 'opacity-100' : 'opacity-50'
        }`}></div>
        
        <div className="relative h-full border border-white/10 rounded-3xl p-6 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
          
          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${
                isSelected ? 'lg:w-20 lg:h-20' : ''
              }`}
            >
              {track.icon}
            </motion.div>

            <h3 className={`font-bold mb-4 transition-all duration-300 ${
              isSelected ? 'text-3xl lg:text-4xl' : 'text-2xl'
            }`}>
              {track.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {isSelected ? track.longDescription : track.description}
            </p>

            {isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h4 className="text-lg font-semibold mb-3">Problem Statement</h4>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-400" />
                    <p className="text-gray-400">Problem statements will be released on April 11th, 2025 at 09:00 AM</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Recommended Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {track.tools.map((tool, index) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 rounded-full bg-white/5 text-sm"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRegistration(true);
                  }}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register for this Track
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <RegistrationPopup
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
    </>
  );
}

export default function Tracks() {
  useScrollToTop();
  const [selectedTrack, setSelectedTrack] = useState(null);
  const containerRef = useRef(null);

  const handleTrackClick = (track) => {
    setSelectedTrack(selectedTrack?.id === track.id ? null : track);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <NavigationButtons />

      <div className="max-w-7xl mx-auto px-4 pt-24" ref={containerRef}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-8 p-4 rounded-full bg-blue-500/5 backdrop-blur-sm"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Code className="w-12 h-12 text-blue-400" />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Hackathon Tracks
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our exciting hackathon tracks. Each track offers unique challenges and opportunities to showcase your skills.
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {tracks.map(track => (
              <TrackCard
                key={track.id}
                track={track}
                isSelected={selectedTrack?.id === track.id}
                onClick={handleTrackClick}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}