import React from 'react';

interface Tag {
  label: string;
  type: 'intraday' | 'medium' | 'nifty' | 'options';
}

interface StrategyCardProps {
  name: string;
  tags: Tag[];
  description: string;
  lastDeployed?: string;
  minCapital: string;
  avgReturn: string;
  backtestTooltip: string;
  status: 'deployed' | 'available';
  isBookmarked?: boolean;
  onBookmark?: () => void;
  onShare?: () => void;
  onView?: () => void;
  onShowMore?: () => void;
}

export const StrategyCard: React.FC<StrategyCardProps> = ({
  name,
  tags,
  description,
  lastDeployed,
  minCapital,
  avgReturn,
  backtestTooltip,
  status,
  isBookmarked = false,
  onBookmark,
  onShare,
  onView,
  onShowMore,
}) => {
  const displayTags = lastDeployed ? tags.slice(0, 2) : tags;
  const needsShowMore = description.length > 200;

  return (
    <div className="strategy-card">
      <div className="strategy-header">
        <div className="strategy-name">{name}</div>
        <div className="strategy-actions">
          <button
            className={`action-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={onBookmark}
            aria-label="Bookmark strategy"
          >
            🔖
          </button>
          <button className="action-btn" onClick={onShare} aria-label="Share strategy">
            📤
          </button>
        </div>
      </div>

      <div className="tags-and-deployed-container">
        <div className="tags-and-deployed">
          {displayTags.map((tag, index) => (
            <span key={index} className={`tag ${tag.type}`}>
              {tag.label}
            </span>
          ))}
          {lastDeployed && (
            <span className="last-deployed-tag">Last deployed {lastDeployed}</span>
          )}
        </div>
      </div>

      <div className="description-section">
        <div className="description-text">{description}</div>
        {needsShowMore && (
          <button className="show-more-btn" onClick={onShowMore}>
            Show more
          </button>
        )}
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-label">Min Capital</div>
          <div className="stat-value">{minCapital}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">
            Avg Return
            <span className="backtest-asterisk">
              <span className="asterisk">*</span>
              <span className="tooltip">{backtestTooltip}</span>
            </span>
          </div>
          <div className="stat-value gradient">{avgReturn}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Status</div>
          <div
            className="stat-value"
            style={{ color: status === 'deployed' ? '#10b981' : '#f59e0b' }}
          >
            {status === 'deployed' ? 'Deployed' : 'Available'}
          </div>
        </div>
        <button className="view-btn" onClick={onView} aria-label="View strategy details">
          →
        </button>
      </div>
    </div>
  );
};
