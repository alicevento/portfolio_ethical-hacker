# 🔒 Alicia Vento - White Hat Hacker Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4+-38B2AC.svg)](https://tailwindcss.com/)

> **"Security is not a product, but a process. Through ethical hacking, we build stronger defenses by understanding the mindset of those who would do harm."**

A modern, interactive cybersecurity portfolio designed with Kali Linux aesthetics, showcasing ethical hacking skills, security projects, and educational vulnerability demonstrations.

## 🎯 **Live Demo**

Visit the live portfolio: [aliciavento.xyz](https://aliciavento.xyz)

---

## ✨ **Features**

### 🖥️ **Terminal-Inspired Design**
- **Kali Linux Aesthetic**: Dark theme with signature electric blue (`#00BFFF`) and red (`#FF004F`) accents
- **CLI-Style Interface**: Command-line inspired navigation and typography
- **JetBrains Mono Font**: Authentic terminal typography throughout
- **Blinking Cursor Animation**: Realistic terminal cursor effects

### 🌐 **Multilingual Support**
- **Bilingual Interface**: Complete English/Spanish translation
- **Context-Aware Switching**: Seamless language toggle with preserved state
- **Cultural Adaptation**: Content appropriately localized for both audiences

### 🔐 **Educational Security Components**
- **OWASP Juice Shop Inspired Demo**: Interactive vulnerability showcase
- **Multiple Attack Scenarios**: SQL Injection, XSS, Session Management flaws
- **Educational Disclaimers**: Clear ethical use guidelines
- **Security Tool Arsenal**: Comprehensive cybersecurity toolkit display

### 📱 **Modern Web Experience**
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Component-Based Architecture**: Modular React components
- **Type-Safe Development**: Full TypeScript implementation
- **Accessibility Focused**: WCAG guidelines compliance

---

## 🛠️ **Tech Stack**

### **Frontend Framework**
- **React 18+** - Modern React with Hooks and Context API
- **TypeScript 5+** - Type-safe development experience
- **Vite** - Lightning-fast build tool and dev server

### **Styling & Design**
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **JetBrains Mono** - Professional monospace typography
- **Custom CSS Animations** - Terminal-style effects and transitions

### **Architecture & Patterns**
- **Context API** - Global state management for internationalization
- **Component Composition** - Reusable and maintainable component structure
- **CSS Custom Properties** - Themeable design system
- **Responsive Design** - Mobile-first approach

### **Development Tools**
- **ESLint** - Code linting and style enforcement
- **Git** - Version control with conventional commits
- **Modern Browser APIs** - Progressive enhancement

---

## 📁 **Project Structure**

```
├── App.tsx                    # Main application component
├── components/
│   ├── AboutSection.tsx       # Professional background & skills
│   ├── ContactSection.tsx     # Secure communication channels
│   ├── LanguageContext.tsx    # Internationalization system
│   ├── LanguageToggle.tsx     # Language switcher component
│   ├── ProjectsSection.tsx    # Security projects showcase
│   ├── TerminalHeader.tsx     # CLI-style header
│   ├── ToolsSection.tsx       # Cybersecurity tools arsenal
│   ├── VulnerableLogin.tsx    # Educational security demo
│   └── ui/                    # shadcn/ui component library
├── styles/
│   └── globals.css           # Kali Linux theme & animations
└── README.md                 # Project documentation
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, or pnpm package manager
- Modern web browser with ES2020+ support

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/alicevento/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### **Build for Production**
```bash
npm run build
npm run preview
```

---

## 🎨 **Design System**

### **Color Palette**
```css
/* Kali Linux Inspired Colors */
--kali-bg: #0D1117;      /* Primary background */
--kali-blue: #00BFFF;    /* Electric blue accents */
--kali-red: #FF004F;     /* Critical alerts */
--kali-green: #00FF41;   /* Success states */
--kali-text: #E6E6E6;    /* Primary text */
```

### **Typography**
- **Primary Font**: JetBrains Mono (monospace)
- **Font Weights**: 400 (normal), 500 (medium), 700 (bold)
- **Responsive Scaling**: 14px base with fluid typography

### **Animation System**
- **Cursor Blink**: Authentic terminal cursor animation
- **Typewriter Effect**: Progressive text reveal
- **Hover Transitions**: Smooth interactive feedback
- **Loading States**: Terminal-style scanning animations

---

## 🔒 **Security & Ethics**

### **Educational Purpose**
This portfolio includes educational demonstrations of common web vulnerabilities:
- **SQL Injection** - Database manipulation attacks
- **Cross-Site Scripting (XSS)** - Client-side code injection
- **Session Management** - Authentication bypass techniques

### **Ethical Guidelines**
⚠️ **Important Disclaimers:**
- All security demonstrations are for **educational purposes only**
- **Never use these techniques** on systems without explicit authorization
- **Always follow responsible disclosure** for discovered vulnerabilities
- **Respect applicable laws** and ethical guidelines in your jurisdiction

### **Best Practices Demonstrated**
- Input validation and sanitization
- Parameterized queries
- Content Security Policy (CSP)
- Secure session management
- HTTPS enforcement

---

## 🌟 **Key Components**

### **TerminalHeader**
- Authentic Kali Linux terminal emulation
- Dynamic whoami command output
- Security status indicators

### **VulnerableLogin**
- OWASP-inspired security demonstration
- Multiple vulnerability scenarios
- Educational mitigation strategies
- Interactive security analysis

### **ToolsSection**
- Comprehensive cybersecurity toolkit
- Skill level indicators
- Tool descriptions and use cases
- Interactive hover effects

### **ContactSection**
- CLI-style contact interface
- Secure communication channels
- Professional networking links
- Encrypted contact methods

---

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### **Development Guidelines**
1. Follow existing code style and TypeScript patterns
2. Maintain accessibility standards
3. Test across different browsers and devices
4. Update documentation for new features
5. Respect the ethical hacking theme and educational focus

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 **About Alicia Vento**

**White Hat Hacker & Cybersecurity Specialist**

- 🔍 **Specializes in**: Penetration Testing, Vulnerability Assessment, Network Security
- 🎓 **Focus**: Ethical Hacking, Security Awareness, Incident Response
- 🌐 **Mission**: Securing digital environments through responsible security research
- 📧 **Contact**: [hello@aliciavento.xyz](mailto:hello@aliciavento.xyz)

### **Professional Links**
- 🌐 **Website**: [aliciavento.xyz](https://aliciavento.xyz)
- 💼 **LinkedIn**: [linkedin.com/in/aliciavento](https://www.linkedin.com/in/aliciavento/)
- 📂 **GitHub**: [github.com/alicevento](https://github.com/alicevento)
- 📸 **Instagram**: [@alicia.vento](https://instagram.com/alicia.vento)

---

## 🙏 **Acknowledgments**

- **Kali Linux Team** - For the inspiration and aesthetic direction
- **OWASP Foundation** - For educational security resources
- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **React Community** - For the amazing ecosystem and tools

---

<div align="center">

**"In cybersecurity, trust is earned through transparency"**

*Built with ❤️ by Alicia Vento*

</div>