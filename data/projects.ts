export interface Project {
  slug: string;
  number: string;
  name: string;
  location: string;
  type: 'Residential' | 'Commercial';
  year: string;
  status: string;
  area: string;
  tagline: string;
  description: string;
  overview: string;
  approach: string;
  materialLight: string;
  heroImage: string;
  images: string[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: 'courtyard-residence',
    number: '01',
    name: 'The Courtyard Residence',
    location: 'Chennai, India',
    type: 'Residential',
    year: '2026',
    status: 'Concept Project',
    area: '3,200 sq ft',
    tagline: 'Light, warmth and a quiet centre.',
    description: 'A calm residential interior organised around natural light, warm materials and a central courtyard.',
    overview: 'The Courtyard Residence explores the relationship between interior life and the landscape just beyond it. The brief was simple: a home that feels generous without being excessive, warm without being heavy. Every room finds its logic in the courtyard at its centre — a still point around which the house breathes.',
    approach: 'We worked from the outside in, allowing the rhythm of the courtyard to determine the proportions and material palette of each room. Stone floors extend from inside to outside, blurring the threshold. Joinery is crafted from pale teak, with shadow gaps instead of applied mouldings. Light enters softly, filtered through screens and overhangs designed to move with the sun.',
    materialLight: 'The material palette is restrained: pale limestone, warm teak, white plaster with a fine sand finish, and soft cotton furnishings. Nothing competes. Daylight is the primary ornament — shifting through the day from cool blue morning light to the amber warmth of late afternoon.',
    heroImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
    coverImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=85',
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85',
    ],
  },
  {
    slug: 'monochrome-apartment',
    number: '02',
    name: 'Monochrome Apartment',
    location: 'Bengaluru, India',
    type: 'Residential',
    year: '2026',
    status: 'Concept Project',
    area: '1,850 sq ft',
    tagline: 'Texture and shadow as atmosphere.',
    description: 'An understated apartment where texture, shadow and proportion define the atmosphere.',
    overview: 'The Monochrome Apartment was conceived as a study in restraint. The brief called for a home that would recede, allowing art and daily life to occupy the foreground. We stripped everything back to its essential structure — then made every remaining surface as considered as possible.',
    approach: 'Working within an existing concrete frame, we expressed the structure honestly rather than concealing it. Walls were finished in a limewash that moves with humidity and light, giving the apartment a quality that shifts through the day. Built-in joinery runs the full height of each room, creating rhythm without clutter.',
    materialLight: 'Concrete, limewash plaster, smoked oak, blackened steel. The palette is nearly monochromatic, but the textures give it depth. Light enters from a single large north-facing window — indirect and steady, the ideal conditions for the owner\'s photography collection.',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=85',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85',
      'https://images.unsplash.com/photo-1558882224-dda166733046?w=1200&q=85',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?w=1400&q=85',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=85',
    ],
  },
  {
    slug: 'the-glass-house',
    number: '03',
    name: 'The Glass House',
    location: 'Goa, India',
    type: 'Residential',
    year: '2025',
    status: 'Concept Project',
    area: '4,100 sq ft',
    tagline: 'A house open to the world around it.',
    description: 'A contemporary retreat designed around openness, natural light and a strong connection to its surroundings.',
    overview: 'Set within a landscape of palms and laterite rock, The Glass House is a study in dissolution — the careful art of making a building feel less like a container and more like an extension of the site. Interior and exterior exist on a single continuous plane, separated only by large sliding panels of low-iron glass.',
    approach: 'The plan follows the terrain rather than cutting into it. A single floor plate stretches east to west, orienting all principal rooms toward the prevailing breeze. Roof overhangs are deep enough to provide shade without losing the view. Furniture is kept low and sparse — a deliberate choice that allows the landscape to dominate.',
    materialLight: 'Exposed laterite for the base walls, polished concrete for the floors, and natural cane for the soft furnishings. The palette is drawn entirely from the site itself. At dusk, the boundary between inside and outside dissolves entirely into amber and shadow.',
    heroImage: 'https://images.unsplash.com/photo-1505873242700-f289a29e1724?w=1600&q=85',
    coverImage: 'https://images.unsplash.com/photo-1505873242700-f289a29e1724?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
      'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=1200&q=85',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1400&q=85',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&q=85',
    ],
  },
  {
    slug: 'urban-minimal',
    number: '04',
    name: 'Urban Minimal',
    location: 'Mumbai, India',
    type: 'Commercial',
    year: '2025',
    status: 'Concept Project',
    area: '2,600 sq ft',
    tagline: 'Function and form in productive balance.',
    description: 'A refined commercial interior balancing functionality, material warmth and a clean architectural language.',
    overview: 'Urban Minimal was designed for a creative practice that needed a space capable of shifting between focused individual work, collaborative sessions, and client-facing presentations. The challenge was to make a single open floor plate feel purposeful in all three modes — without visible clutter or compromise.',
    approach: 'We divided the floor plan into three distinct zones using variations in ceiling height, material and light rather than walls. The entry zone announces arrival with a full-height stone wall and a skylight above. The work zone uses low acoustic panels and task lighting. The meeting area has soft, flexible furnishings and direct garden views.',
    materialLight: 'Warm concrete, blackened steel, pale ash timber and acoustic felt panels in a neutral flax tone. Lighting is layered: ambient ceiling panels, directional desk lighting, and perimeter coves that glow softly at evening events.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85',
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
