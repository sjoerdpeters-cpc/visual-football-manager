import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Gauge, ShieldCheck, Sparkles, X } from 'lucide-react';
import type { StadiumLocation } from '../data/locations';

type LocationPanelProps = {
  location: StadiumLocation;
  onUpgrade?: () => void;
  onClose: () => void;
  canUpgrade?: boolean;
  maxLevel?: number;
};

export function LocationPanel({
  location,
  onUpgrade,
  onClose,
  canUpgrade = false,
  maxLevel = 5,
}: LocationPanelProps) {
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
        <header className="panel-header">
          <div className="panel-kicker">
            <Icon size={18} />
            Locatie
          </div>
          <button className="panel-close-button" type="button" onClick={onClose} aria-label="Sluit detailpaneel">
            <X size={18} />
          </button>
        </header>

        <div className="panel-body">
          <img className="panel-image" src={location.image} alt={location.name} />

          <div className="panel-content">
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
              <div className="upgrade-panel">
                <div className="upgrade-header">
                  <span>Upgrade niveau</span>
                  <strong>
                    {location.level}/{maxLevel}
                  </strong>
                </div>

                <div className="level-track" aria-label={`Huidig level ${location.level} van ${maxLevel}`}>
                  {Array.from({ length: maxLevel }, (_, index) => {
                    const level = index + 1;
                    const isComplete = level < location.level;
                    const isCurrent = level === location.level;

                    return (
                      <div
                        className={`level-step ${isComplete ? 'level-step-complete' : ''} ${
                          isCurrent ? 'level-step-current' : ''
                        }`}
                        key={level}
                      >
                        <span>{level}</span>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="upgrade-button"
                  type="button"
                  onClick={onUpgrade}
                  disabled={!canUpgrade}
                >
                  <ArrowUpRight size={18} />
                  {buttonLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
