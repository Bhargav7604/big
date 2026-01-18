import React, { useState } from 'react';

type DeployMode = 'forward-test' | 'live-trading';

interface DeploySectionProps {
  strategyName: string;
  expiryDayCapital?: string;
  nonExpiryDayCapital?: string;
  onDeploy: (mode: DeployMode) => void;
}

export const DeploySection: React.FC<DeploySectionProps> = ({
  strategyName,
  expiryDayCapital,
  nonExpiryDayCapital,
  onDeploy,
}) => {
  const [selectedMode, setSelectedMode] = useState<DeployMode>('forward-test');

  const handleDeploy = () => {
    onDeploy(selectedMode);
  };

  return (
    <div className="deploy-section">
      <div className="deploy-title">Deploy Strategy</div>

      <div className="deploy-options">
        <div
          className={`deploy-option ${selectedMode === 'forward-test' ? 'selected' : ''}`}
          onClick={() => setSelectedMode('forward-test')}
        >
          <div className="option-label">Forward Test</div>
          <div className="option-description">Simulation Trade</div>
        </div>
        <div
          className={`deploy-option ${selectedMode === 'live-trading' ? 'selected' : ''}`}
          onClick={() => setSelectedMode('live-trading')}
        >
          <div className="option-label">Live Trading</div>
          <div className="option-description">Real money and real trades</div>
        </div>
      </div>

      <button className="deploy-button" onClick={handleDeploy}>
        Deploy Strategy
      </button>

      {selectedMode === 'forward-test' && (
        <div className="nudge nudge-forward-test">
          <div className="nudge-icon">ℹ️</div>
          <div className="nudge-content">
            <div className="nudge-title">Forward Test Mode</div>
            <div className="nudge-message">
              <strong>No real money will be used</strong> and{' '}
              <strong>no real trades will be placed on the exchange</strong>. This is a
              simulation mode to test your strategy performance using historical and live market
              data without any financial risk.
            </div>
          </div>
        </div>
      )}

      {selectedMode === 'live-trading' && expiryDayCapital && nonExpiryDayCapital && (
        <div className="nudge nudge-live-trading">
          <div className="nudge-icon">⚠️</div>
          <div className="nudge-content">
            <div className="nudge-title">Capital Requirements Vary</div>
            <div className="nudge-message">
              Capital requirements are different for <strong>Expiry Day</strong> and{' '}
              <strong>Non-Expiry Day</strong>. Please ensure you have sufficient capital
              available.
            </div>

            <div className="capital-comparison">
              <table className="capital-table">
                <thead>
                  <tr>
                    <th>Day Type</th>
                    <th>Minimum Capital Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Expiry Day</td>
                    <td className="capital-value">{expiryDayCapital}</td>
                  </tr>
                  <tr>
                    <td>Non-Expiry Day</td>
                    <td className="capital-value">{nonExpiryDayCapital}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
