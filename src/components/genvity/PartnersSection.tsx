import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Shield, 
  Award, 
  Users, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  Building2, 
  Sparkles, 
  Lock, 
  Globe, 
  FileCheck, 
  BadgeCheck,
  ChevronLeft, // Adicionado
  ChevronRight // Adicionado
} from 'lucide-react';

// Imports do Embla Carousel
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const PartnersSection: React.FC = () => {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('partners-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    // Corrigido: 'clearEventListener' para 'removeEventListener'
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const partners = [
    // ... (Seus dados de 'partners' permanecem os mesmos) ...
    { 
      name: 'Harvard Medical School', 
      category: 'Pesquisa',
      logo: '🎓',
      gradient: 'from-red-500 to-rose-600',
      description: 'Protocolos de longevidade',
      collaboration: 'Pesquisa ativa',
      yearsActive: '3 anos'
    },
    { 
      name: 'Stanford Genetics Lab', 
      category: 'Genética',
      logo: '🧬',
      gradient: 'from-green-500 to-emerald-600',
      description: 'Análise genômica avançada',
      collaboration: 'Parceria estratégica',
      yearsActive: '2 anos'
    },
    { 
      name: 'Mayo Clinic', 
      category: 'Medicina',
      logo: '⚕️',
      gradient: 'from-blue-500 to-cyan-600',
      description: 'Validação clínica',
      collaboration: 'Estudos conjuntos',
      yearsActive: '4 anos'
    },
    { 
      name: 'MIT AI Lab', 
      category: 'Tecnologia',
      logo: '🤖',
      gradient: 'from-purple-500 to-violet-600',
      description: 'Machine learning aplicado',
      collaboration: 'Desenvolvimento de IA',
      yearsActive: '2 anos'
    },
    { 
      name: 'Genomics Institute', 
      category: 'Genômica',
      logo: '🔬',
      gradient: 'from-orange-500 to-amber-600',
      description: 'Sequenciamento de DNA',
      collaboration: 'Infraestrutura compartilhada',
      yearsActive: '3 anos'
    },
    { 
      name: 'Longevity Research Foundation', 
      category: 'Pesquisa',
      logo: '📊',
      gradient: 'from-pink-500 to-rose-600',
      description: 'Estudos de envelhecimento',
      collaboration: 'Dados longitudinais',
      yearsActive: '5 anos'
    },
    { 
      name: 'UCSF Precision Medicine', 
      category: 'Medicina',
      logo: '🏥',
      gradient: 'from-teal-500 to-cyan-600',
      description: 'Medicina personalizada',
      collaboration: 'Protocolos clínicos',
      yearsActive: '2 anos'
    },
    { 
      name: 'DeepMind Health', 
      category: 'Tecnologia',
      logo: '🧠',
      gradient: 'from-indigo-500 to-blue-600',
      description: 'IA para diagnóstico',
      collaboration: 'Algoritmos preditivos',
      yearsActive: '1 ano'
    }
  ];

  const investors = [
    // ... (Seus dados de 'investors' permanecem os mesmos) ...
    { 
      name: 'Andreessen Horowitz', 
      type: 'VC',
      logo: 'a16z',
      amount: '$50M',
      round: 'Series B',
      gradient: 'from-purple-500 to-indigo-600'
    },
    { 
      name: 'Founders Fund', 
      type: 'VC',
      logo: 'FF',
      amount: '$30M',
      round: 'Series A',
      gradient: 'from-blue-500 to-cyan-600'
    },
    { 
      name: 'Google Ventures', 
      type: 'Corporate VC',
      logo: 'GV',
      amount: '$25M',
      round: 'Series B',
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Khosla Ventures', 
      type: 'VC',
      logo: 'KV',
      amount: '$20M',
      round: 'Series A',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Sequoia Capital', 
      type: 'VC',
      logo: 'SQ',
      amount: '$15M',
      round: 'Seed',
      gradient: 'from-teal-500 to-cyan-600'
    },
    { 
      name: 'Y Combinator', 
      type: 'Accelerator',
      logo: 'YC',
      amount: '$2M',
      round: 'Seed',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const certifications = [
    // ... (Seus dados de 'certifications' permanecem os mesmos) ...
    { 
      name: 'ISO 27001', 
      description: 'Segurança da Informação',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      verified: true
    },
    { 
      name: 'HIPAA', 
      description: 'Privacidade de Dados Médicos',
      icon: Lock,
      color: 'from-blue-500 to-cyan-600',
      verified: true
    },
    { 
      name: 'FDA', 
      description: 'Regulamentação Médica',
      icon: FileCheck,
      color: 'from-purple-500 to-violet-600',
      verified: true
    },
    { 
      name: 'GDPR', 
      description: 'Proteção de Dados EU',
      icon: Globe,
      color: 'from-orange-500 to-red-600',
      verified: true
    },
    { 
      name: 'SOC 2', 
      description: 'Conformidade de Segurança',
      icon: BadgeCheck,
      color: 'from-pink-500 to-rose-600',
      verified: true
    },
    { 
      name: 'CLIA', 
      description: 'Laboratório Clínico',
      icon: Award,
      color: 'from-teal-500 to-cyan-600',
      verified: true
    }
  ];

  const stats = [
    // ... (Seus dados de 'stats' permanecem os mesmos) ...
    { value: '140+', label: 'Publicações Científicas', icon: FileCheck },
    { value: '8', label: 'Instituições Parceiras', icon: Building2 },
    { value: '$142M', label: 'Investimento Total', icon: TrendingUp },
    { value: '6', label: 'Certificações', icon: Award }
  ];

  const categories = ['all', 'Pesquisa', 'Genética', 'Medicina', 'Tecnologia', 'Genômica'];
  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory);

  
  // --- LÓGICA DO CARROSSEL DE PARCEIROS ---
  const autoplay = useRef(
      Autoplay(
        { delay: 4000, stopOnInteraction: false } // Apenas 1 argumento
      )
    );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      // Define a quantidade de slides: 1 no mobile, 2 no tablet, 4 no desktop
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  // Re-inicializa o carrossel quando os parceiros filtrados mudam
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, filteredPartners]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  // --- FIM DA LÓGICA DO CARROSSEL ---


  return (
    <section id="partners-section" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* ... (Seu Background Animado permanece o mesmo) ... */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 25}px`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['🏛️', '🎓', '🔬', '🧬', '⚕️'][Math.floor(Math.random() * 5)]}
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ... (Sua Stats Bar permanece a mesma, usando scrollProgress) ... */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center hover:border-slate-700 transition-all group"
                style={{
                  opacity: scrollProgress,
                  transform: `translateY(${(1 - scrollProgress) * 20}px)`
                }}
              >
                <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            );
          })}
        </div>


        {/* Research Partners Section */}
        <div className="mb-20">
          {/* ... (Seu Header de 'Research Partners' permanece o mesmo) ... */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Parceiros Globais
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Parceiros de </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Pesquisa
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Colaboramos com as principais instituições mundiais em genética, medicina e longevidade
            </p>
          </div>

          {/* ... (Seu Filtro de Categoria permanece o mesmo) ... */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600 hover:text-slate-200'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>


          {/* ======================================= */}
          {/* =     NOVO CARROSSEL DE PARCEIROS   = */}
          {/* ======================================= */}
          <div className="relative">
            {/* Botão Esquerdo */}
            <button
              className="absolute top-1/2 -left-4 md:-left-6 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all disabled:opacity-0"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </button>
            
            {/* Botão Direito */}
            <button
              className="absolute top-1/2 -right-4 md:-right-6 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all disabled:opacity-0"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>

            {/* Viewport do Embla */}
            <div className="overflow-hidden" ref={emblaRef}>
              
              {/* Container do Embla */}
              <div className="flex -ml-6"> {/* `-ml-6` para compensar o `pl-6` dos slides */}
                
                {filteredPartners.map((partner, index) => {
                  const isHovered = hoveredPartner === index;
                  
                  return (
                    // Cada slide
                    <div 
                      className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 pl-6" // 1 slide (mobile), 2 (tablet), 4 (desktop)
                      key={index}
                    >
                      <div
                        className="group relative h-full"
                        onMouseEnter={() => setHoveredPartner(index)}
                        onMouseLeave={() => setHoveredPartner(null)}
                        // REMOVIDO: a animação de 'style' baseada no 'progress'
                      >
                        {/* Glow Effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${partner.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                        
                        {/* Main Card */}
                        <div className={`relative bg-slate-900/90 backdrop-blur-xl border-2 border-slate-800 rounded-2xl p-6 transition-all duration-300 h-full ${ // Adicionado h-full
                          isHovered ? 'scale-105 border-slate-700 shadow-2xl' : 'scale-100'
                        }`}>
                          {/* ... (Todo o conteúdo do card permanece o mesmo) ... */}
                          <div className={`w-16 h-16 bg-gradient-to-br ${partner.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                            {partner.logo}
                          </div>

                          <div className="space-y-3">
                            <div>
                              <h3 className="text-lg font-bold text-white mb-1">{partner.name}</h3>
                              <p className="text-sm text-slate-400">{partner.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${partner.gradient} bg-opacity-10 border border-opacity-30`}>
                                {partner.category}
                              </span>
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                                {partner.yearsActive}
                              </span>
                            </div>

                            <div className="pt-3 border-t border-slate-800">
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <CheckCircle className="w-3 h-3" />
                                <span>{partner.collaboration}</span>
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-4 right-4">
                            <div className="w-6 h-6 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ======================================= */}
        {/* =       FIM DO CARROSSEL DE PARCEIROS = */}
        {/* ======================================= */}


        {/* ... (Sua Seção de Investidores permanece a mesma) ... */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Backing de Elite
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Apoiado por investidores de </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                classe mundial
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Confiança dos maiores fundos de venture capital do Vale do Silício
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${investor.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${investor.gradient} rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-lg`}>
                      {investor.logo}
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold bg-gradient-to-r ${investor.gradient} bg-clip-text text-transparent`}>
                        {investor.amount}
                      </p>
                      <p className="text-xs text-slate-500">{investor.round}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">{investor.name}</h3>
                  <p className="text-sm text-slate-400">{investor.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl px-8 py-4">
              <p className="text-sm text-slate-400 mb-1">Total Investido</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                $142 Million
              </p>
            </div>
          </div>
        </div>

        {/* ... (Sua Seção de Certificações permanece a mesma) ... */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-green-400 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Certificações & Compliance
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Segurança </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Certificada
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Todas as certificações internacionais para proteção de dados médicos e privacidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center hover:border-slate-700 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1">{cert.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
                    
                    {cert.verified && (
                      <div className="mt-3 flex items-center justify-center gap-1 text-xs text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verificado</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-teal-900/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Seus dados estão seguros</h3>
                  <p className="text-slate-400">Criptografia de nível militar e compliance total</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center gap-2">
                <span>Ver Política de Privacidade</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ... (Seu <style> de keyframes permanece o mesmo) ... */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;