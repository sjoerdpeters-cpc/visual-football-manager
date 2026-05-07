import {
  Building2,
  Car,
  Goal,
  Landmark,
  Lightbulb,
  MonitorUp,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import upgradeLevels from './upgradeLevels.json';

export type StadiumLocation = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  overviewPosition: {
    x: number;
    y: number;
  };
  image: string;
  level: number;
  status: string;
  features: string[];
  icon: LucideIcon;
};

export type UpgradeLevel = {
  level: number;
  image: string;
  status: string;
  features: string[];
};

export const upgradeLevelData = upgradeLevels as Record<string, UpgradeLevel[]>;

export const locations: StadiumLocation[] = [
  {
    id: 'main-stand',
    name: 'Hoofdtribune',
    shortName: 'Tribune',
    description:
      'De hoofdtribune vormt het commerciele hart van het stadion, met premium zitplaatsen, skyboxen en directe toegang tot faciliteiten.',
    overviewPosition: { x: 42, y: 30 },
    image: '/assets/stadium/main-stand.jpg',
    level: 4,
    status: 'Uitstekend',
    features: ['12.500 zitplaatsen', 'VIP-ruimtes', 'Persruimte', 'Cateringpunten'],
    icon: Landmark,
  },
  {
    id: 'training-field',
    name: 'Trainingsveld',
    shortName: 'Training',
    description:
      'Een verlicht trainingscomplex naast het stadion waar selectie, jeugdteams en herstelgroepen dagelijks werken.',
    overviewPosition: { x: 78, y: 43 },
    image: upgradeLevelData['training-field'][0].image,
    level: 1,
    status: upgradeLevelData['training-field'][0].status,
    features: upgradeLevelData['training-field'][0].features,
    icon: Goal,
  },
  {
    id: 'clubhouse',
    name: 'Clubhuis',
    shortName: 'Clubhuis',
    description:
      'Het clubhuis bundelt receptie, kantine en bestuursruimtes tot een herkenbare thuisbasis voor de club.',
    overviewPosition: { x: 36, y: 78 },
    image: '/assets/stadium/clubhouse.jpg',
    level: 3,
    status: 'Modern',
    features: ['Kantine', 'Bestuurskamer', 'Fanshop', 'Entreeplein'],
    icon: Building2,
  },
  {
    id: 'parking',
    name: 'Parkeerplaats',
    shortName: 'Parkeren',
    description:
      'De parkeerzone verwerkt wedstrijddagverkeer en biedt korte looproutes naar de hoofdingang en business-entree.',
    overviewPosition: { x: 82, y: 77 },
    image: '/assets/stadium/parking.jpg',
    level: 2,
    status: 'Capaciteit krap',
    features: ['450 plekken', 'VIP-vakken', 'Busstrook', 'LED-terreinlicht'],
    icon: Car,
  },
  {
    id: 'light-masts',
    name: 'Lichtmasten',
    shortName: 'Licht',
    description:
      'De lichtmasten geven het complex een wedstrijddaggevoel en maken avondtrainingen en tv-productie mogelijk.',
    overviewPosition: { x: 69, y: 33 },
    image: upgradeLevelData['light-masts'][0].image,
    level: 1,
    status: upgradeLevelData['light-masts'][0].status,
    features: upgradeLevelData['light-masts'][0].features,
    icon: Lightbulb,
  },
  {
    id: 'sponsor-boards',
    name: 'Sponsorborden',
    shortName: 'Sponsors',
    description:
      'De sponsorzones rondom veld en hoofdtribune verhogen zichtbaarheid en vormen een directe inkomstenbron.',
    overviewPosition: { x: 50, y: 52 },
    image: '/assets/stadium/overview.jpg',
    level: 2,
    status: 'Uit te breiden',
    features: ['LED-boarding', 'Hoekvlagposities', 'Business pakketten', 'Camera-zicht'],
    icon: MonitorUp,
  },
  {
    id: 'stadium',
    name: 'Stadion',
    shortName: 'Stadion',
    description:
      'Het volledige stadionoverzicht toont de sportieve, facilitaire en commerciele zones in een centrale managementlaag.',
    overviewPosition: { x: 48, y: 45 },
    image: '/assets/stadium/overview.jpg',
    level: 4,
    status: 'Premium complex',
    features: ['Centrale pitch', 'Rondlopende tribunes', 'Hospitality', 'Matchday routing'],
    icon: Trophy,
  },
];

export const overviewImage = '/assets/stadium/overview.jpg';
