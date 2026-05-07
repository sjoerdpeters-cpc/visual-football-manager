import { motion } from 'framer-motion';
import type { StadiumLocation } from '../data/locations';

type BottomGalleryProps = {
  locations: StadiumLocation[];
  selectedId: string;
  onSelect: (location: StadiumLocation) => void;
};

export function BottomGallery({ locations, selectedId, onSelect }: BottomGalleryProps) {
  return (
    <motion.nav
      className="bottom-gallery"
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.42 }}
      aria-label="Locatie previews"
    >
      {locations.map((location) => (
        <button
          className={`gallery-card ${selectedId === location.id ? 'gallery-card-active' : ''}`}
          type="button"
          key={location.id}
          onClick={() => onSelect(location)}
        >
          <img src={location.image} alt="" />
          <span>{location.name}</span>
        </button>
      ))}
    </motion.nav>
  );
}
