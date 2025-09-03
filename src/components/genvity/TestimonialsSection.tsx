import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Marina Santos',
      role: 'Médica Preventiva',
      avatar: '👩‍⚕️',
      rating: 5,
      text: 'A GEN revolucionou como acompanho meus pacientes. Os insights genéticos personalizados são incomparáveis.',
      highlight: 'Revolucionou'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Executivo, 45 anos',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Em 6 meses, minha idade biológica diminuiu 4 anos. O protocolo personalizado da GEN é surreal.',
      highlight: '4 anos mais jovem'
    },
    {
      name: 'Ana Patricia',
      role: 'Biohacker',
      avatar: '🧬',
      rating: 5,
      text: 'Testei dezenas de plataformas. A GEN é a única que realmente entende minha genética e corpo.',
      highlight: 'Realmente entende'
    },
    {
      name: 'Prof. João Ribeiro',
      role: 'Pesquisador em Longevidade',
      avatar: '👨‍🔬',
      rating: 5,
      text: 'A base científica por trás da GEN é sólida. É o futuro da medicina personalizada.',
      highlight: 'Futuro da medicina'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que dizem sobre a{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              GEN
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e longevidade
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-genetic rounded-2xl p-8 relative fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-genetic-blue" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-genetic-green text-genetic-green" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-genetic rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="absolute bottom-4 right-6">
                <div className="bg-genetic-blue/10 border border-genetic-blue/30 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-genetic-blue">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-genetic-blue mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-genetic-green mb-2">50k+</div>
            <div className="text-muted-foreground">Vidas Transformadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-genetic-purple mb-2">-3.2</div>
            <div className="text-muted-foreground">Anos de Idade Biológica (média)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;