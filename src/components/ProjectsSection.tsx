import { useLanguage } from './LanguageContext';

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.vuln.title'),
      command: t('projects.vuln.command'),
      description: t('projects.vuln.desc'),
      status: "COMPLETED",
      severity: "HIGH"
    },
    {
      title: t('projects.network.title'),
      command: t('projects.network.command'),
      description: t('projects.network.desc'),
      status: "ACTIVE",
      severity: "CRITICAL"
    },
    {
      title: t('projects.industry.title'),
      command: t('projects.industry.command'),
      description: t('projects.industry.desc'),
      status: "RESEARCH",
      severity: "HIGH"
    },
    {
      title: t('projects.protocol.title'),
      command: t('projects.protocol.command'),
      description: t('projects.protocol.desc'),
      status: "COMPLETED",
      severity: "MEDIUM"
    },
    {
      title: t('projects.webapp.title'),
      command: t('projects.webapp.command'),
      description: t('projects.webapp.desc'),
      status: "ONGOING",
      severity: "HIGH"
    },
    {
      title: t('projects.social.title'),
      command: t('projects.social.command'),
      description: t('projects.social.desc'),
      status: "COMPLETED",
      severity: "CRITICAL"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'text-green-400';
      case 'ACTIVE': return 'text-yellow-400';
      case 'ONGOING': return 'text-blue-400';
      case 'RESEARCH': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-cyan-400 mb-4 cursor-blink">
            {t('projects.command')}
          </h2>
          <div className="text-gray-400 font-mono">
            {t('projects.subtitle')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors group">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs">terminal</div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">
                  alicia@kali:~/projects$
                </div>
                
                <div className="text-cyan-400 mb-3 text-xs break-all">
                  {project.command}
                </div>

                <div className="space-y-2">
                  <div className="text-white font-medium">
                    {project.title}
                  </div>
                  
                  <div className="text-gray-300 text-xs leading-relaxed">
                    {project.description}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-xs">{t('projects.status')}</span>
                      <span className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-xs">{t('projects.risk')}</span>
                      <span className={`text-xs ${getSeverityColor(project.severity)}`}>
                        {project.severity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-green-400 text-xs group-hover:text-cyan-400 transition-colors">
                  {t('projects.execute')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}