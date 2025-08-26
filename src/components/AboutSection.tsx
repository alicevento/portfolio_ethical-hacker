import { useLanguage } from './LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <span className="text-red-400 text-xl mr-2">[root@kali]#</span>
            <h2 className="text-2xl text-cyan-400 cursor-blink">{t('about.command')}</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 font-mono">
            <div className="text-green-400">
              ════════════════════ {t('about.title')} ════════════════════
            </div>
            
            <div className="pl-4 space-y-3">
              <p className="text-white">
                <span className="text-yellow-400">{t('about.name')}</span> Alicia Vento
              </p>
              <p className="text-white">
                <span className="text-yellow-400">{t('about.role')}</span> {t('about.role.value')}
              </p>
              <p className="text-white">
                <span className="text-yellow-400">{t('about.mission')}</span> {t('about.mission.value')}
              </p>
              
              <div className="mt-6">
                <div className="text-cyan-400 mb-2">{t('about.skills')}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4">
                  <div className="text-green-400">{t('about.skill.pentest')}</div>
                  <div className="text-green-400">{t('about.skill.vuln')}</div>
                  <div className="text-green-400">{t('about.skill.network')}</div>
                  <div className="text-green-400">{t('about.skill.osint')}</div>
                  <div className="text-green-400">{t('about.skill.code')}</div>
                  <div className="text-green-400">{t('about.skill.incident')}</div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="text-cyan-400 mb-2">{t('about.philosophy')}</div>
                <div className="text-gray-300 italic pl-4">
                  {t('about.philosophy.text')}
                </div>
              </div>
              
              <div className="mt-6 text-red-400">
                {t('about.motto')}
              </div>
            </div>
            
            <div className="text-green-400 mt-6">
              ═══════════════════ {t('about.eof')} ═══════════════════
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}