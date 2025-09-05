import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-genetic opacity-5" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center fade-in-up">
          <div className="inline-flex p-4 rounded-full bg-genetic-green/20 border border-genetic-green/30 mb-8 glow-on-hover">
            <Zap className="w-12 h-12 text-genetic-green" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Sua vida não pode{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              esperar
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            O mundo já entendeu: menos excessos, mais saúde, mais performance, mais longevidade.
          </p>
          
          <p className="text-2xl font-semibold text-foreground mb-8">
            Agora é a sua vez.
          </p>
          
          <div className="mb-8">
            <p className="text-lg text-genetic-green font-medium mb-6">
              👉 A GEN está pronta para você hoje.
            </p>
          </div>
          
          <Button 
            variant="genetic" 
            size="xl" 
            className="text-lg px-12 py-6 hover:scale-105 transition-all duration-300"
          >
            🔑 Ative sua GEN agora mesmo
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Comece gratuitamente • Sem compromisso • Resultados imediatos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;