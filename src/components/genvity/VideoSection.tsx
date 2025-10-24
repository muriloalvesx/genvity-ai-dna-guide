import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize, Sparkles, Zap, TrendingUp, Shield, Users, Clock, Award, Eye } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentView, setCurrentView] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Simulate video progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 900); // 90 seconds total
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Auto-rotate preview cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const videoFeatures = [
    {
      icon: '🧬',
      title: 'Análise Genética',
      description: 'Como lemos e interpretamos seus 847.231 marcadores',
      color: 'from-blue-500 to-cyan-500',
      highlight: 'DNA completo'
    },
    {
      icon: '📊',
      title: 'Dashboards em Tempo Real',
      description: 'Interface intuitiva mostrando 42 métricas vitais',
      color: 'from-purple-500 to-pink-500',
      highlight: 'Tempo real'
    },
    {
      icon: '🎯',
      title: 'Protocolos Personalizados',
      description: 'Recomendações diárias baseadas em IA avançada',
      color: 'from-green-500 to-emerald-500',
      highlight: '100% personalizado'
    },
    {
      icon: '🧠',
      title: 'IA que Aprende',
      description: 'GEN evolui com você, ajustando estratégias',
      color: 'from-orange-500 to-red-500',
      highlight: 'Evolução contínua'
    }
  ];

  const viewerStats = [
    { icon: Users, value: '12.4k', label: 'Visualizações', trend: '+2.3k hoje' },
    { icon: Award, value: '4.9/5', label: 'Avaliação', trend: '3.2k reviews' },
    { icon: Clock, value: '1:30', label: 'Duração', trend: 'Direto ao ponto' }
  ];

  const previewScenes = [
    {
      title: 'Dashboard Genético',
      description: 'Visualize seus dados de DNA de forma intuitiva',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      icon: '🧬'
    },
    {
      title: 'Recomendações IA',
      description: 'Protocolos personalizados para seu dia',
      gradient: 'from-purple-500/20 to-pink-500/20',
      icon: '🤖'
    },
    {
      title: 'Resultados Reais',
      description: 'Métricas de transformação mensuráveis',
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: '📈'
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Play Icons */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 30}px`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            ▶
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Demonstração Ao Vivo
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Veja a </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              GEN
            </span>
            <span className="text-white"> em ação</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            90 segundos para entender como funciona o protocolo de longevidade mais avançado do mundo
          </p>
        </div>

        {/* Main Video Container */}
        <div className="relative mb-12">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-20 blur-3xl rounded-3xl" />
          
          <div 
            className="relative bg-slate-900/90 backdrop-blur-xl border-2 border-slate-700 rounded-3xl overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Video Player */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
              {/* Preview Scenes Carousel */}
              <div className="absolute inset-0 flex items-center justify-center">
                {!isPlaying ? (
                  <div className="relative w-full h-full">
                    {/* Background Preview */}
                    {previewScenes.map((scene, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          currentView === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${scene.gradient}`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="text-8xl mb-4 animate-pulse">{scene.icon}</div>
                            <h3 className="text-3xl font-bold text-white">{scene.title}</h3>
                            <p className="text-slate-300 text-lg">{scene.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
                      <div className="text-center space-y-6">
                        {/* Play Button */}
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="relative group/btn"
                        >
                          {/* Pulse Rings */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className="absolute w-24 h-24 border-2 border-purple-500 rounded-full opacity-20 animate-ping"
                                style={{
                                  animationDuration: `${2 + i}s`,
                                  animationDelay: `${i * 0.3}s`
                                }}
                              />
                            ))}
                          </div>

                          {/* Main Button */}
                          <div className="relative w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover/btn:scale-110 transition-transform duration-300">
                            <div className="absolute inset-1 bg-slate-900 rounded-full flex items-center justify-center">
                              <Play className="w-10 h-10 text-white ml-1" strokeWidth={2.5} />
                            </div>
                          </div>
                        </button>
                        
                        {/* Video Info */}
                        <div className="space-y-3">
                          <h3 className="text-3xl font-bold text-white">
                            Como a GEN transforma sua longevidade
                          </h3>
                          <p className="text-slate-300 text-lg max-w-xl mx-auto">
                            Demonstração completa do protocolo personalizado com casos reais
                          </p>
                          
                          {/* Tags */}
                          <div className="flex items-center justify-center gap-4 text-sm">
                            <span className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                              <Clock className="w-4 h-4 text-purple-400" />
                              <span className="text-slate-300">1:30 min</span>
                            </span>
                            <span className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                              <Shield className="w-4 h-4 text-green-400" />
                              <span className="text-slate-300">Sem propaganda</span>
                            </span>
                            <span className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                              <TrendingUp className="w-4 h-4 text-cyan-400" />
                              <span className="text-slate-300">Casos reais</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse flex items-center justify-center">
                        <Sparkles className="w-16 h-16 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-white">Vídeo em reprodução...</p>
                      <p className="text-slate-300">{progress}% concluído</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Controls Overlay */}
              {isPlaying && (
                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-700 rounded-full mb-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Pause className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                        <Volume2 className="w-5 h-5 text-white" />
                      </button>
                      <span className="text-sm text-slate-300">
                        {Math.floor(progress * 0.9)}s / 90s
                      </span>
                    </div>
                    <button className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              )}

              {/* Live Indicator */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-red-500/20 border border-red-500/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-red-400">DEMO</span>
                </div>
              </div>

              {/* Viewer Count */}
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-slate-900/80 border border-slate-700 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Eye className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-semibold text-slate-300">12.4k assistindo</span>
              </div>
            </div>

            {/* Video Stats Bar */}
            <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 p-4">
              <div className="flex items-center justify-around">
                {viewerStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <IconComponent className="w-4 h-4 text-purple-400" />
                        <span className="text-xl font-bold text-white">{stat.value}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-0.5">{stat.label}</p>
                      <p className="text-xs text-slate-500">{stat.trend}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scene Indicators */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {previewScenes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentView(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentView ? 'w-8 bg-gradient-to-r from-purple-500 to-cyan-500' : 'w-1.5 bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videoFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              
              <div className="relative">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-white mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{feature.description}</p>
                
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} bg-opacity-10 px-3 py-1 rounded-full border border-opacity-30`}>
                  <Zap className="w-3 h-3" style={{ color: feature.color.split(' ')[0].replace('from-', '') }} />
                  <span className={`text-xs font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-cyan-900/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 animate-pulse" />
          
          <div className="relative text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para sua transformação?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão vivendo com mais energia, foco e longevidade
            </p>
            <button className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform rounded-xl" />
              <span className="relative flex items-center gap-2">
                Começar Minha Jornada
                <Sparkles className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;