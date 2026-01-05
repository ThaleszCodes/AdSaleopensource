import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Scale<span className="text-emerald-500">Ads</span>
            </h2>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-emerald-500/80 text-xs font-medium uppercase tracking-wide mb-1">
                Site Modelo / Exemplo
              </p>
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Todos os direitos reservados.
              </p>
              <p className="text-slate-600 text-xs">
                Desenvolvido por{' '}
                <a 
                  href="https://axium-web.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-500 transition-colors"
                >
                  Axium Web
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;