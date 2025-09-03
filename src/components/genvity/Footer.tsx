import React from 'react';
import { Dna, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    produto: [
      { name: 'Como Funciona', href: '#' },
      { name: 'Planos', href: '#' },
      { name: 'Casos de Sucesso', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    empresa: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Carreiras', href: '#' },
      { name: 'Imprensa', href: '#' },
      { name: 'Parceiros', href: '#' }
    ],
    suporte: [
      { name: 'Central de Ajuda', href: '#' },
      { name: 'Contato', href: '#' },
      { name: 'Status da Plataforma', href: '#' },
      { name: 'Comunidade', href: '#' }
    ],
    legal: [
      { name: 'Termos de Uso', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'LGPD', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-genetic-purple' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-genetic-blue' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-genetic-blue' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-genetic-green' }
  ];

  return (
    <footer className="py-20 px-4 border-t border-border/30 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Dna className="w-8 h-8 text-genetic-blue" />
                <div className="absolute inset-0 w-8 h-8 bg-genetic-blue/20 rounded-full animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-genetic-blue to-genetic-green bg-clip-text text-transparent">
                GenVity AI
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O protocolo definitivo para longevidade, guiado pela sua genética, biologia e rotina. 
              Transforme sua saúde com inteligência artificial.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 rounded-full bg-card border border-border ${social.color} transition-all hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold text-foreground mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-genetic-blue transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Trust */}
        <div className="border-t border-border/30 pt-8 mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-genetic-green rounded-full" />
              <span className="text-xs text-muted-foreground">Certificado ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-genetic-blue rounded-full" />
              <span className="text-xs text-muted-foreground">Compliance HIPAA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-genetic-purple rounded-full" />
              <span className="text-xs text-muted-foreground">Regulamentado FDA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-accent rounded-full" />
              <span className="text-xs text-muted-foreground">LGPD Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 GenVity AI. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>🇧🇷 Feito no Brasil</span>
              <span>•</span>
              <span>🧬 Powered by AI</span>
              <span>•</span>
              <span>⚡ Impulsionado pela ciência</span>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-genetic opacity-5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;