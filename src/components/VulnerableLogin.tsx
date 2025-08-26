import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export function VulnerableLogin() {
  const { t } = useLanguage();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password123');
  const [currentVulnIndex, setCurrentVulnIndex] = useState(0);
  const [showVulnerabilities, setShowVulnerabilities] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const vulnerabilityScenarios = [
    {
      title: t('vuln.scenarios.sql.title'),
      description: t('vuln.scenarios.sql.desc'),
      vulnerabilities: [
        { type: 'SQL Injection', severity: 'CRITICAL', payload: '\' OR \'1\'=\'1\' --' },
        { type: 'Authentication Bypass', severity: 'CRITICAL', payload: 'Boolean-based blind SQLi' },
        { type: 'No Input Validation', severity: 'HIGH', payload: 'Direct query execution' }
      ]
    },
    {
      title: t('vuln.scenarios.xss.title'),
      description: t('vuln.scenarios.xss.desc'),
      vulnerabilities: [
        { type: 'Stored XSS', severity: 'HIGH', payload: '<script>alert(\'Stored XSS\')</script>' },
        { type: 'No CSP Headers', severity: 'MEDIUM', payload: 'Content-Security-Policy missing' },
        { type: 'DOM Manipulation', severity: 'HIGH', payload: 'innerHTML without sanitization' }
      ]
    },
    {
      title: t('vuln.scenarios.session.title'),
      description: t('vuln.scenarios.session.desc'),
      vulnerabilities: [
        { type: 'Insecure Cookies', severity: 'HIGH', payload: 'HttpOnly flag missing' },
        { type: 'Session Fixation', severity: 'MEDIUM', payload: 'Session ID not regenerated' },
        { type: 'Weak Session Management', severity: 'HIGH', payload: 'Predictable session tokens' }
      ]
    }
  ];



  const handleLogin = () => {
    setIsScanning(true);
    setShowVulnerabilities(false);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setShowVulnerabilities(true);
      // Cycle through different vulnerability scenarios
      setCurrentVulnIndex((prev) => (prev + 1) % vulnerabilityScenarios.length);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const currentScenario = vulnerabilityScenarios[currentVulnIndex];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-cyan-400 mb-4 cursor-blink">
            {t('vuln.command')}
          </h2>
          <div className="text-gray-400 font-mono mb-4">
            {t('vuln.subtitle')}
          </div>
          <div className="bg-yellow-900 border border-yellow-400 rounded-lg p-3 inline-block">
            <div className="text-yellow-400 font-mono text-sm flex items-center">
              <span className="mr-2">⚠️</span>
              {t('vuln.warning')}
            </div>
          </div>
        </div>

        {/* Main Practice Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Panel - Vulnerable Login Portal */}
          <div className="bg-gray-900 border border-red-400 rounded-lg p-6 shadow-lg shadow-red-400/20">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">🔒</span>
              <h3 className="text-xl text-red-400 font-mono">{t('vuln.login.title')}</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 font-mono text-sm">
                  {t('vuln.username')}
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white font-mono focus:border-red-400 focus:outline-none transition-colors"
                  placeholder="admin"
                />
                <div className="text-xs text-gray-500 mt-1 font-mono">
                  {t('vuln.username.hint')}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-mono text-sm">
                  {t('vuln.password')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white font-mono focus:border-red-400 focus:outline-none transition-colors"
                  placeholder="password123"
                />
                <div className="text-xs text-gray-500 mt-1 font-mono">
                  {t('vuln.password.hint')}
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded font-mono transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/40"
                disabled={isScanning}
              >
                {isScanning ? t('vuln.analysis.scanning') : t('vuln.button')}
              </button>

              <div className="text-center text-xs text-gray-500 font-mono border-t border-gray-700 pt-3">
                {t('vuln.disclaimer')}
              </div>
            </div>
          </div>

          {/* Right Panel - Security Analysis */}
          <div className="bg-gray-900 border border-cyan-400 rounded-lg p-6 shadow-lg shadow-cyan-400/20">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">🔍</span>
              <h3 className="text-xl text-cyan-400 font-mono">{t('vuln.analysis.title')}</h3>
            </div>

            {!showVulnerabilities && !isScanning ? (
              <div className="text-center py-8">
                <div className="text-gray-400 font-mono mb-4">
                  {t('vuln.analysis.waiting')}
                </div>
                <div className="text-cyan-400 font-mono text-sm animate-pulse">
                  {t('vuln.analysis.ready')}
                </div>
              </div>
            ) : isScanning ? (
              <div className="text-center py-8">
                <div className="text-cyan-400 font-mono mb-4 animate-pulse">
                  {t('vuln.analysis.scanning')}
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <div className="text-green-400 font-mono text-xs space-y-1">
                    <div>└── Analyzing input vectors...</div>
                    <div>└── Checking SQL injection points...</div>
                    <div>└── Testing XSS vulnerabilities...</div>
                    <div>└── Evaluating session management...</div>
                    <div className="text-yellow-400">└── Compiling security report...</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-red-400 font-mono mb-4 flex items-center">
                  <span className="mr-2">⚠️</span>
                  {t('vuln.analysis.alert')}
                </div>

                <div className="bg-gray-800 border border-gray-600 rounded p-3 mb-4">
                  <div className="text-cyan-400 font-mono text-sm mb-2">
                    Scenario: {currentScenario.title}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {currentScenario.description}
                  </div>
                </div>
                
                {currentScenario.vulnerabilities.map((vuln, index) => (
                  <div key={index} className="border border-gray-700 rounded p-3 bg-gray-800 hover:border-red-400 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-mono text-sm">{vuln.type}</span>
                      <span className={`text-xs font-mono ${getSeverityColor(vuln.severity)}`}>
                        [{vuln.severity}]
                      </span>
                    </div>
                    
                    <div className="bg-gray-900 border border-gray-600 rounded p-2">
                      <div className="text-yellow-400 text-xs font-mono">
                        Payload: <span className="text-red-400">{vuln.payload}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-3 bg-green-900 border border-green-600 rounded">
                  <div className="text-green-400 font-mono text-sm mb-2">
                    🛡️ {t('vuln.mitigation.title')}
                  </div>
                  <ul className="text-green-300 text-xs space-y-1 font-mono">
                    <li>• {t('vuln.mitigation.sql')}</li>
                    <li>• {t('vuln.mitigation.xss')}</li>
                    <li>• {t('vuln.mitigation.password')}</li>
                    <li>• {t('vuln.mitigation.rate')}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Educational Note */}
        <div className="bg-gray-900 border border-yellow-400 rounded-lg p-6">
          <div className="text-center">
            <div className="text-yellow-400 font-mono text-sm mb-2">
              ⚡ {t('vuln.practice.note')}
            </div>
            <div className="text-gray-400 font-mono text-xs">
              {t('vuln.practice.desc')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}