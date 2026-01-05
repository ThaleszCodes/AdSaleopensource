import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Para quem é */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="bg-emerald-500/10 p-2 rounded-lg text-emerald-500">
                <CheckCircle2 size={24} />
              </span>
              Para quem é este serviço?
            </h3>
            <ul className="space-y-4">
              {[
                "Negócios Locais que querem lotar a agenda ou aumentar fluxo de loja.",
                "Infoprodutores que buscam escala e otimização de CPL/CPA.",
                "Empresas que já anunciam mas estão estagnadas ou com ROI baixo.",
                "Empreendedores que entendem que tráfego é investimento, não custo."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem NÃO é */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="bg-red-500/10 p-2 rounded-lg text-red-500">
                <XCircle size={24} />
              </span>
              Para quem <span className="text-red-500">NÃO</span> é?
            </h3>
            <ul className="space-y-4">
              {[
                "Quem procura 'hacks' mágicos ou dinheiro fácil sem trabalho.",
                "Negócios sem processo de vendas validado (o tráfego só amplifica).",
                "Quem não tem verba mínima para testes e validação de público.",
                "Quem acha que o gestor de tráfego vai fazer milagre sozinho."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Audience;