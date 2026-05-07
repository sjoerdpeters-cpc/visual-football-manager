import { motion } from 'framer-motion';
import type { StadiumLocation } from '../data/locations';

type HotspotProps = {
  location: StadiumLocation;
  active: boolean;
  onSelect: (location: StadiumLocation) => void;
};

export function Hotspot({ location, active, onSelect }: HotspotProps) {
  return (
    <motion.button
      type="button"
      className={`hotspot ${active ? 'hotspot-active' : ''}`}
      style={{ left: `${location.overviewPosition.x}%`, top: `${location.overviewPosition.y}%` }}
      onClick={() => onSelect(location)}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.94 }}
      aria-label={location.name}
    >
      <span className="hotspot-pulse" />
      <span className="hotspot-core" />
    </motion.button>
  );
}
