import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap } from 'lucide-react';

const PlansSection: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      period: 'Para sempre',
      description: 'Comece sua jornada de longevidade',
      features: [
        'Análise básica de perfil',
        'Relatório inicial de saúde',
        'Recomendações semanais',
        'Acesso à comunidade',
        'Suporte via chat'
      ],
      icon: Star,
      highlighted: true,
      cta: 'Quero começar agora',
      popular: true
    },
    {
      name: 'Pro',
      price: '97',
      period: '/mês',
      description: 'Para quem leva longevidade a sério',
      features: [
        'Tudo do Free +',
        'Análise genética completa',
        'Monitoramento de biomarcadores',
        'Recomendações diárias personalizadas',
        'Dashboard avançado',
        'Suporte prioritário'
      ],
      icon: Zap,
      highlighted: false,
      cta: 'Quero começar agora'
    },
    {
      name: 'Premium',
      price: '197',
      period: '/mês',
      description: 'Protocolo completo de longevidade',
      features: [
        'Tudo do Pro +',
        'Análise de microbioma',
        'Protocolo hormonal personalizado',
        'Consultas mensais com especialistas',
        'Acesso a pesquisas exclusivas',
        'Suporte 24/7'
      ],
      icon: Crown,
      highlighted: false,
      cta: 'Quero começar agora'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Escolha seu{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              protocolo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece gratuitamente e evolua conforme sua jornada de longevidade
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`
                  card-genetic rounded-2xl p-8 relative
                  ${plan.highlighted ? 'ring-2 ring-genetic-green/50 scale-105 z-10' : ''}
                  fade-in-up
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-button text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`
                    inline-flex p-3 rounded-full mb-4
                    ${plan.highlighted ? 'bg-genetic-green/20 border border-genetic-green/30' : 'bg-card border border-border'}
                  `}>
                    <IconComponent className={`w-6 h-6 ${plan.highlighted ? 'text-genetic-green' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`
                        w-5 h-5 flex-shrink-0
                        ${plan.highlighted ? 'text-genetic-green' : 'text-genetic-blue'}
                      `} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.highlighted ? "genetic" : "plan"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            Todos os planos incluem cancelamento gratuito a qualquer momento
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;