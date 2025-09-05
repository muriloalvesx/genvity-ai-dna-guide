import React from 'react';
import { AlertTriangle, Target, TrendingUp } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Problem */}
          <div className="text-center fade-in-up">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-full bg-destructive/10 border border-destructive/20 mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">O Problema</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Protocolos genéricos não funcionam. Médicos, academias e apps oferecem soluções iguais para todos, ignorando sua genética, hormônios e rotina únicos.
            </p>
          </div>

          {/* Solution */}
          <div className="text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-full bg-genetic-blue/10 border border-genetic-blue/20 mb-4 glow-on-hover">
                <Target className="w-8 h-8 text-genetic-blue" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">A Solução</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A primeira IA ativa de longevidade que guia você todos os dias. Personalização profunda através de genética, exames e rotina, com protocolos 360° e acompanhamento ativo.
            </p>
          </div>

          {/* Transformation */}
          <div className="text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-full bg-genetic-green/10 border border-genetic-green/20 mb-4">
                <TrendingUp className="w-8 h-8 text-genetic-green" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">A Transformação</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Com a Genvity AI, saúde deixa de ser tentativa e erro. É ciência + tecnologia transformada em ação prática diária.
            </p>
          </div>

        </div>

        {/* Connecting Lines (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <div className="relative">
            <div className="absolute top-0 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-destructive/30 to-genetic-blue/30" />
            <div className="absolute top-0 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-genetic-blue/30 to-genetic-green/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;