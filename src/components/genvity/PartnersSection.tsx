import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'Harvard Medical', category: 'Pesquisa' },
    { name: 'Stanford Genetics', category: 'Genética' },
    { name: 'Mayo Clinic', category: 'Medicina' },
    { name: 'MIT AI Lab', category: 'Tecnologia' },
    { name: 'Genomics Institute', category: 'Genômica' },
    { name: 'Longevity Research', category: 'Pesquisa' }
  ];

  const investors = [
    { name: 'Andreessen Horowitz', type: 'VC' },
    { name: 'Founders Fund', type: 'VC' },
    { name: 'Google Ventures', type: 'Corporate VC' },
    { name: 'Khosla Ventures', type: 'VC' }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Research Partners */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Parceiros de{' '}
            <span className="bg-gradient-genetic bg-clip-text text-transparent">
              Pesquisa
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Colaboramos com as principais instituições mundiais em genética e longevidade
          </p>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-genetic rounded-xl p-6 h-24 flex flex-col items-center justify-center space-y-2 group-hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-genetic rounded-full" />
                  <div className="text-center">
                    <div className="text-xs font-medium text-foreground">{partner.name}</div>
                    <div className="text-xs text-muted-foreground">{partner.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investors */}
        <div className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Apoiado por investidores de{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              classe mundial
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Confiança dos maiores fundos de venture capital do Vale do Silício
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="group fade-in-up"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="card-genetic rounded-xl p-4 h-16 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-sm font-medium text-foreground">{investor.name}</div>
                    <div className="text-xs text-muted-foreground">{investor.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-genetic-green rounded-full" />
              <span className="text-sm text-muted-foreground">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-genetic-blue rounded-full" />
              <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-genetic-purple rounded-full" />
              <span className="text-sm text-muted-foreground">FDA Regulated</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-accent rounded-full" />
              <span className="text-sm text-muted-foreground">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;