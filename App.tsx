import React from 'react';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tight cursor-pointer">
            Scale<span className="text-emerald-500">Ads</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-medium hover:text-emerald-400 transition-colors">Serviços</a>
            <a href="#contact" className="text-sm font-medium hover:text-emerald-400 transition-colors">Contato</a>
          </div>
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-colors">
            Falar com Especialista
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Audience />
        <Services />
        <Differentials />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;