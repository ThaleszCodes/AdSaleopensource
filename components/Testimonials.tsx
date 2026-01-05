import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Proprietário de Clínica Odontológica",
    content: "Antes de contratar a gestão, a gente dependia só de indicação. Hoje recebemos uma média de 15 contatos qualificados por dia no WhatsApp. A agenda está cheia para o próximo mês.",
    result: "ROI de 8x no primeiro mês"
  },
  {
    name: "Ana Clara",
    role: "E-commerce de Moda Feminina",
    content: "Já tinha tentado fazer tráfego sozinha e só perdi dinheiro. O trabalho de funil e remarketing que eles fizeram recuperou muitos carrinhos abandonados. Profissionais de verdade.",
    result: "Faturamento triplicou em 90 dias"
  },
  {
    name: "Marcos Oliveira",
    role: "Infoprodutor (Curso de Finanças)",
    content: "Estávamos com o CPL muito alto e não conseguíamos escalar o lançamento. A otimização dos criativos e a segmentação nova baixaram o custo pela metade.",
    result: "CPL reduziu de R$ 8,00 para R$ 3,50"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados reais de quem <br />confiou no processo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative">
              <Quote className="absolute top-8 right-8 text-slate-800 w-8 h-8" />
              <div className="mb-6">
                <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {t.result}
                </span>
                <p className="text-slate-300 leading-relaxed italic">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-emerald-500">
                    {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;