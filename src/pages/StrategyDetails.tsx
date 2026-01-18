import React from 'react';
import { DeploySection } from '../components/DeploySection';
import { Strategy, DeployMode } from '../types/strategy';

interface StrategyDetailsProps {
  strategy: Strategy;
}

export const StrategyDetails: React.FC<StrategyDetailsProps> = ({ strategy }) => {
  const handleDeploy = (mode: DeployMode) => {
    console.log(`Deploying ${strategy.name} in ${mode} mode`);
  };

  return (
    <div className="container">
      <div className="strategy-detail-page">
        <div className="strategy-header">
          <div>
            <div className="strategy-name">{strategy.name}</div>
            <div className="strategy-meta">
              {strategy.tags.map((tag, index) => (
                <span key={index} className="meta-item">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="description-section">
          <p>{strategy.fullDescription || strategy.description}</p>
        </div>

        <DeploySection
          strategyName={strategy.name}
          expiryDayCapital={strategy.expiryDayCapital}
          nonExpiryDayCapital={strategy.nonExpiryDayCapital}
          onDeploy={handleDeploy}
        />
      </div>
    </div>
  );
};
