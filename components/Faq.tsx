import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Quanto preciso investir nos anúncios?",
    answer: "Isso depende do seu nicho e objetivo. Para negócios locais, recomendamos começar com pelo menos R$ 30,00 a R$ 50,00 por dia para ter dados suficientes para otimização. O valor dos anúncios é pago diretamente às plataformas (Google/Facebook)."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "O tráfego pago é a forma mais rápida de gerar visitas, muitas vezes gerando leads nas primeiras 48 horas. Porém, a consistência e a otimização de custos (maturidade da campanha) geralmente ocorrem entre o 1º e 3º mês."
  },
  {
    question: "O serviço tem fidelidade?",
    answer: "Trabalhamos com contratos flexíveis. Acreditamos que você deve ficar pelos resultados, não por uma cláusula contratual abusiva. Pedimos apenas um aviso prévio de 30 dias para organização."
  },
  {
    question: "Você garante vendas?",
    answer: "Nenhum gestor sério garante vendas, pois isso depende também do seu atendimento comercial, preço e oferta. O que garantimos é levar pessoas qualificadas e interessadas até o seu canal de vendas (Site ou WhatsApp)."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-400">Tire suas dúvidas sobre como funciona a gestão de tráfego.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-slate-800 rounded-lg bg-slate-950 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="text-emerald-500 w-5 h-5 shrink-0" />
                ) : (
                  <Plus className="text-emerald-500 w-5 h-5 shrink-0" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;