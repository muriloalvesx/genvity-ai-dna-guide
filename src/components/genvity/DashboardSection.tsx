import React, { useState } from 'react';
import { Activity, Brain, Dna, Droplet, Utensils } from 'lucide-react';

const DashboardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('genetic');

  const dashboards = {
    genetic: {
      title: 'Análise Genética',
      icon: Dna,
      color: 'genetic-blue',
      stats: [
        { label: 'Marcadores Analisados', value: '847,231' },
        { label: 'Predisposições Identificadas', value: '23' },
        { label: 'Recomendações Ativas', value: '47' }
      ]
    },
    physical: {
      title: 'Monitoramento Físico',
      icon: Activity,
      color: 'genetic-green',
      stats: [
        { label: 'Métricas Monitoradas', value: '42' },
        { label: 'Melhoria na Forma Física', value: '+31%' },
        { label: 'Dias Consecutivos', value: '127' }
      ]
    },
    blood: {
      title: 'Biomarcadores Sanguíneos',
      icon: Droplet,
      color: 'genetic-purple',
      stats: [
        { label: 'Marcadores Otimizados', value: '18/23' },
        { label: 'Melhoria Geral', value: '+28%' },
        { label: 'Idade Biológica', value: '-3.2 anos' }
      ]
    },
    mind: {
      title: 'Perfil Psicológico',
      icon: Brain,
      color: 'genetic-blue',
      stats: [
        { label: 'Bem-estar Mental', value: '94%' },
        { label: 'Qualidade do Sono', value: '8.7/10' },
        { label: 'Nível de Estresse', value: 'Baixo' }
      ]
    },
    nutrition: {
      title: 'Nutrição Personalizada',
      icon: Utensils,
      color: 'genetic-green',
      stats: [
        { label: 'Alimentos Otimizados', value: '156' },
        { label: 'Deficiências Corrigidas', value: '7/9' },
        { label: 'Score Nutricional', value: '92/100' }
      ]
    }
  };

  const tabKeys = Object.keys(dashboards) as Array<keyof typeof dashboards>;

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seus{' '}
            <span className="bg-gradient-genetic bg-clip-text text-transparent">
              resultados
            </span>{' '}
            em tempo real
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dashboards interativos que mostram seu progresso em cada área da sua longevidade
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {tabKeys.map((key) => {
            const dashboard = dashboards[key];
            const IconComponent = dashboard.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300
                  ${activeTab === key 
                    ? `bg-${dashboard.color}/20 border border-${dashboard.color}/40 text-${dashboard.color}` 
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-genetic-blue/30'
                  }
                `}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{dashboard.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Content */}
        <div className="card-genetic rounded-2xl p-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Dashboard Visual */}
            <div className="relative">
              <div className="bg-gradient-card rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {dashboards[activeTab as keyof typeof dashboards].title}
                  </h3>
                  <div className={`p-2 rounded-lg bg-${dashboards[activeTab as keyof typeof dashboards].color}/10`}>
                    {React.createElement(dashboards[activeTab as keyof typeof dashboards].icon, {
                      className: `w-6 h-6 text-${dashboards[activeTab as keyof typeof dashboards].color}`
                    })}
                  </div>
                </div>

                {/* Mock Chart Area */}
                <div className="h-48 bg-muted/20 rounded-lg mb-6 flex items-center justify-center border border-border/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-genetic rounded-full mx-auto mb-4 animate-pulse" />
                    <p className="text-muted-foreground">Gráfico Interativo</p>
                    <p className="text-sm text-muted-foreground/70">Dados atualizados em tempo real</p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  {[85, 92, 78].map((progress, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Métrica {index + 1}</span>
                        <span className="text-foreground font-medium">{progress}%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-${dashboards[activeTab as keyof typeof dashboards].color} rounded-full transition-all duration-1000`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats & Insights */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-6">Insights Principais</h4>
                <div className="grid grid-cols-1 gap-6">
                  {dashboards[activeTab as keyof typeof dashboards].stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className={`text-2xl font-bold text-${dashboards[activeTab as keyof typeof dashboards].color}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Items */}
              <div className="bg-gradient-genetic/10 rounded-lg p-6 border border-genetic-blue/20">
                <h5 className="font-semibold text-foreground mb-3">Recomendações da GEN</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-genetic-green rounded-full" />
                    <span>Otimizar protocolo de suplementação baseado nos biomarcadores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-genetic-blue rounded-full" />
                    <span>Ajustar treino de força conforme perfil genético</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-genetic-purple rounded-full" />
                    <span>Implementar técnica de respiração para reduzir inflamação</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;