import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Mail, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadCaptureSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Acesso liberado! 🎉",
      description: "Você receberá suas instruções no WhatsApp e email em alguns instantes.",
    });
    
    setEmail('');
    setName('');
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de ativar minha GEN gratuitamente. Meu nome é ${name || '[Nome]'} e meu email é ${email || '[Email]'}.`
    );
    window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-genetic opacity-5 rounded-3xl" />
        
        <div className="card-genetic rounded-3xl p-12 relative z-10 text-center">
          {/* Header */}
          <div className="mb-12 fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-button rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Receba seu{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                acesso exclusivo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Liberamos seu protocolo personalizado pelo WhatsApp e email. 
              <br />
              <span className="font-semibold text-genetic-green">100% gratuito para começar.</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 text-center bg-card/50 border-genetic-blue/20 focus:border-genetic-green/40"
              />
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-center bg-card/50 border-genetic-blue/20 focus:border-genetic-green/40"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                type="submit"
                variant="genetic"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                <Mail className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Liberando...' : 'Liberar por Email'}
              </Button>
              
              <Button
                type="button"
                variant="hero"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direto
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              {
                icon: '⚡',
                title: 'Acesso Imediato',
                description: 'Receba em até 5 minutos'
              },
              {
                icon: '🔒',
                title: '100% Seguro',
                description: 'Seus dados protegidos'
              },
              {
                icon: '🎯',
                title: 'Totalmente Grátis',
                description: 'Sem pegadinhas ou taxas'
              }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground text-center">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-muted-foreground mt-8 fade-in-up" style={{ animationDelay: '0.6s' }}>
            Seus dados são protegidos pela nossa{' '}
            <a href="#" className="text-genetic-blue hover:underline">Política de Privacidade</a>. 
            Nunca fazemos spam ou compartilhamos suas informações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;