import React from 'react';

interface DNABackgroundProps {
  className?: string;
  density?: number;
}

const DNABackground: React.FC<DNABackgroundProps> = ({ 
  className = "", 
  density = 8 
}) => {
  const strands = Array.from({ length: density }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 6,
    animationDuration: 4 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className={`dna-background ${className}`}>
      {strands.map((strand) => (
        <div
          key={strand.id}
          className="dna-strand"
          style={{
            left: `${strand.left}%`,
            animationDelay: `${strand.animationDelay}s`,
            animationDuration: `${strand.animationDuration}s`,
            opacity: strand.opacity,
          }}
        />
      ))}
      {/* Additional genetic particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-genetic-blue rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-genetic-green rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-genetic-purple rounded-full animate-pulse delay-2000" />
      </div>
    </div>
  );
};

export default DNABackground;