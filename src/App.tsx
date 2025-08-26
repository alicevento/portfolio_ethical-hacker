import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { TerminalHeader } from './components/TerminalHeader';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { VulnerableLogin } from './components/VulnerableLogin';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Language Toggle Button */}
      <LanguageToggle />
      
      {/* Terminal Header */}
      <TerminalHeader />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Vulnerable Login Demo */}
      <VulnerableLogin />
      
      {/* Tools Section */}
      <ToolsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400 font-mono text-sm mb-4">
            ┌─────────────────────────────────────────────────────────┐
          </div>
          <div className="text-cyan-400 font-mono mb-2">
            {t('footer.command')}
          </div>
          <div className="text-gray-400 font-mono text-sm mb-4">
            └─────────────────────────────────────────────────────────┘
          </div>
          <div className="text-gray-500 text-xs">
            {t('footer.copyright')}
          </div>
          <div className="text-gray-600 text-xs mt-2">
            {t('footer.disclaimer')}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}