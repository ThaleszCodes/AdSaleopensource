import React from 'react';
import { Target, BarChart2, Layers, Search, Smartphone, PieChart } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Google Ads (Links Patrocinados)",
    description: "Apareça exatamente quando seu cliente estiver procurando pelo seu serviço. Fundo de funil com alta intenção de compra.",
    icon: Search
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description: "Anúncios visuais persuasivos para gerar desejo, reconhecimento de marca e remarketing agressivo.",
    icon: Smartphone
  },
  {
    title: "Estratégia de Funil de Vendas",
    description: "Não é só subir campanha. Desenhamos a jornada do cliente desde o primeiro clique até a conversão final.",
    icon: Layers
  },
  {
    title: "Remarketing Inteligente",
    description: "Recupere quem visitou seu site e não comprou. Perseguição estratégica para aumentar drasticamente o ROI.",
    icon: Target
  },
  {
    title: "Otimização Contínua (CRO)",
    description: "Análise diária de métricas. Testes A/B de criativos, públicos e landing pages para baixar o custo por lead.",
    icon: BarChart2
  },
  {
    title: "Relatórios de Performance",
    description: "Transparência total. Dashboards simples e diretos focados no que importa: quanto você investiu e quanto voltou.",
    icon: PieChart
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Além de apertar botões: <br/>
            <span className="text-emerald-400">Inteligência de Vendas</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Dominamos as principais fontes de tráfego do mundo para colocar seu negócio na frente das pessoas certas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;