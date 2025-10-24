import React, { useState, useEffect } from 'react';
import { AlertTriangle, Target, TrendingUp, Zap, Users, Calendar } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('problem-solution-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      icon: AlertTriangle,
      title: "O Problema",
      subtitle: "A Realidade Atual",
      description: "Protocolos genéricos não funcionam. Médicos, academias e apps oferecem soluções iguais para todos, ignorando sua genética, hormônios e rotina únicos.",
      color: "red",
      gradient: "from-red-500 to-orange-500",
      bgGlow: "bg-red-500/5",
      borderColor: "border-red-500/20",
      stats: [
        { icon: Users, text: "95% seguem protocolos genéricos" },
        { icon: Calendar, text: "Resultados inconsistentes" }
      ]
    },
    {
      icon: Target,
      title: "A Solução",
      subtitle: "IA de Longevidade Ativa",
      description: "A primeira IA ativa de longevidade que guia você todos os dias. Personalização profunda através de genética, exames e rotina, com protocolos 360° e acompanhamento ativo.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/5",
      borderColor: "border-blue-500/20",
      stats: [
        { icon: Zap, text: "Personalização em tempo real" },
        { icon: Target, text: "Protocolos 360° integrados" }
      ]
    },
    {
      icon: TrendingUp,
      title: "A Transformação",
      subtitle: "Ciência Aplicada",
      description: "Com a Genvity AI, saúde deixa de ser tentativa e erro. É ciência + tecnologia transformada em ação prática diária.",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/5",
      borderColor: "border-green-500/20",
      stats: [
        { icon: TrendingUp, text: "Resultados mensuráveis" },
        { icon: Zap, text: "Evolução contínua" }
      ]
    }
  ];

  return (
    <section id="problem-solution-section" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '2s' }} />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              A Jornada de Transformação
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Da Frustração à Evolução
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Descubra como a Genvity AI revoluciona sua jornada de saúde e longevidade
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isActive = activeCard === index;
            const progress = Math.min(Math.max((scrollProgress - index * 0.2) * 2, 0), 1);
            
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 50}px)`
                }}
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Main Card */}
                <div className={`relative bg-slate-900/80 backdrop-blur-xl border ${card.borderColor} rounded-2xl p-8 h-full transition-all duration-500 ${isActive ? 'scale-105 shadow-2xl' : 'scale-100'}`}>
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-full flex items-center justify-center font-bold text-xl text-slate-400 shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-2xl opacity-20 animate-pulse`} 
                        style={{ animationDuration: '3s', animationDelay: `${index * 0.3}s` }} />
                    <div className={`relative inline-flex p-6 rounded-2xl ${card.bgGlow} border ${card.borderColor} backdrop-blur-sm`}>
                      {/* CORREÇÃO: Removemos 'bg-gradient-...', 'bg-clip-text' e 'text-transparent'
                        e usamos a 'card.color' para definir uma cor de texto sólida.
                      */}
                      <Icon 
                        className={`w-12 h-12 ${
                          card.color === 'red' ? 'text-red-500' :
                          card.color === 'blue' ? 'text-blue-500' :
                          'text-green-500'
                        }`} 
                        strokeWidth={2} 
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                        {card.subtitle}
                      </span>
                      <h3 className="text-3xl font-bold text-white mt-2 mb-4">
                        {card.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed text-base">
                      {card.description}
                    </p>

                    {/* Stats */}
                    <div className="pt-6 space-y-3 border-t border-slate-800/50">
                      {card.stats.map((stat, i) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                            <StatIcon className="w-4 h-4" />
                            <span>{stat.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-20`} 
                         style={{ 
                           mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                           maskComposite: 'exclude',
                           padding: '2px'
                         }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Connection Flow */}
        <div className="relative hidden md:block h-32 mb-16">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 100">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Connection Path */}
            <path
              d="M 150 50 Q 333 20, 500 50 T 850 50"
              fill="none"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              strokeDasharray="10 5"
              opacity="0.4"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-1000"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>

            {/* Flowing Particles */}
            {[...Array(5)].map((_, i) => (
              <circle key={i} r="4" fill="url(#flowGradient)">
                <animateMotion
                  path="M 150 50 Q 333 20, 500 50 T 850 50"
                  dur="5s"
                  repeatCount="indefinite"
                  begin={`${i * 1}s`}
                />
              </circle>
            ))}
          </svg>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 backdrop-blur-xl">
            <p className="text-2xl font-bold text-white mb-2">
              Pronto para sua transformação?
            </p>
            <p className="text-slate-400">
              Junte-se a milhares que já estão evoluindo com a Genvity AI
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemSolutionSection;