import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dna, Activity, Brain } from 'lucide-react';
import DNABackground from './DNABackground';
import heroImage from '@/assets/genvity-hero-bg.jpg';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="hero-container min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgba(13, 13, 34, 0.85), rgba(13, 13, 34, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DNABackground density={12} />
      
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8 fade-in-up">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Dna className="w-12 h-12 text-genetic-blue animate-pulse" />
              <div className="absolute inset-0 w-12 h-12 bg-genetic-blue/20 rounded-full animate-ping" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-genetic-blue via-genetic-green to-genetic-purple bg-clip-text text-transparent">
              GenVity AI
            </h1>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl mx-auto mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            A primeira{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              IA ativa de longevidade
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            que guia você todos os dias, de forma única e personalizada
          </p>
        </div>

        {/* CTA Section */}
        <div className="mb-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="hero" 
            size="xl" 
            className="group mb-6"
          >
            <Activity className="w-6 h-6 mr-2" />
            Ative sua GEN gratuitamente
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Comece agora • 100% gratuito • Sem cartão de crédito
          </p>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center space-y-3 group">
            <div className="p-4 rounded-full bg-genetic-blue/10 border border-genetic-blue/20 group-hover:bg-genetic-blue/20 transition-all">
              <Dna className="w-8 h-8 text-genetic-blue" />
            </div>
            <p className="text-sm text-muted-foreground">Análise Genética</p>
          </div>
          <div className="flex flex-col items-center space-y-3 group">
            <div className="p-4 rounded-full bg-genetic-green/10 border border-genetic-green/20 group-hover:bg-genetic-green/20 transition-all">
              <Activity className="w-8 h-8 text-genetic-green" />
            </div>
            <p className="text-sm text-muted-foreground">Monitoramento Físico</p>
          </div>
          <div className="flex flex-col items-center space-y-3 group">
            <div className="p-4 rounded-full bg-genetic-purple/10 border border-genetic-purple/20 group-hover:bg-genetic-purple/20 transition-all">
              <Brain className="w-8 h-8 text-genetic-purple" />
            </div>
            <p className="text-sm text-muted-foreground">IA Personalizada</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;