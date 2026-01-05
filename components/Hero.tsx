import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-emerald-400 text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Vagas abertas para consultoria estratégica
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Pare de queimar dinheiro. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Transforme cliques em lucro.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Estratégias avançadas de Tráfego Pago para Negócios Locais e Infoprodutores que buscam escala real, leads qualificados e ROI positivo. Sem métricas de vaidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="#contact" icon fullWidth={false} className="w-full sm:w-auto">
              Quero escalar minhas vendas
            </Button>
            <Button variant="outline" href="#services" fullWidth={false} className="w-full sm:w-auto">
              Ver como funciona
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-slate-800/50 pt-8">
            <div className="flex flex-col items-center">
              <TrendingUp className="text-emerald-400 w-8 h-8 mb-2" />
              <span className="text-2xl font-bold text-white">+R$ 2M</span>
              <span className="text-sm text-slate-500">Gerenciados em Ads</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-emerald-400 w-8 h-8 mb-2" />
              <span className="text-2xl font-bold text-white">+50</span>
              <span className="text-sm text-slate-500">Negócios Escalados</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <DollarSign className="text-emerald-400 w-8 h-8 mb-2" />
              <span className="text-2xl font-bold text-white">ROI 5x</span>
              <span className="text-sm text-slate-500">Média dos Clientes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;