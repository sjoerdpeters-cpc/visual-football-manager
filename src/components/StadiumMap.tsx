import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, Compass, RotateCcw, Shield } from 'lucide-react';
import { useMemo, useState } from 'react';
import { locations, overviewImage, type StadiumLocation } from '../data/locations';
import { BottomGallery } from './BottomGallery';
import { Hotspot } from './Hotspot';
import { LocationPanel } from './LocationPanel';

export function StadiumMap() {
  const [selected, setSelected] = useState<StadiumLocation>(locations[0]);
  const menuLocations = useMemo(() => locations.filter((location) => location.id !== 'stadium'), []);

  return (
    <main className="stadium-shell">
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          className="stadium-background"
          style={{
            backgroundImage: `url(${selected.id === 'stadium' ? overviewImage : selected.image})`,
            transformOrigin: `${selected.overviewPosition.x}% ${selected.overviewPosition.y}%`,
          }}
          initial={{ opacity: 0.75, scale: 1.04 }}
          animate={{ opacity: 1, scale: selected.id === 'stadium' ? 1 : 1.08 }}
          exit={{ opacity: 0.5, scale: 1.1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
      </AnimatePresence>

      <div className="cinematic-overlay" />
      <div className="vignette" />

      <section className="brand-panel" aria-label="Club">
        <div className="club-mark">
          <Shield size={32} />
        </div>
        <div>
          <h1>NEC Nijmegen</h1>
          <p>Stadion overzicht</p>
        </div>
      </section>

      <nav className="side-menu" aria-label="Stadion locaties">
        {menuLocations.map((location) => {
          const Icon = location.icon;
          return (
            <button
              className={`side-menu-item ${selected.id === location.id ? 'side-menu-item-active' : ''}`}
              type="button"
              key={location.id}
              onClick={() => setSelected(location)}
            >
              <Icon size={20} />
              <span>{location.name}</span>
              <ChevronLeft size={16} />
            </button>
          );
        })}
      </nav>

      <div className="hotspot-layer">
        {locations.map((location) => (
          <Hotspot
            key={location.id}
            location={location}
            active={selected.id === location.id}
            onSelect={setSelected}
          />
        ))}
      </div>

      <div className="status-chip">
        <Compass size={17} />
        Focus: {selected.shortName}
      </div>

      <LocationPanel location={selected} />

      <button className="overview-button" type="button" onClick={() => setSelected(locations[6])}>
        <RotateCcw size={18} />
        Terug naar overzicht
      </button>

      <BottomGallery locations={locations} selectedId={selected.id} onSelect={setSelected} />
    </main>
  );
}
