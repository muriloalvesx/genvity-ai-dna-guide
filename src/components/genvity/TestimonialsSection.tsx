import React, { useState, useEffect, useCallback } from 'react';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Heart, 
  Zap, 
  Shield, 
  CheckCircle, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight,
  ChevronLeft, // Ícone adicionado
  ChevronRight // Ícone adicionado
} from 'lucide-react';

// Imports do Embla Carousel
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);
  
  // O scrollProgress não é mais necessário para os cards individuais
  // const [scrollProgress, setScrollProgress] = useState(0); 
  
  const [currentSlide, setCurrentSlide] = useState(0);

  // Removido o useEffect do scrollProgress, pois agora é um carrossel

  // Auto-rotate featured testimonial (Isto está correto e permanece)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- LÓGICA DO NOVO CARROSSEL ---
  // Inicializa o plugin de autoplay
    const autoplay = React.useRef(
    Autoplay(
      { delay: 4000, stopOnInteraction: true } // Apenas 1 argumento
    )
  );

  // Configura o carrossel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,       // Loop infinito
      align: 'start',
    },
    [autoplay.current]
  );

  // Funções para os botões de navegação
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  // --- FIM DA LÓGICA DO CARROSSEL ---


  const testimonials = [
    // ... (seus dados de 'testimonials' permanecem os mesmos, sem alteração) ...
    {
      name: 'Carla Mendes',
      role: '42 anos',
      location: 'São Paulo, SP',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Eu já tinha tentado de tudo. A GEN foi a primeira que realmente ficou comigo no dia a dia. Hoje tenho mais energia e foco do que tinha aos 30 anos.',
      highlight: 'Mais energia',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      metrics: { before: '6.2', after: '8.9', label: 'Energia' }
    },
    {
      name: 'Roberto Oliveira',
      role: '51 anos',
      location: 'Rio de Janeiro, RJ',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Meu plano Better Life me deu clareza sobre minha saúde e um guia ativo diário. Nunca estive tão disciplinado e os resultados são visíveis.',
      highlight: 'Mais disciplina',
      icon: CheckCircle,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      metrics: { before: '127', after: '365', label: 'Dias consecutivos' }
    },
    {
      name: 'Fernanda Costa',
      role: '38 anos',
      location: 'Belo Horizonte, MG',
      avatar: '👩‍⚕️',
      rating: 5,
      text: 'Com o plano Immortal descobri meu perfil genético e transformei em rotina prática. É saúde em tempo real, não teoria distante.',
      highlight: 'Saúde real',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      metrics: { before: '39.2', after: '35.8', label: 'Idade biológica' }
    },
    {
      name: 'Dr. Silva',
      role: 'Médico Preventivo',
      location: 'Curitiba, PR',
      avatar: '👨‍⚕️',
      rating: 5,
      text: 'A GEN revolucionou como acompanho meus pacientes. Os insights personalizados são incomparáveis e os dados são confiáveis.',
      highlight: 'Revolucionou',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      metrics: { before: '23', after: '47', label: 'Recomendações ativas' }
    },
    {
      name: 'Marina Santos',
      role: '29 anos',
      location: 'Porto Alegre, RS',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'Como atleta, precisava de algo além do treino padrão. A GEN analisa meu DNA e ajusta tudo: nutrição, recuperação, suplementação.',
      highlight: 'Performance máxima',
      icon: Award,
      gradient: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      metrics: { before: '8.2', after: '9.7', label: 'Score físico' }
    },
    {
      name: 'Lucas Ferreira',
      role: '45 anos',
      location: 'Brasília, DF',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Trabalho 12h por dia e achei que não conseguiria manter uma rotina saudável. A GEN se adapta ao meu caos e ainda assim consigo progredir.',
      highlight: 'Adaptável',
      icon: Sparkles,
      gradient: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/30',
      metrics: { before: '5.1', after: '8.4', label: 'Bem-estar' }
    }
  ];

  const featuredTestimonials = [
    // ... (seus dados de 'featuredTestimonials' permanecem os mesmos) ...
    {
      quote: "A GEN não é só um app, é um companheiro de jornada. Cada dia ela aprende mais sobre mim e me surpreende com insights que fazem diferença real.",
      author: "Carla Mendes",
      role: "Executiva, 42 anos",
      transformation: "Reduziu 3.4 anos de idade biológica em 6 meses"
    },
    {
      quote: "Descobri predisposições genéticas que expliquei problemas que tive a vida toda. Agora sei exatamente o que fazer para otimizar minha saúde.",
      author: "Roberto Oliveira",
      role: "Empresário, 51 anos",
      transformation: "127 dias consecutivos de acompanhamento ativo"
    },
    {
      quote: "Como médica, sou cética por natureza. Mas os protocolos da GEN são baseados em ciência sólida e os resultados falam por si.",
      author: "Dra. Fernanda Costa",
      role: "Médica, 38 anos",
      transformation: "18/23 biomarcadores otimizados"
    }
  ];

  const stats = [
    // ... (seus dados de 'stats' permanecem os mesmos) ...
    { 
      value: '98%', 
      label: 'Taxa de Satisfação',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
      description: 'Usuários recomendam'
    },
    { 
      value: '85k+', 
      label: 'Vidas Transformadas',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'E crescendo rápido'
    },
    { 
      value: '-3.2', 
      label: 'Anos de Idade Biológica',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Redução média'
    },
    { 
      value: '4.9', 
      label: 'Avaliação Média',
      icon: Star,
      gradient: 'from-yellow-500 to-orange-500',
      description: 'De 10.000+ reviews'
    }
  ];

  // Helper para corrigir o bug do ícone transparente
  const getIconColorClass = (gradient: string) => {
    const fromColor = gradient.split(' ')[0].replace('from-', 'text-');
    // Ex: "from-yellow-500" -> "text-yellow-500"
    return fromColor;
  };


  return (
    <section id="testimonials-section" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* ... (Toda a sua seção de Background Animado permanece a mesma) ... */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating hearts and stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${i % 2 === 0 ? 'text-pink-400/10' : 'text-yellow-400/10'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 20}px`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {i % 2 === 0 ? '❤️' : '⭐'}
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>


      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ... (Seu Section Header permanece o mesmo) ... */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-pink-400 bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Histórias Reais
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">O que dizem sobre a </span>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              GEN
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Histórias reais de transformação e longevidade de quem já está vivendo o futuro da saúde
          </p>
        </div>


        {/* ... (Seu Featured Testimonial Carousel permanece o mesmo) ... */}
        <div className="mb-20 relative">
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-3xl p-12 overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-2xl animate-pulse" />
            
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 text-slate-700">
                <Quote className="w-24 h-24" fill="currentColor" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10 max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8 text-center">
                  "{featuredTestimonials[currentSlide].quote}"
                </blockquote>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{featuredTestimonials[currentSlide].author}</p>
                    <p className="text-slate-400">{featuredTestimonials[currentSlide].role}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-2">
                    <p className="text-sm font-semibold text-green-400 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {featuredTestimonials[currentSlide].transformation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {featuredTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide ? 'w-8 bg-gradient-to-r from-pink-500 to-purple-500' : 'w-2 bg-slate-600'
                    }`}
                  _/>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ======================================= */}
        {/* =           NOVO CARROSSEL            = */}
        {/* ======================================= */}
        <div className="relative mb-20">
          
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
              
              {testimonials.map((testimonial, index) => {
                const IconComponent = testimonial.icon;
                const isHovered = activeTestimonial === index;
                
                return (
                  // Cada slide
                  <div 
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-6" // 1 slide no mobile, 2 no tablet, 3 no desktop
                    key={index}
                  >
                    <div
                      className="group relative h-full" // Adicionado h-full
                      onMouseEnter={() => setActiveTestimonial(index)}
                      onMouseLeave={() => setActiveTestimonial(null)}
                      // A animação de 'progress' foi removida daqui
                    >
                      {/* Glow effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Main Card */}
                      <div className={`relative bg-slate-900/90 backdrop-blur-xl border-2 ${testimonial.borderColor} rounded-2xl p-6 transition-all duration-300 h-full flex flex-col ${ // Adicionado h-full e flex flex-col
                        isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
                      }`}>
                        
                        {/* ... (Todo o conteúdo do card permanece o mesmo) ... */}
                        
                        <div className="absolute top-4 right-4 opacity-5">
                          <Quote className="w-16 h-16 text-white" fill="currentColor" />
                        </div>

                        <div className="flex items-start justify-between mb-4 relative z-10">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                              {testimonial.avatar}
                            </div>
                            <div>
                              <p className="font-bold text-white">{testimonial.name}</p>
                              <p className="text-xs text-slate-400">{testimonial.role} • {testimonial.location}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <blockquote className="text-slate-300 leading-relaxed mb-6 relative z-10 text-sm flex-grow"> {/* Adicionado flex-grow */}
                          "{testimonial.text}"
                        </blockquote>

                        {/* Metrics */}
                        <div className={`${testimonial.bgColor} ${testimonial.borderColor} border rounded-xl p-3 mb-4`}>
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-xs text-slate-400 mb-1">{testimonial.metrics.label}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-500 line-through text-sm">{testimonial.metrics.before}</span>
                                <ArrowRight className="w-4 h-4 text-slate-500" />
                                <span className={`text-xl font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                                  {testimonial.metrics.after}
                                </span>
                              </div>
                            </div>
                            
                            {/* ÍCONE CORRIGIDO: Removido bg-clip-text e text-transparent */}
                            <IconComponent 
                              className={`w-8 h-8 ${getIconColorClass(testimonial.gradient)}`} 
                              strokeWidth={2} 
                            />

                          </div>
                        </div>

                        <div className={`inline-flex items-center gap-2 ${testimonial.bgColor} ${testimonial.borderColor} border rounded-full px-3 py-1.5`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${testimonial.gradient}`} />
                          <span className={`text-xs font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                            {testimonial.highlight}
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ======================================= */}
        {/* =         FIM DO NOVO CARROSSEL       = */}
        {/* ======================================= */}


        {/* ... (Sua Stats Section permanece a mesma) ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} bg-opacity-10 mb-4`}>
                    
                    {/* ÍCONE CORRIGIDO: Removido bg-clip-text e text-transparent */}
                    <IconComponent 
                      className={`w-6 h-6 ${getIconColorClass(stat.gradient)}`} 
                      strokeWidth={2} 
                    />

                  </div>
                  <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </p>
                  <p className="font-semibold text-white mb-1">{stat.label}</p>
                  <p className="text-sm text-slate-400">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ... (Seus Trust Indicators permanecem os mesmos) ... */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Dados Verificados', desc: 'Todos os depoimentos são de usuários reais' },
              { icon: Award, title: 'Resultados Reais', desc: 'Métricas baseadas em dados biométricos' },
              { icon: Heart, title: 'Satisfação Garantida', desc: '30 dias para avaliar os resultados' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <item.icon className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ... (Seu <style> de keyframes permanece o mesmo) ... */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;