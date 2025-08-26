import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export function TerminalHeader() {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = t('terminal.whoami');

  useEffect(() => {
    setDisplayText('');
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm">alicia@kali: ~</div>
            <div className="w-12"></div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 font-mono">
            <div className="text-green-400 mb-4">
              ┌──(alicia㉿kali)-[~]
            </div>
            <div className="text-green-400 mb-2">
              └─$ 
              <span className="text-white ml-2">
                {displayText}
                {showCursor && <span className="text-blue-400">_</span>}
              </span>
            </div>
            
            <div className="mt-8 space-y-2">
              <div className="text-cyan-400">
                ╔════════════════════════════════════════════════════════════╗
              </div>
              <div className="text-cyan-400">
                ║                    {t('terminal.title').padStart(28).padEnd(56)}                 ║
              </div>
              <div className="text-cyan-400">
                ║                    {t('terminal.subtitle').padStart(26).padEnd(56)}       ║
              </div>
              <div className="text-cyan-400">
                ╚════════════════════════════════════════════════════════════╝
              </div>
            </div>

            <div className="mt-6 text-gray-400">
              <div className="text-red-400">{t('terminal.status.online')}</div>
              <div className="text-yellow-400">{t('terminal.mode')}</div>
              <div className="text-green-400">{t('terminal.security')}</div>
            </div>

            <div className="mt-8 text-center">
              <div className="animate-bounce text-cyan-400">
                {t('terminal.scroll')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}