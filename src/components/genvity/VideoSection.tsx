import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Veja a{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              GEN
            </span>{' '}
            em ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            60 segundos para entender como funciona o protocolo de longevidade mais avançado do mundo
          </p>
        </div>

        {/* Video Container */}
        <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="card-genetic rounded-2xl overflow-hidden relative aspect-video group">
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center space-y-6">
                {/* Play Button */}
                <Button
                  variant="hero"
                  size="xl"
                  className="w-20 h-20 rounded-full group-hover:scale-110 transition-all duration-300"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </Button>
                
                {/* Video Info */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Como a GEN transforma sua longevidade
                  </h3>
                  <p className="text-muted-foreground">
                    Demonstração completa do protocolo personalizado
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <span>⏱️ 1:30 min</span>
                    <span>•</span>
                    <span>🎯 Sem propaganda</span>
                    <span>•</span>
                    <span>📊 Casos reais</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-genetic-green rounded-full animate-pulse" />
            <div className="absolute top-4 right-4 w-2 h-2 bg-genetic-blue rounded-full animate-pulse delay-500" />
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-genetic-purple rounded-full animate-pulse delay-1000" />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Video Benefits Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: '🧬',
                title: 'Análise Genética',
                description: 'Como lemos e interpretamos seu DNA'
              },
              {
                icon: '📊',
                title: 'Dashboards',
                description: 'Interface intuitiva para acompanhar progresso'
              },
              {
                icon: '🎯',
                title: 'Recomendações',
                description: 'Protocolos diários personalizados'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 card-genetic rounded-xl fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;