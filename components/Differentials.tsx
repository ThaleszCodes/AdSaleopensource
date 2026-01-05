import React from 'react';
import { Database, MousePointerClick, ShieldCheck } from 'lucide-react';

const Differentials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que minha metodologia funciona?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              A maioria dos gestores foca em métricas de vaidade como "curtidas" ou "impressões". 
              Meu foco é obssessivo em uma única métrica: <span className="text-emerald-400 font-bold">LUCRO NO SEU BOLSO.</span>
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Database className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Decisões Baseadas em Dados</h4>
                  <p className="text-slate-400">Nada de "achismo". Cada real investido é rastreado para garantir que está trazendo retorno.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <MousePointerClick className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Testes A/B Constantes</h4>
                  <p className="text-slate-400">Sempre testando novos criativos, headlines e públicos para encontrar o menor custo por conversão.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Segurança de Verba</h4>
                  <p className="text-slate-400">Escalamos o investimento apenas quando o retorno já está validado e consistente.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
             <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full opacity-50"></div>
             <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">Custo por Lead (CPL)</p>
                    <p className="text-3xl font-bold text-white">R$ 4,50</p>
                    <p className="text-emerald-400 text-sm flex items-center gap-1 mt-1">
                      <span className="bg-emerald-500/10 px-1 rounded">-32%</span> vs mês anterior
                    </p>
                  </div>
                  <div className="h-16 w-32 flex items-end gap-1">
                    <div className="bg-slate-700 w-full h-[60%] rounded-t"></div>
                    <div className="bg-slate-700 w-full h-[80%] rounded-t"></div>
                    <div className="bg-emerald-500 w-full h-[40%] rounded-t relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Otimizado
                        </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[75%]"></div>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                        <span>Verba Utilizada</span>
                        <span>75%</span>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800">
                     <p className="text-slate-300 italic text-center">"Otimizamos suas campanhas todos os dias."</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Differentials;