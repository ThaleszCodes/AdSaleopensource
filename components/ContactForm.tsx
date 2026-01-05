import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessType: 'local',
    budget: '1000-3000'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 1000);
    
    // Optional: Redirect to WhatsApp with pre-filled message
    // const message = `Olá, me chamo ${formData.name}. Tenho um negócio do tipo ${formData.businessType} e pretendo investir ${formData.budget} em tráfego. Gostaria de uma consultoria.`;
    // const encodedMessage = encodeURIComponent(message);
    // window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para <br/><span className="text-emerald-400">escalar suas vendas?</span>
              </h2>
              <p className="text-slate-400 mb-8">
                Preencha o formulário para agendarmos uma reunião de diagnóstico gratuita. Vamos analisar sua estrutura atual e traçar um plano de ação.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  <span>Diagnóstico de Presença Online</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  <span>Análise de Concorrência</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  <span>Plano de Mídia Personalizado</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Recebemos seu contato!</h3>
                  <p className="text-slate-400">Em breve um especialista entrará em contato pelo WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="(DD) 99999-9999"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Tipo de Negócio</label>
                    <select 
                      name="businessType"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      value={formData.businessType}
                      onChange={handleChange}
                    >
                      <option value="local">Negócio Local</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="infoproduto">Infoproduto / Lançamento</option>
                      <option value="servico">Prestação de Serviços</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Verba Mensal para Anúncios</label>
                    <select 
                      name="budget"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="under_1000">Até R$ 1.000</option>
                      <option value="1000-3000">R$ 1.000 a R$ 3.000</option>
                      <option value="3000-5000">R$ 3.000 a R$ 5.000</option>
                      <option value="5000-10000">R$ 5.000 a R$ 10.000</option>
                      <option value="over_10000">Acima de R$ 10.000</option>
                    </select>
                  </div>

                  <Button type="submit" fullWidth className="mt-4">
                    Solicitar Diagnóstico
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;