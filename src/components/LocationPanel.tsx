import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Gauge, ShieldCheck, Sparkles } from 'lucide-react';
import type { StadiumLocation } from '../data/locations';

type LocationPanelProps = {
  location: StadiumLocation;
  onUpgrade?: () => void;
  canUpgrade?: boolean;
  maxLevel?: number;
};

export function LocationPanel({ location, onUpgrade, canUpgrade = false, maxLevel = 5 }: LocationPanelProps) {
  const Icon = location.icon;
  const isUpgradeable = Boolean(onUpgrade);
  const buttonLabel = canUpgrade ? `Upgrade naar level ${location.level + 1}` : `Max level ${maxLevel} bereikt`;

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key={`${location.id}-${location.level}`}
        className="location-panel"
        initial={{ opacity: 0, x: 28, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 20, scale: 0.98 }}
        transition={{ duration: 0.32, ease: 'easeOut' }}
      >
        <div className="panel-kicker">
          <Icon size={18} />
          Locatie
        </div>

        <img className="panel-image" src={location.image} alt={location.name} />

        <div className="panel-title-row">
          <div>
            <h2>{location.name}</h2>
            <p>{location.status}</p>
          </div>
          <div className="level-badge">
            <Gauge size={16} />
            L{location.level}
          </div>
        </div>

        <p className="panel-description">{location.description}</p>

        <div className="feature-heading">
          <Sparkles size={16} />
          Kenmerken
        </div>
        <div className="feature-list">
          {location.features.map((feature) => (
            <div className="feature-row" key={feature}>
              <ShieldCheck size={17} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {isUpgradeable && (
          <button
            className="upgrade-button"
            type="button"
            onClick={onUpgrade}
            disabled={!canUpgrade}
          >
            <ArrowUpRight size={18} />
            {buttonLabel}
          </button>
        )}
      </motion.aside>
    </AnimatePresence>
  );
}
