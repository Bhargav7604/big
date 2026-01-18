import React, { useState } from 'react';
import { StrategyCard } from '../components/StrategyCard';
import { StrategyModal } from '../components/StrategyModal';
import { Strategy } from '../types/strategy';

export const DiscoverStrategies: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);
  const [bookmarkedStrategies, setBookmarkedStrategies] = useState<Set<string>>(new Set());

  const strategies: Strategy[] = [
    {
      id: '1',
      name: 'Bank Nifty-Delta Neutral Strategy',
      tags: [
        { label: 'Intraday', type: 'intraday' },
        { label: 'Medium', type: 'medium' },
      ],
      description:
        'This strategy uses delta-neutral positioning to minimize directional risk while capturing volatility premiums. It involves simultaneous long and short positions in options to maintain a delta-neutral portfolio.',
      fullDescription:
        'This strategy uses delta-neutral positioning to minimize directional risk while capturing volatility premiums. It involves simultaneous long and short positions in options to maintain a delta-neutral portfolio. The strategy is designed to profit from time decay and volatility changes rather than directional moves in the underlying asset. This approach requires careful monitoring and rebalancing to maintain the delta-neutral state. The strategy works best in range-bound markets where volatility is expected to remain elevated.',
      lastDeployed: '2 days ago',
      minCapital: '₹50k',
      avgReturn: 'Backtest',
      backtestTooltip: 'Information is based on last 3 month trades',
      status: 'deployed',
      expiryDayCapital: '₹50,000',
      nonExpiryDayCapital: '₹35,000',
    },
    {
      id: '2',
      name: 'Iron Butterfly Options Strategy',
      tags: [
        { label: 'Intraday', type: 'intraday' },
        { label: 'Medium', type: 'medium' },
        { label: 'Nifty', type: 'nifty' },
        { label: 'Options', type: 'options' },
      ],
      description:
        'A neutral options strategy that profits from low volatility. It involves selling an at-the-money call and put while buying out-of-the-money options for protection.',
      minCapital: '₹75k',
      avgReturn: 'Backtest',
      backtestTooltip: 'Information is based on last 6 month trades',
      status: 'available',
    },
  ];

  const handleShowMore = (strategy: Strategy) => {
    setSelectedStrategy(strategy);
    setModalOpen(true);
  };

  const handleBookmark = (strategyId: string) => {
    setBookmarkedStrategies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(strategyId)) {
        newSet.delete(strategyId);
      } else {
        newSet.add(strategyId);
      }
      return newSet;
    });
  };

  return (
    <div className="container">
      <h1 className="page-title">Discover Strategies</h1>

      <div className="strategy-grid">
        {strategies.map((strategy) => (
          <StrategyCard
            key={strategy.id}
            name={strategy.name}
            tags={strategy.tags}
            description={strategy.description}
            lastDeployed={strategy.lastDeployed}
            minCapital={strategy.minCapital}
            avgReturn={strategy.avgReturn}
            backtestTooltip={strategy.backtestTooltip}
            status={strategy.status}
            isBookmarked={bookmarkedStrategies.has(strategy.id)}
            onBookmark={() => handleBookmark(strategy.id)}
            onShare={() => console.log('Share:', strategy.id)}
            onView={() => console.log('View:', strategy.id)}
            onShowMore={() => handleShowMore(strategy)}
          />
        ))}
      </div>

      <StrategyModal
        isOpen={modalOpen}
        title={selectedStrategy?.name || ''}
        description={selectedStrategy?.fullDescription || selectedStrategy?.description || ''}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
