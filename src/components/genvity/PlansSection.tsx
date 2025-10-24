import React, { useState, useEffect } from 'react';
import { Check, Star, Crown, Zap, Sparkles, TrendingUp, Shield, Users, Gift, ArrowRight, Infinity, Lock, Unlock } from 'lucide-react';

const PlansSection: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(1);
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('plans-section');
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

  const plans = [
    {
      name: 'Free',
      subtitle: 'GEN',
      price: { monthly: '0', yearly: '0' },
      period: 'Para sempre',
      description: 'Seu primeiro passo para uma vida guiada pela IA',
      tagline: 'Comece sua jornada',
      features: [
        { text: 'Acesso imediato à assistente GEN', highlight: true },
        { text: 'Sua rotina guiada para saúde plena', highlight: false },
        { text: 'GEN ajusta cada detalhe do seu dia', highlight: false },
        { text: 'Interações que geram mudanças consistentes', highlight: false },
        { text: 'Impacto imediato na sua rotina', highlight: false }
      ],
      icon: Star,
      gradient: 'from-slate-600 to-slate-800',
      glowColor: 'shadow-slate-500/30',
      iconColor: 'text-slate-400',
      bgColor: 'bg-slate-500/5',
      borderColor: 'border-slate-600/30',
      popular: false,
      highlighted: false,
      cta: 'Começar Grátis',
      badge: 'Grátis',
      badgeColor: 'bg-slate-600',
      stats: { users: '50k+', rating: '4.8' }
    },
    {
      name: 'Better Life',
      subtitle: 'Evolução Completa',
      price: { monthly: '97', yearly: '970' },
      period: '/mês',
      description: 'Um salto para a vida que você merece',
      tagline: 'Maximize seu potencial',
      features: [
        { text: 'Tudo do Free +', highlight: false },
        { text: 'Exames de sangue periódicos inclusos', highlight: true },
        { text: 'Protocolos de nutricionista e saúde mental', highlight: true },
        { text: 'Avaliação física personalizada', highlight: false },
        { text: 'Sugestões de suplementos e treinos', highlight: false },
        { text: 'Interações mais profundas com a GEN', highlight: false }
      ],
      icon: Zap,
      gradient: 'from-emerald-500 to-teal-600',
      glowColor: 'shadow-emerald-500/50',
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/40',
      popular: true,
      highlighted: true,
      cta: 'Iniciar Better Life',
      badge: 'Mais Popular',
      badgeColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      stats: { users: '25k+', rating: '4.9' },
      savings: '2 meses grátis no anual'
    },
    {
      name: 'Immortal',
      subtitle: 'Longevidade Máxima',
      price: { monthly: '197', yearly: '1970' },
      period: '/mês',
      description: 'O futuro da longevidade já disponível',
      tagline: 'Transcenda seus limites',
      features: [
        { text: 'Tudo do Better Life +', highlight: false },
        { text: 'Testes genéticos completos', highlight: true },
        { text: 'Análise de ancestralidade', highlight: true },
        { text: 'Protocolo 100% personalizado', highlight: true },
        { text: 'IA com consciência total do seu dia', highlight: false },
        { text: 'Sugestões otimizadas de compras', highlight: false }
      ],
      icon: Crown,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      glowColor: 'shadow-purple-500/50',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/40',
      popular: false,
      highlighted: false,
      cta: 'Tornar-se Immortal',
      badge: 'Premium',
      badgeColor: 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500',
      stats: { users: '10k+', rating: '5.0' },
      savings: '2 meses grátis no anual'
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return selectedPeriod === 'yearly' ? plan.price.yearly : plan.price.monthly;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (selectedPeriod === 'yearly' && plan.name !== 'Free') {
      const monthlyTotal = parseFloat(plan.price.monthly) * 12;
      const yearlyPrice = parseFloat(plan.price.yearly);
      const savings = monthlyTotal - yearlyPrice;
      return Math.round(savings);
    }
    return 0;
  };

  return (
    <section id="plans-section" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Planos Flexíveis
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Escolha seu </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              protocolo
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Comece gratuitamente e evolua conforme sua jornada de longevidade
          </p>

          {/* Period Toggle */}
          <div className="inline-flex items-center gap-4 bg-slate-800/50 border border-slate-700 rounded-full p-1.5 backdrop-blur-xl">
            <button
              onClick={() => setSelectedPeriod('monthly')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                selectedPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setSelectedPeriod('yearly')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 ${
                selectedPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Anual
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-500/30">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isHovered = hoveredPlan === index;
            const progress = Math.min(Math.max((scrollProgress - index * 0.15) * 2, 0), 1);
            const savings = getSavings(plan);
            
            return (
              <div
                key={plan.name}
                className={`relative group ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 30}px) scale(${plan.highlighted ? 1.05 : 1})`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${plan.highlighted ? 'opacity-20' : ''}`} />
                
                {/* Main Card */}
                <div className={`relative bg-slate-900/90 backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-500 ${
                  plan.highlighted 
                    ? `${plan.borderColor} shadow-2xl ${plan.glowColor}` 
                    : 'border-slate-800 hover:border-slate-700'
                } ${isHovered ? 'scale-105' : 'scale-100'}`}>
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className={`${plan.badgeColor} text-white text-center py-2 font-bold text-sm flex items-center justify-center gap-2`}>
                        <Sparkles className="w-4 h-4" />
                        {plan.badge}
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      {/* Icon */}
                      <div className="relative inline-block mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-40 animate-pulse`} />
                        <div className={`relative p-4 ${plan.bgColor} border ${plan.borderColor} rounded-2xl backdrop-blur-sm`}>
                          <IconComponent className={`w-10 h-10 ${plan.iconColor}`} strokeWidth={2} />
                        </div>
                      </div>

                      {/* Name & Subtitle */}
                      <div className="mb-2">
                        <h3 className="text-3xl font-bold text-white mb-1">{plan.name}</h3>
                        <p className={`text-sm font-semibold ${plan.iconColor}`}>{plan.subtitle}</p>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-2xl text-slate-400">R$</span>
                          <span className={`text-6xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                            {getPrice(plan)}
                          </span>
                          {plan.name !== 'Free' && (
                            <span className="text-slate-400 text-lg">
                              {selectedPeriod === 'yearly' ? '/ano' : '/mês'}
                            </span>
                          )}
                        </div>
                        {plan.name === 'Free' && (
                          <p className="text-slate-400 text-sm mt-1">{plan.period}</p>
                        )}
                        {savings > 0 && (
                          <div className="mt-2 inline-flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                            <Gift className="w-3 h-3" />
                            Economize R$ {savings}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-4 mb-6 pb-6 border-b border-slate-800">
                      <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{plan.stats.users}</span>
                      </div>
                      <div className="w-px h-4 bg-slate-800" />
                      <div className="flex items-center gap-1.5 text-yellow-400 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400" />
                        <span className="font-semibold">{plan.stats.rating}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3.5 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className={`flex items-start gap-3 ${feature.highlight ? 'opacity-100' : 'opacity-80'}`}
                        >
                          <div className={`flex-shrink-0 mt-0.5 p-0.5 rounded-full ${plan.bgColor}`}>
                            <Check className={`w-4 h-4 ${plan.iconColor}`} strokeWidth={3} />
                          </div>
                          <span className={`text-sm leading-relaxed ${feature.highlight ? 'text-white font-medium' : 'text-slate-300'}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full group relative overflow-hidden rounded-xl font-bold py-4 transition-all ${
                      plan.highlighted
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg ${plan.glowColor} hover:shadow-2xl`
                        : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:border-slate-600'
                    }`}>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative flex items-center justify-center gap-2">
                        {plan.cta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    {/* Tagline */}
                    <p className="text-center text-xs text-slate-500 mt-4 italic">
                      {plan.tagline}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Teaser */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Ainda em dúvida?</h3>
            <p className="text-slate-400">Compare todos os recursos lado a lado</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: 'Garantia de 30 dias', desc: 'Satisfação garantida ou seu dinheiro de volta' },
              { icon: Unlock, title: 'Sem contratos', desc: 'Cancele quando quiser, sem burocracia' },
              { icon: TrendingUp, title: 'Upgrade a qualquer momento', desc: 'Evolua seu plano conforme suas necessidades' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800/30 rounded-xl p-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">
            Todos os planos incluem cancelamento gratuito a qualquer momento
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-500">
              <Lock className="w-4 h-4" />
              <span>Pagamento seguro</span>
            </div>
            <div className="w-px h-4 bg-slate-800" />
            <div className="flex items-center gap-2 text-slate-500">
              <Shield className="w-4 h-4" />
              <span>Dados criptografados</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
};

export default PlansSection;