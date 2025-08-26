import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();
  const [activeCommand, setActiveCommand] = useState('');

  const contacts = [
    {
      platform: "Website",
      command: "curl https://aliciavento.xyz",
      url: "https://aliciavento.xyz",
      icon: "🌐",
      description: t('contact.website.desc')
    },
    {
      platform: "LinkedIn",
      command: "ssh linkedin.com/in/aliciavento",
      url: "https://www.linkedin.com/in/aliciavento/",
      icon: "💼",
      description: t('contact.linkedin.desc')
    },
    {
      platform: "Instagram",
      command: "wget instagram.com/alicia.vento",
      url: "https://instagram.com/alicia.vento",
      icon: "📸",
      description: t('contact.instagram.desc')
    },
    {
      platform: "GitHub",
      command: "git clone github.com/alicevento",
      url: "https://github.com/alicevento",
      icon: "📂",
      description: t('contact.github.desc')
    },
    {
      platform: "Email",
      command: "mail -s 'Inquiry' hello@aliciavento.xyz",
      url: "mailto:hello@aliciavento.xyz",
      icon: "📧",
      description: t('contact.email.desc')
    }
  ];

  const handleCommandClick = (command: string, url: string) => {
    setActiveCommand(command);
    // Simulate command execution
    setTimeout(() => {
      window.open(url, '_blank');
      setActiveCommand('');
    }, 1000);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 border border-cyan-400 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 font-mono text-sm">contact.sh</div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono">
            <div className="text-center mb-8">
              <h2 className="text-3xl text-cyan-400 mb-4 cursor-blink">
                {t('contact.command')}
              </h2>
              <div className="text-gray-400">
                {t('contact.subtitle')}
              </div>
            </div>

            <div className="mb-8">
              <div className="text-green-400 mb-4">
                {t('contact.available')}
              </div>
              <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                <div className="text-gray-300 space-y-2">
                  <div className="text-yellow-400">{t('contact.channels.title')}</div>
                  <div className="text-gray-400">{t('contact.channels.subtitle')}</div>
                  <div className="text-gray-400">{t('contact.channels.security')}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={index} className="group">
                  <div 
                    className="bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-cyan-400 transition-all cursor-pointer"
                    onClick={() => handleCommandClick(contact.command, contact.url)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{contact.icon}</span>
                        <div>
                          <div className="text-white font-medium">{contact.platform}</div>
                          <div className="text-gray-400 text-sm">{contact.description}</div>
                        </div>
                      </div>
                      <div className="text-green-400 text-sm">
                        {t('contact.secure')}
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-700">
                      <div className="text-green-400 mb-1">alicia@kali:~$</div>
                      <div className={`text-cyan-400 transition-all ${
                        activeCommand === contact.command ? 'animate-pulse text-yellow-400' : ''
                      }`}>
                        {contact.command}
                        {activeCommand === contact.command && <span className="text-yellow-400 ml-2">{t('contact.executing')}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-800 border border-green-400 rounded-lg p-6">
              <div className="text-center">
                <div className="text-green-400 font-mono mb-3">
                  {t('contact.monitored')}
                </div>
                <div className="text-yellow-400 font-mono mb-3">
                  {t('contact.professional')}
                </div>
                <div className="text-cyan-400 font-mono text-sm">
                  {t('contact.response')}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="text-gray-400 font-mono text-sm">
                ────────────────────────────────────────
              </div>
              <div className="text-cyan-400 font-mono mt-4">
                {t('contact.quote')}
              </div>
              <div className="text-gray-400 font-mono text-sm mt-2">
                {t('contact.author')}
              </div>
              <div className="text-gray-400 font-mono text-sm mt-4">
                ────────────────────────────────────────
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}