import { useLanguage } from './LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleLanguage}
        className="bg-gray-900 border border-cyan-400 rounded-lg px-4 py-2 text-cyan-400 font-mono text-sm hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group shadow-lg hover:shadow-cyan-400/50"
        title={t('lang.tooltip')}
      >
        <div className="flex items-center space-x-2">
          <span className="text-xs">$</span>
          <span className="group-hover:animate-pulse">
            lang --switch {t('lang.switch')}
          </span>
          <span className="text-green-400 text-xs">
            [{language.toUpperCase()}]
          </span>
        </div>
        
        {/* Terminal-style hover indicator */}
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </button>
    </div>
  );
}