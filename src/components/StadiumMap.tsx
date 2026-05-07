import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, Compass, RotateCcw, Shield } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  locations,
  overviewImage,
  trainingFieldLevels,
  type StadiumLocation,
} from '../data/locations';
import { BottomGallery } from './BottomGallery';
import { Hotspot } from './Hotspot';
import { LocationPanel } from './LocationPanel';

export function StadiumMap() {
  const [selectedId, setSelectedId] = useState(locations[0].id);
  const [trainingLevel, setTrainingLevel] = useState(1);
  const menuLocations = useMemo(() => locations.filter((location) => location.id !== 'stadium'), []);
  const enhancedLocations = useMemo(() => {
    const trainingVariant = trainingFieldLevels[trainingLevel - 1];

    return locations.map((location) => {
      if (location.id !== 'training-field') {
        return location;
      }

      return {
        ...location,
        image: trainingVariant.image,
        level: trainingVariant.level,
        status: trainingVariant.status,
        features: trainingVariant.features,
      };
    });
  }, [trainingLevel]);
  const selected = enhancedLocations.find((location) => location.id === selectedId) ?? enhancedLocations[0];
  const overviewLocation = enhancedLocations.find((location) => location.id === 'stadium') ?? enhancedLocations[0];
  const selectLocation = (location: StadiumLocation) => setSelectedId(location.id);
  const upgradeTrainingField = () => setTrainingLevel((level) => Math.min(level + 1, trainingFieldLevels.length));

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
        {menuLocations.map((baseLocation) => {
          const location =
            enhancedLocations.find((enhancedLocation) => enhancedLocation.id === baseLocation.id) ?? baseLocation;
          const Icon = location.icon;
          return (
            <button
              className={`side-menu-item ${selected.id === location.id ? 'side-menu-item-active' : ''}`}
              type="button"
              key={location.id}
              onClick={() => selectLocation(location)}
            >
              <Icon size={15} />
              <span>{location.name}</span>
              <ChevronLeft size={12} />
            </button>
          );
        })}
      </nav>

      <div className="hotspot-layer">
        {enhancedLocations.map((location) => (
          <Hotspot
            key={location.id}
            location={location}
            active={selected.id === location.id}
            onSelect={selectLocation}
          />
        ))}
      </div>

      <div className="status-chip">
        <Compass size={17} />
        Focus: {selected.shortName}
      </div>

      <LocationPanel
        location={selected}
        onUpgrade={selected.id === 'training-field' ? upgradeTrainingField : undefined}
        canUpgrade={selected.id === 'training-field' && trainingLevel < trainingFieldLevels.length}
      />

      <button className="overview-button" type="button" onClick={() => selectLocation(overviewLocation)}>
        <RotateCcw size={18} />
        Terug naar overzicht
      </button>

      <BottomGallery locations={enhancedLocations} selectedId={selected.id} onSelect={selectLocation} />
    </main>
  );
}
