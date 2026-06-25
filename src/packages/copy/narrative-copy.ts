export const narrativeCopy = {
  brandStory: {
    title: 'The Aurora Philosophy',
    paragraphs: [
      'In a world of noise, we choose quiet. In a rush for more, we choose better.',
      'Aurora was born from the belief that commerce can be contemplative.',
    ],
  },
  journalEntries: [
    { id: 'the-art-of-slow', title: 'The Art of Slow', excerpt: 'Why the most enduring objects are the ones that ask us to wait.', category: 'Philosophy', readTime: '8 min' },
    { id: 'hands-that-make', title: 'Hands That Make', excerpt: 'A visit to the studio where our ceramic vessels are born.', category: 'Makers', readTime: '12 min' },
    { id: 'paper-memory', title: 'Paper Memory', excerpt: 'How a sheet of handmade paper carries the forest within it.', category: 'Materials', readTime: '6 min' },
    { id: 'color-as-ritual', title: 'Color as Ritual', excerpt: 'The risograph process and the patience of layered ink.', category: 'Process', readTime: '10 min' },
  ],
} as const;

export type NarrativeCopy = typeof narrativeCopy;
export type JournalEntry = (typeof narrativeCopy.journalEntries)[number];
