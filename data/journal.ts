export interface JournalEntry {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
}

export const journalEntries: JournalEntry[] = [
  {
    slug: 'natural-light-changes-a-room',
    category: 'Design Notes',
    title: 'Why Natural Light Changes A Room',
    description: 'Light is not just a practical necessity in interior design. It is the element that gives form its depth, colour its truth and space its meaning.',
    date: 'March 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80',
    body: [
      'Natural light is not a detail to be added at the end of a design process. It is the medium through which all other decisions are perceived.',
      'When we orient a room toward morning light, we are making a statement about how that room should begin the day — quiet, blue-toned, cool. When we angle a skylight to catch the late afternoon, we are choosing a particular quality of warmth that most artificial systems cannot replicate.',
      'Working with daylight means understanding not just where light enters, but how it moves, how it reflects and how it changes across the hours and seasons. The same material — pale limestone, for instance — will appear entirely different at ten in the morning than at four in the afternoon.',
    ],
  },
  {
    slug: 'quiet-power-of-natural-materials',
    category: 'Materials',
    title: 'The Quiet Power Of Natural Materials',
    description: 'Stone, timber, plaster, linen — the materials we return to again and again are not nostalgic choices. They are honest ones.',
    date: 'February 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80',
    body: [
      'There is a reason certain materials persist across generations of design. Wood, stone, plaster and linen share a common quality: they carry time visibly, accumulating a patina that synthetic materials rarely replicate.',
      'Natural materials are also deeply spatial. Running your hand across a stone wall is an experience that engages touch, temperature and even smell in ways that a smooth composite panel does not.',
      'We choose natural materials not out of conservatism but because they work better over time. A limewash wall that marks and softens with use is not damaged — it is developing.',
    ],
  },
  {
    slug: 'designing-for-everyday-rituals',
    category: 'Spaces',
    title: 'Designing For Everyday Rituals',
    description: 'The most important moments in a home are not the special occasions. They are the repeated, quiet rituals that shape how a space is truly experienced.',
    date: 'January 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    body: [
      'A good kitchen is not designed for dinner parties. It is designed for Tuesday morning — the coffee ritual, the quiet before the day begins.',
      'When we ask clients how they live, we are not asking for a list of activities. We are asking for a map of their time. Where does the morning light fall? Which chair do they actually sit in? What do they need to find quickly and what can be stored away?',
      'The answers to these questions reveal the true architecture of a home. Not the walls and windows, but the rhythms and habits that the architecture must support.',
    ],
  },
  {
    slug: 'balance-between-function-and-form',
    category: 'Process',
    title: 'Finding Balance Between Function And Form',
    description: 'The distinction between beauty and utility is less sharp in practice than it is in theory. The best interiors are those where you cannot quite tell the difference.',
    date: 'December 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
    body: [
      'There is a persistent myth in design that beautiful things are somehow less functional — and that truly functional things must sacrifice beauty to achieve their purpose.',
      'In interior architecture, this tension rarely plays out as expected. The most functional kitchens are often the most beautiful — because clarity of purpose is itself an aesthetic quality. A surface that is easy to clean and clearly understood is a surface that feels calm.',
      'We find that the most satisfying interiors are those that never ask you to choose. Where the storage is beautiful, the layout is logical, and the materials are as pleasant to touch as they are to maintain.',
    ],
  },
];
