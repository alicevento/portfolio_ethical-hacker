import { useLanguage } from './LanguageContext';

export function ToolsSection() {
  const { t } = useLanguage();

  const tools = [
    {
      name: "Kali Linux",
      category: "Operating System",
      description: "Advanced penetration testing platform",
      icon: "🐉",
      status: "Trainer"
    },
    {
      name: "Nmap",
      category: "Network Scanner",
      description: "Network discovery and security auditing",
      icon: "🗺️",
      status: "Trainer"
    },
    {
      name: "Burp Suite",
      category: "Web Security",
      description: "Web application security testing",
      icon: "🕷️",
      status: "Trainer"
    },
    {
      name: "Metasploit",
      category: "Exploitation",
      description: "Penetration testing framework",
      icon: "🎯",
      status: "Trainer"
    },
    {
      name: "Wireshark",
      category: "Packet Analyzer",
      description: "Network protocol analyzer",
      icon: "🦈",
      status: "Trainer"
    },
    {
      name: "Python",
      category: "Programming",
      description: "Security tool development",
      icon: "🐍",
      status: "Advanced"
    },
    {
      name: "Docker",
      category: "Containerization",
      description: "Isolated testing environments",
      icon: "🐳",
      status: "Trainer"
    },
    {
      name: "Packet Tracer",
      category: "Network Simulation",
      description: "Network topology design & testing",
      icon: "📡",
      status: "Trainer"
    },
    {
      name: "OWASP ZAP",
      category: "Web Security",
      description: "Web application vulnerability scanner",
      icon: "⚡",
      status: "Trainer"
    },
    {
      name: "Aircrack-ng",
      category: "Wireless Security",
      description: "WiFi network security assessment",
      icon: "📶",
      status: "Trainer"
    },
    {
      name: "John the Ripper",
      category: "Password Cracking",
      description: "Password security testing",
      icon: "🔑",
      status: "Trainer"
    },
    {
      name: "Nikto",
      category: "Web Scanner",
      description: "Web server vulnerability scanner",
      icon: "🔍",
      status: "Trainer"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Expert': return 'text-green-400';
      case 'Advanced': return 'text-blue-400';
      case 'Trainer': return 'text-purple-400';
      case 'Intermediate': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-cyan-400 mb-4 cursor-blink">
            {t('tools.command')}
          </h2>
          <div className="text-gray-400 font-mono">
            {t('tools.subtitle')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-400/20">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                
                <h3 className="text-white font-mono text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </h3>
                
                <div className="text-gray-400 text-sm mb-3 font-mono">
                  {tool.category}
                </div>
                
                <div className="text-gray-300 text-xs mb-4 leading-relaxed">
                  {tool.description}
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                  <span className="text-gray-400 text-xs font-mono">{t('tools.skill')}</span>
                  <span className={`text-xs font-mono ${getStatusColor(tool.status)}`}>
                    [{tool.status.toUpperCase()}]
                  </span>
                </div>
              </div>

              {/* Terminal-style hover effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-gray-800 rounded p-2 text-xs font-mono">
                  <div className="text-green-400">
                    $ which {tool.name.toLowerCase().replace(/\s+/g, '')}
                  </div>
                  <div className="text-cyan-400">
                    /usr/bin/{tool.name.toLowerCase().replace(/\s+/g, '')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 border border-green-400 rounded-lg p-6">
          <div className="text-center">
            <div className="text-green-400 font-mono mb-4">
              ╔═══════════════════════════════════════════════════════╗
            </div>
            <div className="text-green-400 font-mono mb-2">
              ║                  {t('tools.continuous.title').toUpperCase()}                  ║
            </div>
            <div className="text-green-400 font-mono mb-4">
              ╚═══════════════════════════════════════════════════════╝
            </div>
            <div className="text-gray-300 font-mono text-sm whitespace-pre-line">
              {t('tools.continuous.desc')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}