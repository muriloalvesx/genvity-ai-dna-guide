import React, { useState, useEffect } from 'react';
import { Activity, Brain, Dna, Droplet, Utensils, TrendingUp, Sparkles, ArrowRight, Zap, Shield, Target } from 'lucide-react';

const DashboardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('genetic');
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setAnimatedValues([85, 92, 78]);
    }, 300);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const dashboards = {
    genetic: {
      title: 'Análise Genética',
      icon: Dna,
      color: 'from-blue-500 to-cyan-500',
      solidColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      glowColor: 'shadow-blue-500/50',
      stats: [
        { label: 'Marcadores Analisados', value: '847,231', trend: '+12%', icon: Sparkles },
        { label: 'Predisposições Identificadas', value: '23', trend: 'Ótimo', icon: Shield },
        { label: 'Recomendações Ativas', value: '47', trend: '+8 esta semana', icon: Target }
      ],
      metrics: [
        { name: 'Metabolismo', value: 85, status: 'Excelente' },
        { name: 'Resposta Inflamatória', value: 92, status: 'Ótimo' },
        { name: 'Longevidade Celular', value: 78, status: 'Bom' }
      ],
      insights: [
        'Gene APOE ε3/ε3 indica resposta padrão a gorduras saturadas',
        'Polimorfismo MTHFR detectado - suplementação de metilfolato recomendada',
        'Perfil otimizado para exercícios de resistência de alta intensidade'
      ]
    },
    physical: {
      title: 'Monitoramento Físico',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      solidColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      glowColor: 'shadow-green-500/50',
      stats: [
        { label: 'Métricas Monitoradas', value: '42', trend: 'Tempo real', icon: Activity },
        { label: 'Melhoria na Forma Física', value: '+31%', trend: '3 meses', icon: TrendingUp },
        { label: 'Dias Consecutivos', value: '127', trend: 'Recorde', icon: Zap }
      ],
      metrics: [
        { name: 'VO2 Max', value: 88, status: 'Elite' },
        { name: 'Força Muscular', value: 91, status: 'Excelente' },
        { name: 'Flexibilidade', value: 75, status: 'Bom' }
      ],
      insights: [
        'Frequência cardíaca de repouso diminuiu 8 bpm em 3 meses',
        'Zona de queima de gordura otimizada entre 135-148 bpm',
        'Recuperação muscular 23% mais rápida que média da idade'
      ]
    },
    blood: {
      title: 'Biomarcadores Sanguíneos',
      icon: Droplet,
      color: 'from-purple-500 to-pink-500',
      solidColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/50',
      stats: [
        { label: 'Marcadores Otimizados', value: '18/23', trend: '+4 mês', icon: TrendingUp },
        { label: 'Melhoria Geral', value: '+28%', trend: '6 meses', icon: Sparkles },
        { label: 'Idade Biológica', value: '-3.2 anos', trend: 'Rejuvenescendo', icon: Shield }
      ],
      metrics: [
        { name: 'HbA1c', value: 94, status: 'Ótimo' },
        { name: 'Colesterol HDL', value: 89, status: 'Excelente' },
        { name: 'Vitamina D', value: 82, status: 'Bom' }
      ],
      insights: [
        'Inflamação sistêmica (hs-CRP) reduzida em 42%',
        'Perfil lipídico otimizado - risco cardiovascular baixo',
        'Hormônios tireoidianos em faixa ideal para metabolismo'
      ]
    },
    mind: {
      title: 'Perfil Psicológico',
      icon: Brain,
      color: 'from-indigo-500 to-blue-500',
      solidColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      glowColor: 'shadow-indigo-500/50',
      stats: [
        { label: 'Bem-estar Mental', value: '94%', trend: '+6%', icon: Brain },
        { label: 'Qualidade do Sono', value: '8.7/10', trend: 'Melhorando', icon: Sparkles },
        { label: 'Nível de Estresse', value: 'Baixo', trend: 'Controlado', icon: Shield }
      ],
      metrics: [
        { name: 'Foco & Concentração', value: 87, status: 'Excelente' },
        { name: 'Estabilidade Emocional', value: 93, status: 'Ótimo' },
        { name: 'Sono REM', value: 79, status: 'Bom' }
      ],
      insights: [
        'Padrão de sono consolidado com 7.8h de sono profundo',
        'HRV (variabilidade cardíaca) indica baixo estresse crônico',
        'Protocolo de meditação matinal mostrando resultados positivos'
      ]
    },
    nutrition: {
      title: 'Nutrição Personalizada',
      icon: Utensils,
      color: 'from-orange-500 to-amber-500',
      solidColor: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      glowColor: 'shadow-orange-500/50',
      stats: [
        { label: 'Alimentos Otimizados', value: '156', trend: 'Personalizados', icon: Utensils },
        { label: 'Deficiências Corrigidas', value: '7/9', trend: '+2 mês', icon: TrendingUp },
        { label: 'Score Nutricional', value: '92/100', trend: 'Excelente', icon: Sparkles }
      ],
      metrics: [
        { name: 'Macro Balance', value: 91, status: 'Ótimo' },
        { name: 'Micronutrientes', value: 86, status: 'Excelente' },
        { name: 'Timing Nutricional', value: 88, status: 'Excelente' }
      ],
      insights: [
        'Janela de carboidratos otimizada pós-treino para recuperação',
        'Perfil de ácidos graxos ômega-3/6 balanceado idealmente',
        'Suplementação de magnésio melhorou qualidade do sono em 34%'
      ]
    }
  };

  const tabKeys = Object.keys(dashboards) as Array<keyof typeof dashboards>;
  const currentDashboard = dashboards[activeTab as keyof typeof dashboards];

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Dashboards em Tempo Real
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Seus </span>
            <span className={`bg-gradient-to-r ${currentDashboard.color} bg-clip-text text-transparent`}>
              resultados
            </span>
            <span className="text-white"> em tempo real</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Dashboards interativos que mostram seu progresso em cada área da sua longevidade
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabKeys.map((key, index) => {
            const dashboard = dashboards[key];
            const IconComponent = dashboard.icon;
            const isActive = activeTab === key;
            
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  group relative flex items-center space-x-2 px-6 py-3.5 rounded-xl transition-all duration-300
                  ${isActive 
                    ? `${dashboard.bgColor} border ${dashboard.borderColor} shadow-lg ${dashboard.glowColor}` 
                    : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }
                `}
                style={{
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${dashboard.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
                
                <IconComponent className={`w-5 h-5 relative z-10 ${isActive ? dashboard.solidColor : 'text-slate-400 group-hover:text-slate-300'}`} />
                <span className={`font-semibold relative z-10 ${isActive ? dashboard.solidColor : 'text-slate-400 group-hover:text-slate-200'}`}>
                  {dashboard.title}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r ${dashboard.color}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Dashboard Content */}
        <div className="relative">
          {/* Glow Background */}
          <div className={`absolute -inset-4 bg-gradient-to-r ${currentDashboard.color} opacity-5 blur-3xl rounded-3xl`} />
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Dashboard Visual */}
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      {React.createElement(currentDashboard.icon, {
                        className: `w-7 h-7 ${currentDashboard.solidColor}`
                      })}
                      {currentDashboard.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-full ${currentDashboard.bgColor} ${currentDashboard.borderColor} border flex items-center gap-2`}>
                      <div className={`w-2 h-2 rounded-full ${currentDashboard.solidColor.replace('text-', 'bg-')} animate-pulse`} />
                      <span className={`text-xs font-semibold ${currentDashboard.solidColor}`}>Ao vivo</span>
                    </div>
                  </div>

                  {/* Enhanced Chart Area */}
                  <div className="relative h-56 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl mb-6 flex items-center justify-center border border-slate-700/30 overflow-hidden">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`absolute w-32 h-32 border-2 rounded-full opacity-20`}
                          style={{
                            borderColor: currentDashboard.solidColor.replace('text-', ''),
                            transform: `scale(${1 + i * 0.5})`,
                            animation: `pulse ${2 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Center Icon */}
                    <div className={`relative z-10 w-24 h-24 rounded-full bg-gradient-to-br ${currentDashboard.color} flex items-center justify-center shadow-2xl`}>
                      {React.createElement(currentDashboard.icon, {
                        className: 'w-12 h-12 text-white',
                        strokeWidth: 2
                      })}
                    </div>

                    {/* Floating Data Points */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${currentDashboard.solidColor.replace('text-', 'bg-')}`}
                        style={{
                          left: `${20 + Math.cos(i * Math.PI / 4) * 35}%`,
                          top: `${50 + Math.sin(i * Math.PI / 4) * 35}%`,
                          animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.6
                        }}
                      />
                    ))}
                  </div>

                  {/* Progress Metrics */}
                  <div className="space-y-4">
                    {currentDashboard.metrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-300 font-medium">{metric.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold">{metric.value}%</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${currentDashboard.bgColor} ${currentDashboard.solidColor}`}>
                              {metric.status}
                            </span>
                          </div>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${currentDashboard.color} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ width: `${animatedValues[index] || 0}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-slate-400">Tendência</span>
                    </div>
                    <p className="text-2xl font-bold text-green-400">↑ 23%</p>
                  </div>
                  <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-slate-400">Score Geral</span>
                    </div>
                    <p className="text-2xl font-bold text-yellow-400">8.9/10</p>
                  </div>
                </div>
              </div>

              {/* Stats & Insights */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Sparkles className={`w-6 h-6 ${currentDashboard.solidColor}`} />
                    Insights Principais
                  </h4>
                  <div className="space-y-4">
                    {currentDashboard.stats.map((stat, index) => {
                      const StatIcon = stat.icon;
                      return (
                        <div key={index} className="group relative bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/50 transition-all backdrop-blur-sm">
                          {/* Hover glow */}
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentDashboard.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                          
                          <div className="relative flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <StatIcon className={`w-4 h-4 ${currentDashboard.solidColor}`} />
                                <span className="text-slate-400 text-sm">{stat.label}</span>
                              </div>
                              <p className={`text-3xl font-bold bg-gradient-to-r ${currentDashboard.color} bg-clip-text text-transparent`}>
                                {stat.value}
                              </p>
                              <span className="text-xs text-slate-500 mt-1 inline-block">{stat.trend}</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border ${currentDashboard.borderColor} backdrop-blur-sm overflow-hidden`}>
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentDashboard.color} opacity-5`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${currentDashboard.color}`}>
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h5 className="font-bold text-white text-lg">Recomendações da GEN</h5>
                    </div>
                    <ul className="space-y-3">
                      {currentDashboard.insights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                          <div className={`w-1.5 h-1.5 rounded-full ${currentDashboard.solidColor.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full group relative bg-gradient-to-r ${currentDashboard.color} text-white font-semibold py-4 px-6 rounded-xl overflow-hidden transition-all hover:shadow-2xl ${currentDashboard.glowColor}`}>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <span className="relative flex items-center justify-center gap-2">
                    Ver Dashboard Completo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'Dados Protegidos', desc: 'Criptografia de nível médico' },
            { icon: Sparkles, title: 'IA Avançada', desc: 'Atualização em tempo real' },
            { icon: TrendingUp, title: 'Resultados Reais', desc: 'Baseado em evidências' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="p-3 bg-slate-700/50 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{item.title}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default DashboardSection;