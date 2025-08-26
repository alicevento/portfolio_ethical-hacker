import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Terminal Header
    'terminal.whoami': 'kali@aliciavento:~$ whoami → Alicia Vento – White Hat Hacker',
    'terminal.title': 'ETHICAL HACKER PORTFOLIO',
    'terminal.subtitle': 'Security • Penetration • Analysis',
    'terminal.status.online': '[!] Status: Online',
    'terminal.mode': '[~] Mode: Ethical Hacking',
    'terminal.security': '[✓] Security Level: Maximum',
    'terminal.scroll': '▼ Scroll down to explore ▼',

    // About Section
    'about.command': 'cat /home/alicia/about.txt',
    'about.title': 'ABOUT.TXT',
    'about.name': 'Name:',
    'about.role': 'Role:',
    'about.role.value': 'White Hat Hacker & Cybersecurity Specialist',
    'about.mission': 'Mission:',
    'about.mission.value': 'Securing digital environments through ethical hacking',
    'about.skills': 'Core Skills:',
    'about.skill.pentest': '► Penetration Testing',
    'about.skill.vuln': '► Vulnerability Assessment',
    'about.skill.network': '► Network Security Analysis',
    'about.skill.osint': '► OSINT & Reconnaissance',
    'about.skill.code': '► Secure Code Review',
    'about.skill.incident': '► Incident Response',
    'about.philosophy': 'Philosophy:',
    'about.philosophy.text': '"Security is not a product, but a process. Through ethical hacking, we build stronger defenses by understanding the mindset of those who would do harm."',
    'about.motto': '► Always authorized • Always ethical • Always learning',
    'about.eof': 'END OF FILE',

    // Projects Section
    'projects.command': 'ls -la /projects/',
    'projects.subtitle': 'Displaying security projects and assessments',
    'projects.vuln.title': 'Vulnerability Scanner',
    'projects.vuln.command': './vuln_scan.py --target network',
    'projects.vuln.desc': 'Automated vulnerability assessment tool for network infrastructure',
    'projects.network.title': 'Network Segmentation Analysis',
    'projects.network.command': './network_audit.sh --topology full',
    'projects.network.desc': 'Comprehensive analysis of network segmentation and security boundaries',
    'projects.industry.title': 'Industry 4.0 Security Framework',
    'projects.industry.command': './iot_security.py --industrial scan',
    'projects.industry.desc': 'Security assessment framework for industrial IoT environments',
    'projects.protocol.title': 'OSI/TCP Protocol Analysis',
    'projects.protocol.command': './protocol_analyzer.py --layers all',
    'projects.protocol.desc': 'Deep packet inspection and protocol vulnerability analysis',
    'projects.webapp.title': 'Web Application Penetration Testing',
    'projects.webapp.command': './webapp_pentest.py --full-scan',
    'projects.webapp.desc': 'Comprehensive security testing of web applications',
    'projects.social.title': 'Social Engineering Assessment',
    'projects.social.command': './social_eng.py --awareness test',
    'projects.social.desc': 'Human factor security assessment and awareness training',
    'projects.status': 'Status:',
    'projects.risk': 'Risk:',
    'projects.execute': '[ENTER] to execute →',

    // Vulnerable Login
    'vuln.command': './vulnerable_app.exe --demo',
    'vuln.subtitle': 'Educational demonstration of common security vulnerabilities',
    'vuln.warning': '⚠️ For educational purposes only - DO NOT use in production',
    'vuln.login.title': 'Vulnerable Login Portal',
    'vuln.username': 'Username:',
    'vuln.password': 'Password:',
    'vuln.username.hint': 'Try: admin\' OR \'1\'=\'1\' --',
    'vuln.password.hint': 'Any password will work due to SQL injection',
    'vuln.button': 'LOGIN [VULNERABLE]',
    'vuln.disclaimer': 'This form demonstrates multiple security vulnerabilities',
    'vuln.analysis.title': 'Security Analysis',
    'vuln.analysis.waiting': 'Click "LOGIN [VULNERABLE]" to reveal security issues',
    'vuln.analysis.scanning': 'Scanning for vulnerabilities...',
    'vuln.analysis.alert': '[ALERT] Multiple vulnerabilities detected!',
    'vuln.sql.title': 'SQL Injection',
    'vuln.sql.desc': 'Input fields are vulnerable to SQL injection attacks',
    'vuln.sql.payload': '\' OR \'1\'=\'1\' --',
    'vuln.xss.title': 'XSS Vulnerability',
    'vuln.xss.desc': 'No input sanitization allows script injection',
    'vuln.xss.payload': '<script>alert(\'XSS\')</script>',
    'vuln.weak.title': 'Weak Password Policy',
    'vuln.weak.desc': 'No password complexity requirements',
    'vuln.weak.payload': '123456',
    'vuln.rate.title': 'No Rate Limiting',
    'vuln.rate.desc': 'Brute force attacks are possible',
    'vuln.rate.payload': 'Unlimited login attempts',
    'vuln.mitigation.title': '🛡️ Mitigation Strategies:',
    'vuln.mitigation.sql': '• Use parameterized queries to prevent SQL injection',
    'vuln.mitigation.xss': '• Implement input validation and sanitization',
    'vuln.mitigation.password': '• Enforce strong password policies',
    'vuln.mitigation.rate': '• Add rate limiting and account lockout',
    'vuln.mitigation.https': '• Use HTTPS and secure session management',
    'vuln.scenarios.sql.title': 'SQL Injection Attack',
    'vuln.scenarios.sql.desc': 'Demonstrating database manipulation through malicious SQL queries',
    'vuln.scenarios.xss.title': 'Cross-Site Scripting (XSS)',
    'vuln.scenarios.xss.desc': 'Showing client-side script injection vulnerabilities',
    'vuln.scenarios.session.title': 'Session Management Flaws',
    'vuln.scenarios.session.desc': 'Exposing weak session handling and cookie security',
    'vuln.analysis.ready': 'System ready for vulnerability assessment',
    'vuln.practice.note': 'Educational Security Laboratory',
    'vuln.practice.desc': 'Click LOGIN multiple times to explore different vulnerability scenarios',

    // Tools Section
    'tools.command': 'ls /usr/share/tools/',
    'tools.subtitle': 'Security tools and frameworks in the arsenal',
    'tools.skill': 'Skill Level:',
    'tools.continuous.title': 'CONTINUOUS LEARNING',
    'tools.continuous.desc': 'The security landscape evolves constantly. These tools are continuously updated\nwith new techniques, vulnerabilities, and defensive mechanisms.',

    // Contact Section
    'contact.command': './contact.sh --establish-connection',
    'contact.subtitle': 'Initiating secure communication channels...',
    'contact.available': 'alicia@kali:~/contact$ cat available_channels.txt',
    'contact.channels.title': '# Available Communication Channels',
    'contact.channels.subtitle': '# Execute any command below to establish connection',
    'contact.channels.security': '# All channels secured with end-to-end encryption',
    'contact.website.desc': 'Personal website and blog',
    'contact.linkedin.desc': 'Professional network',
    'contact.instagram.desc': 'Security awareness content',
    'contact.github.desc': 'Open source security tools',
    'contact.email.desc': 'Direct communication',
    'contact.secure': '[SECURE]',
    'contact.executing': 'executing...',
    'contact.monitored': '✓ All communications are monitored for educational purposes',
    'contact.professional': '⚠ Professional inquiries only',
    'contact.response': 'Response time: 24-48 hours | Timezone: UTC-5',
    'contact.quote': '"In cybersecurity, trust is earned through transparency"',
    'contact.author': '- Alicia Vento, Ethical Hacker',

    // Footer
    'footer.command': 'root@kali:~# echo "Stay secure, stay ethical"',
    'footer.copyright': '© 2024 Alicia Vento | Ethical Hacker | All rights reserved',
    'footer.disclaimer': 'This portfolio is for demonstration purposes only. All security testing is conducted ethically and with proper authorization.',

    // Language Toggle
    'lang.switch': 'ES',
    'lang.tooltip': 'Cambiar a Español'
  },
  es: {
    // Terminal Header
    'terminal.whoami': 'kali@aliciavento:~$ whoami → Alicia Vento – Hacker Ético',
    'terminal.title': 'PORTAFOLIO DE HACKER ÉTICO',
    'terminal.subtitle': 'Seguridad • Penetración • Análisis',
    'terminal.status.online': '[!] Estado: En línea',
    'terminal.mode': '[~] Modo: Hacking Ético',
    'terminal.security': '[✓] Nivel de Seguridad: Máximo',
    'terminal.scroll': '▼ Desplázate hacia abajo para explorar ▼',

    // About Section
    'about.command': 'cat /home/alicia/acerca_de.txt',
    'about.title': 'ACERCA_DE.TXT',
    'about.name': 'Nombre:',
    'about.role': 'Rol:',
    'about.role.value': 'Hacker Ético y Especialista en Ciberseguridad',
    'about.mission': 'Misión:',
    'about.mission.value': 'Asegurar entornos digitales a través del hacking ético',
    'about.skills': 'Habilidades Principales:',
    'about.skill.pentest': '► Pruebas de Penetración',
    'about.skill.vuln': '► Evaluación de Vulnerabilidades',
    'about.skill.network': '► Análisis de Seguridad de Redes',
    'about.skill.osint': '► OSINT y Reconocimiento',
    'about.skill.code': '► Revisión de Código Seguro',
    'about.skill.incident': '► Respuesta a Incidentes',
    'about.philosophy': 'Filosofía:',
    'about.philosophy.text': '"La seguridad no es un producto, sino un proceso. A través del hacking ético, construimos defensas más fuertes entendiendo la mentalidad de quienes harían daño."',
    'about.motto': '► Siempre autorizado • Siempre ético • Siempre aprendiendo',
    'about.eof': 'FIN DEL ARCHIVO',

    // Projects Section
    'projects.command': 'ls -la /proyectos/',
    'projects.subtitle': 'Mostrando proyectos y evaluaciones de seguridad',
    'projects.vuln.title': 'Escáner de Vulnerabilidades',
    'projects.vuln.command': './vuln_scan.py --target network',
    'projects.vuln.desc': 'Herramienta automatizada de evaluación de vulnerabilidades para infraestructura de red',
    'projects.network.title': 'Análisis de Segmentación de Red',
    'projects.network.command': './network_audit.sh --topology full',
    'projects.network.desc': 'Análisis integral de segmentación de red y límites de seguridad',
    'projects.industry.title': 'Marco de Seguridad Industria 4.0',
    'projects.industry.command': './iot_security.py --industrial scan',
    'projects.industry.desc': 'Marco de evaluación de seguridad para entornos IoT industriales',
    'projects.protocol.title': 'Análisis de Protocolos OSI/TCP',
    'projects.protocol.command': './protocol_analyzer.py --layers all',
    'projects.protocol.desc': 'Inspección profunda de paquetes y análisis de vulnerabilidades de protocolos',
    'projects.webapp.title': 'Pruebas de Penetración de Aplicaciones Web',
    'projects.webapp.command': './webapp_pentest.py --full-scan',
    'projects.webapp.desc': 'Pruebas de seguridad integrales de aplicaciones web',
    'projects.social.title': 'Evaluación de Ingeniería Social',
    'projects.social.command': './social_eng.py --awareness test',
    'projects.social.desc': 'Evaluación del factor humano en seguridad y entrenamiento de concienciación',
    'projects.status': 'Estado:',
    'projects.risk': 'Riesgo:',
    'projects.execute': '[ENTER] para ejecutar →',

    // Vulnerable Login
    'vuln.command': './app_vulnerable.exe --demo',
    'vuln.subtitle': 'Demostración educativa de vulnerabilidades de seguridad comunes',
    'vuln.warning': '⚠️ Solo para fines educativos - NO usar en producción',
    'vuln.login.title': 'Portal de Login Vulnerable',
    'vuln.username': 'Usuario:',
    'vuln.password': 'Contraseña:',
    'vuln.username.hint': 'Prueba: admin\' OR \'1\'=\'1\' --',
    'vuln.password.hint': 'Cualquier contraseña funcionará debido a inyección SQL',
    'vuln.button': 'INICIAR SESIÓN [VULNERABLE]',
    'vuln.disclaimer': 'Este formulario demuestra múltiples vulnerabilidades de seguridad',
    'vuln.analysis.title': 'Análisis de Seguridad',
    'vuln.analysis.waiting': 'Haz clic en "INICIAR SESIÓN [VULNERABLE]" para revelar problemas de seguridad',
    'vuln.analysis.scanning': 'Escaneando vulnerabilidades...',
    'vuln.analysis.alert': '[ALERTA] ¡Múltiples vulnerabilidades detectadas!',
    'vuln.sql.title': 'Inyección SQL',
    'vuln.sql.desc': 'Los campos de entrada son vulnerables a ataques de inyección SQL',
    'vuln.sql.payload': '\' OR \'1\'=\'1\' --',
    'vuln.xss.title': 'Vulnerabilidad XSS',
    'vuln.xss.desc': 'No hay sanitización de entrada que permita inyección de scripts',
    'vuln.xss.payload': '<script>alert(\'XSS\')</script>',
    'vuln.weak.title': 'Política de Contraseñas Débil',
    'vuln.weak.desc': 'No hay requisitos de complejidad de contraseñas',
    'vuln.weak.payload': '123456',
    'vuln.rate.title': 'Sin Limitación de Velocidad',
    'vuln.rate.desc': 'Los ataques de fuerza bruta son posibles',
    'vuln.rate.payload': 'Intentos de login ilimitados',
    'vuln.mitigation.title': '🛡️ Estrategias de Mitigación:',
    'vuln.mitigation.sql': '• Usar consultas parametrizadas para prevenir inyección SQL',
    'vuln.mitigation.xss': '• Implementar validación y sanitización de entrada',
    'vuln.mitigation.password': '• Aplicar políticas de contraseñas fuertes',
    'vuln.mitigation.rate': '• Agregar limitación de velocidad y bloqueo de cuenta',
    'vuln.mitigation.https': '• Usar HTTPS y gestión segura de sesiones',
    'vuln.scenarios.sql.title': 'Ataque de Inyección SQL',
    'vuln.scenarios.sql.desc': 'Demostrando manipulación de base de datos a través de consultas SQL maliciosas',
    'vuln.scenarios.xss.title': 'Cross-Site Scripting (XSS)',
    'vuln.scenarios.xss.desc': 'Mostrando vulnerabilidades de inyección de scripts del lado cliente',
    'vuln.scenarios.session.title': 'Fallas en Gestión de Sesiones',
    'vuln.scenarios.session.desc': 'Exponiendo manejo débil de sesiones y seguridad de cookies',
    'vuln.analysis.ready': 'Sistema listo para evaluación de vulnerabilidades',
    'vuln.practice.note': 'Laboratorio Educativo de Seguridad',
    'vuln.practice.desc': 'Haz clic en INICIAR SESIÓN múltiples veces para explorar diferentes escenarios de vulnerabilidades',

    // Tools Section
    'tools.command': 'ls /usr/share/herramientas/',
    'tools.subtitle': 'Herramientas y frameworks de seguridad en el arsenal',
    'tools.skill': 'Nivel de Habilidad:',
    'tools.continuous.title': 'APRENDIZAJE CONTINUO',
    'tools.continuous.desc': 'El panorama de seguridad evoluciona constantemente. Estas herramientas se actualizan\ncontinuamente con nuevas técnicas, vulnerabilidades y mecanismos defensivos.',

    // Contact Section
    'contact.command': './contacto.sh --establecer-conexion',
    'contact.subtitle': 'Iniciando canales de comunicación seguros...',
    'contact.available': 'alicia@kali:~/contacto$ cat canales_disponibles.txt',
    'contact.channels.title': '# Canales de Comunicación Disponibles',
    'contact.channels.subtitle': '# Ejecuta cualquier comando de abajo para establecer conexión',
    'contact.channels.security': '# Todos los canales asegurados con cifrado de extremo a extremo',
    'contact.website.desc': 'Sitio web personal y blog',
    'contact.linkedin.desc': 'Red profesional',
    'contact.instagram.desc': 'Contenido de concienciación en seguridad',
    'contact.github.desc': 'Herramientas de seguridad de código abierto',
    'contact.email.desc': 'Comunicación directa',
    'contact.secure': '[SEGURO]',
    'contact.executing': 'ejecutando...',
    'contact.monitored': '✓ Todas las comunicaciones son monitoreadas con fines educativos',
    'contact.professional': '⚠ Solo consultas profesionales',
    'contact.response': 'Tiempo de respuesta: 24-48 horas | Zona horaria: UTC-5',
    'contact.quote': '"En ciberseguridad, la confianza se gana a través de la transparencia"',
    'contact.author': '- Alicia Vento, Hacker Ética',

    // Footer
    'footer.command': 'root@kali:~# echo "Mantente seguro, mantente ético"',
    'footer.copyright': '© 2024 Alicia Vento | Hacker Ética | Todos los derechos reservados',
    'footer.disclaimer': 'Este portafolio es solo para fines de demostración. Todas las pruebas de seguridad se realizan de manera ética y con la autorización adecuada.',

    // Language Toggle
    'lang.switch': 'EN',
    'lang.tooltip': 'Switch to English'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}