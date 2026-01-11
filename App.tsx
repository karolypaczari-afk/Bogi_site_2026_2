
import React, { useState, useEffect } from 'react';
import { ACHIEVEMENTS, EXPERIENCE, SERVICES, TESTIMONIALS } from './constants';
import ProcessAdvisor from './components/ProcessAdvisor';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 hidden md:block border-b border-slate-800">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="mailto:horvath.boglarka@hotmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <i className="far fa-envelope"></i> horvath.boglarka@hotmail.com
            </a>
            <a href="tel:+36303256332" className="hover:text-white transition-colors flex items-center gap-2">
              <i className="fas fa-phone"></i> +36 30 325 6332
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          <a href="#" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-500 transition-all font-medium">
            Download CV
          </a>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-serif text-slate-900">
            Bogi<span className="text-blue-600">Horvath</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">How I Help</a>
            <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#achievements" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Results</a>
            <a href="#experience" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Experience</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl p-6 flex flex-col space-y-4 animate-fadeIn">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">How I Help</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Services</a>
            <a href="#achievements" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Results</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">Experience</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold">Let's Talk</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase">
              <i className="fas fa-rocket"></i> Functional Lead @ S.W.I.F.T.
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
              Unlock Your Team's <span className="text-blue-600 italic">Full Potential</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Strategic Process Transformation Lead delivering <strong>€700k+ in documented cost savings</strong>. I bridge the gap between complex strategy and flawless execution.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Cost Savings', val: '€700k+' },
                { label: 'Experience', val: '14+ Yrs' },
                { label: 'Certs', val: '10+' },
                { label: 'Remote', val: '5+ Yrs' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 stat-card transition-all">
                  <span className="block text-2xl font-bold text-blue-600 font-serif stat-value transition-transform duration-300">{stat.val}</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                <i className="far fa-calendar-alt"></i> Book Discussion
              </a>
              <a href="#" className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                <i className="far fa-file-alt"></i> View Resume
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity rotate-3"></div>
            <img 
              src="https://bogihorvath.com/wp-content/uploads/2024/08/image-27.png" 
              alt="Bogi Horvath" 
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Driving Results Through Process Excellence</h2>
            <p className="text-lg text-slate-500">Leveraging Lean Six Sigma, Agile, and ITIL frameworks to transform operations and deliver measurable impact.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-chart-line', title: 'Process Optimization', desc: 'Identify inefficiencies and eliminate waste for consistent 15-20% efficiency gains.' },
              { icon: 'fa-cogs', title: 'Digital Transformation', desc: 'Leading migration and automation initiatives that reduce manual intervention by 20%.' },
              { icon: 'fa-users', title: 'Team Leadership', desc: 'Guiding cross-functional teams through complex change with stakeholder alignment.' },
              { icon: 'fa-robot', title: 'AI Implementation', desc: 'Leveraging AI tools like Copilot to accelerate analysis and documentation.' },
              { icon: 'fa-file-contract', title: 'Standardization', desc: 'Defining robust documentation that reduces operational ambiguity for scale.' },
              { icon: 'fa-tachometer-alt', title: 'Performance Analytics', desc: 'KPI frameworks that enable data-driven decision-making and continuous improvement.' }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-white group-hover:bg-blue-600 shadow-sm rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <i className={`fas ${item.icon} text-blue-600 group-hover:text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Results */}
      <section id="achievements" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Proven Results</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Measurable impact delivered for global organizations including S.W.I.F.T., NTT, and BT.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.id} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:border-blue-500 transition-all group">
                <div className="text-blue-400 text-3xl mb-4"><i className={`fas ${ach.icon}`}></i></div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{ach.title}</h3>
                <p className="text-slate-400">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {EXPERIENCE.map((exp, idx) => (
              <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                  <i className="fas fa-briefcase text-xs"></i>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-600 font-bold text-sm tracking-tight">{exp.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                  <div className="text-blue-500 font-semibold text-sm mb-3">{exp.company}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold italic">What Leaders Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all flex flex-col justify-between">
                <div className="relative mb-8">
                  <i className="fas fa-quote-left text-blue-200 text-4xl absolute -top-4 -left-4"></i>
                  <p className="relative z-10 text-slate-600 italic leading-relaxed">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">{t.initials}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none">{t.author}</h4>
                    <span className="text-xs text-slate-400 uppercase font-bold">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">Ready to Transform Your <br/> Business Processes?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
            Let's discuss how my expertise in Lean, Agile, and Process Improvement can drive measurable savings for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:horvath.boglarka@hotmail.com" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-slate-50 shadow-2xl transition-all flex items-center gap-3">
              <i className="far fa-envelope"></i> Send an Email
            </a>
            <a href="tel:+36303256332" className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-bold text-lg hover:bg-blue-800 border border-blue-500 shadow-2xl transition-all flex items-center gap-3">
              <i className="fas fa-phone"></i> Call Bogi
            </a>
          </div>
          <div className="mt-16 pt-16 border-t border-blue-500/50 flex flex-wrap justify-center gap-8 text-blue-100/70 font-bold tracking-widest uppercase text-xs">
            <span>Six Sigma Green Belt</span>
            <span>PRINCE2 Foundation</span>
            <span>Lean Practitioner</span>
            <span>ITIL CSI</span>
            <span>Business Architect</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold font-serif text-white">
            Bogi<span className="text-blue-600">Horvath</span>
          </div>
          <p className="text-sm">© 2025 Boglarka Paczari-Horvath. Professional Portfolio.</p>
          <div className="flex gap-6 text-xl">
            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><i className="far fa-envelope"></i></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><i className="fas fa-file-pdf"></i></a>
          </div>
        </div>
      </footer>

      {/* Floating AI Process Advisor */}
      <ProcessAdvisor />
    </div>
  );
};

export default App;
