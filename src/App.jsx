import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Server, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} company
 * @property {string} period
 * @property {string[]} tags
 * @property {string} description
 * @property {string} [link]
 * @property {string} [github]
 * @property {string[]} highlights
 */

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'BIOSPN HiPurity - Water Purification Website',
      company: 'Deployed on Netlify',
      period: '2025',
      tags: ['React', 'TypeScript', 'JavaScript', 'Netlify'],
      description: 'Advanced water purification solutions website for BIOSPN Systems.',
      link: 'https://biospn22.netlify.app/',
      github: 'https://github.com/siddhanth88/biospn.2',
      highlights: [
        'Modern responsive design',
        'TypeScript implementation',
        'Production deployment on Netlify',
        'Optimized for both desktop and mobile viewing'
      ]
    },

    {
      title: 'OTD-Solutions (On Time Delivery) - Transports & Logistics Website',
      company: 'Deployed on Netlify',
      period: '2025',
      tags: ['React', 'TypeScript', 'JavaScript', 'Netlify'],
      description: 'Transports & Logistics Website.',
      link: 'https://otdsolutions.netlify.app/',
      github: 'https://github.com/siddhanth88/otd-solutions1',
      highlights: [
        'Modern responsive design & Animations',
        'TypeScript implementation',
        'Production deployment on Netlify',
        'Modern UI/UX with smooth animations and transitions',
        'Dynamic hero section with custom imagery and branding',
        'Optimized for both desktop and mobile viewing'
      ]
    },
    
    {
      title: 'RR EVENTS - Event Management Platform',
      company: 'Open Source',
      period: '2025',
      tags: ['React', 'JavaScript', 'Vercel', 'Event Management'],
      description: 'React-based web application for managing events with modern UI/UX.',
      github: 'https://github.com/siddhanth88/RR-EVENTS',
      link: 'https://rr-brown-phi.vercel.app/',
      highlights: [
        'Event creation and management',
        'Apache License 2.0',
        'React-based architecture',
        'Fast load times and optimized asset delivery'
      ]
    },
    
    {
      title: 'Local Political Campaign Website',
      company: 'Open Source',
      period: '2025',
      tags: ['React', 'JavaScript', 'Netlify', 'Political Candidate Website'],
      description: 'React-powered campaign website featuring responsive design and dynamic content.',
      github: 'https://github.com/siddhanth88/maggi-bhai-website',
      link: 'https://maggibhaiwardno9.online/',
      highlights: [
        'Social media integration ready',
        'Fully responsive design optimized for mobile, and desktop',
        'Built with React.js and Vite for optimal performance',
        'Contact section for voter engagement',
        'Social media integration ready',
        'Clean Code - Well-documented and organized'
      ]
    },
    
     {
      title: 'Full-Stack E-commerce Web Application',
      company: 'Open Source',
      period: '2025',
      tags: ['React', 'JavaScript', 'CSS', 'Vercel', 'Ecommerce Shopping Website'],
      description: 'Modern React-based e-commerce platform with premium UI/UX and seamless shopping experience.',
      github: 'https://github.com/siddhanth88/ecommerce',
      link: 'https://ecomm64.vercel.app/',
      highlights: [
        'Social media integration ready',
        ' Smooth Animations - Fluid transitions and hover effects',
        'Intuitive Shopping Cart - Easy add/remove with quantity management',
        'Wishlist Functionality - Save favorite items for later',
        'Clean Minimal Aesthetic - Professional, distraction-free interface',
        'Clean Code - Well-documented and organized'
      ]
     },
    
    {
      title: 'CNC Machine Real-Time Monitoring System',
      company: 'IIT Bombay',
      period: 'Feb 2025 - Sep 2025',
      tags: ['Docker', 'PostgreSQL', 'Grafana', 'Python', 'MTConnect'],
      description: 'Docker-orchestrated system for real-time CNC data monitoring with live dashboards.',
      github: 'https://github.com/siddhanth88/cnc_grafana_dashboard',
      highlights: [
        'Docker-orchestrated system with custom images',
        'Python MTConnect data logger for XML parsing',
        'Live visualization with Grafana dashboards',
        'Real-time HAAS & MAZAK machine monitoring'
      ]
    },
    
    {
      title: 'Food Ordering System',
      company: 'Personal Project',
      period: '2025',
      tags: ['Django', 'Python', 'HTML', 'CSS'],
      description: 'Full-featured food ordering system with Django backend and responsive frontend.',
      github: 'https://github.com/siddhanth88/Food-Ordering',
      highlights: [
        'Django REST framework',
        'User authentication',
        'Order management system'
      ]
    },
    
    {
      title: 'C Calculator in Docker Dev Container',
      company: 'DevOps Project',
      period: '2025',
      tags: ['C', 'Docker', 'Shell', 'DevOps'],
      description: 'Modular C project running inside Docker-based development container.',
      github: 'https://github.com/siddhanth88/-C-Calculator-in-Docker-Dev-Container-',
      highlights: [
        'Dockerized development environment',
        'Custom Docker images with GCC',
        'VS Code Dev Container integration'
      ]
    },
    
    {
      title: 'JumpSquad E-Commerce Frontend',
      company: 'Personal Project',
      period: '2024',
      tags: ['React', 'JavaScript', 'E-commerce'],
      description: 'Modern e-commerce frontend with responsive design and shopping features.',
      github: 'https://github.com/siddhanth88/jumpsquad-ecom-frontend',
      highlights: [
        'Product catalog interface',
        'Shopping cart functionality',
        'Responsive React components'
      ]
    }
  ];

  const skills = [
    { category: 'Programming', items: ['Python', 'TypeScript', 'C', 'C++'], icon: Code },
    { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'TailwindCSS', 'Responsive Design'], icon: Code },
    { category: 'Backend', items: ['Django', 'Flask', 'REST APIs'], icon: Server },
    { category: 'Data Science', items: ['NumPy', 'Pandas', 'Scikit-Learn', 'TensorFlow', 'Matplotlib'], icon: Database },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite'], icon: Database },
    { category: 'DevOps & Tools', items: ['Docker', 'Git', 'CI/CD', 'VS Code', 'Linux', 'Windows'], icon: Server },
    { category: 'Monitoring', items: ['Grafana', 'MTConnect', 'Real-time Systems'], icon: Server },
    { category: 'Cloud & Deploy', items: ['AWS', 'Netlify', 'Docker Desktop'], icon: Server }
  ];

  const experience = [
    {
      role: 'AI/ML Research Intern',
      company: 'NCAIR, IIT Bombay',
      period: 'Feb 2025 - "Sep 2025',
      description: 'Worked under Prof. Asim Tewari on CNC monitoring systems and composite design applications.'
    },
    {
      role: 'Python Full Stack Developer',
      company: 'Iprologic, Hyderabad',
      period: 'Apr 2023 - Nov 2024',
      description: 'Developed scalable web apps using Django + REST APIs, reducing bug reports by 25%.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Work in Progress Banner */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-6 text-center text-sm font-medium z-50 animate-slide-down">
        Portfolio work is under progress 🏗️👷
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Siddhanth Remma
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/siddhanth88" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/siddhanth88" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sidhuremma121@gmail.com"
               className="hover:text-cyan-400 transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="text-cyan-400 text-sm font-semibold tracking-wider mb-2">FULL STACK DEVELOPER</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Siddhanth</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Research Intern at <span className="text-cyan-400 font-semibold">IIT Bombay</span> specializing in DevOps, Full Stack Development, and Machine Learning.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                View Projects
              </a>
              <a href="mailto:sidhuremma121@gmail.com" className="px-6 py-3 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-6 pt-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sidhuremma121@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 91689-20987
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
<img 
            src="/my-image.jpeg" 
            alt="Siddhanth Remma"
            className="relative rounded-2xl shadow-2xl border-4 border-slate-800/50 w-full max-w-xs mx-auto transform hover:scale-100 transition-transform duration-400"
          />      
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="grid gap-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                    <p className="text-slate-300 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Certificate Highlight */}
          <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Certificate of Excellence - IIT Bombay</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Received recognition from <span className="font-semibold">Prof. Asim Tewari</span> for exceptional work on CNC Machine Real-Time Monitoring System and web-based composite materials tools. Demonstrated strong comprehension skills, diligence, and enthusiasm for learning.
                </p>
                <a
                  href="/Internship certificate- Siddhanth_Remma.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-cyan-400">{project.company}</p>
                  </div>
                  <span className="text-xs text-slate-400">{project.period}</span>
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2 border-t border-slate-700/50">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-semibold transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-semibold transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold mb-3 text-cyan-400">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/siddhanth88" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/siddhanth88" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sidhuremma121@gmail.com"
               className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400">© 2025 Siddhanth Remma. Built with React + Vite + TailwindCSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
