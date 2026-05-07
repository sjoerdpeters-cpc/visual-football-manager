import { AnimatePresence, motion } from 'framer-motion';
import { RotateCcw, Shield } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  locations,
  overviewImage,
  upgradeLevelData,
  type StadiumLocation,
} from '../data/locations';
import { BottomGallery } from './BottomGallery';
import { Hotspot } from './Hotspot';
import { LocationPanel } from './LocationPanel';

export function StadiumMap() {
  const [selectedId, setSelectedId] = useState('stadium');
  const [locationLevels, setLocationLevels] = useState<Record<string, number>>({
    'training-field': 1,
    'light-masts': 1,
  });
  const enhancedLocations = useMemo(() => {
    return locations.map((location) => {
      const levels = upgradeLevelData[location.id];

      if (!levels) {
        return location;
      }

      const currentLevel = locationLevels[location.id] ?? 1;
      const variant = levels[currentLevel - 1] ?? levels[0];

      return {
        ...location,
        image: variant.image,
        level: variant.level,
        status: variant.status,
        features: variant.features,
      };
    });
  }, [locationLevels]);
  const selected = enhancedLocations.find((location) => location.id === selectedId) ?? enhancedLocations[0];
  const overviewLocation = enhancedLocations.find((location) => location.id === 'stadium') ?? enhancedLocations[0];
  const detailOpen = selected.id !== 'stadium';
  const selectedUpgradeLevels = upgradeLevelData[selected.id];
  const selectLocation = (location: StadiumLocation) => {
    setSelectedId((currentId) => (currentId === location.id ? overviewLocation.id : location.id));
  };
  const closeDetail = () => setSelectedId(overviewLocation.id);

  useEffect(() => {
    if (!detailOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDetail();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [detailOpen, overviewLocation.id]);

  const upgradeSelectedLocation = () => {
    if (!selectedUpgradeLevels) {
      return;
    }

    setLocationLevels((levels) => ({
      ...levels,
      [selected.id]: Math.min((levels[selected.id] ?? 1) + 1, selectedUpgradeLevels.length),
    }));
  };

  return (
    <main className="stadium-shell">
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          className={`stadium-background ${detailOpen ? 'stadium-background-detail' : 'stadium-background-overview'}`}
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

      {detailOpen && (
        <>
          <LocationPanel
            location={selected}
            onUpgrade={selectedUpgradeLevels ? upgradeSelectedLocation : undefined}
            onClose={closeDetail}
            canUpgrade={Boolean(selectedUpgradeLevels && selected.level < selectedUpgradeLevels.length)}
            maxLevel={selectedUpgradeLevels?.length}
          />

          <button className="overview-button" type="button" onClick={closeDetail}>
            <RotateCcw size={18} />
            Terug naar overzicht
          </button>
        </>
      )}

      <BottomGallery locations={enhancedLocations} selectedId={selected.id} onSelect={selectLocation} />
    </main>
  );
}
