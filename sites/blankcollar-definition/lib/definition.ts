export const definition = {
  headword: "blank·col·lar",
  displayWord: "blankcollar",
  ipa: "/ˈblaŋk-ˌkä-lər/",
  respell: "blank-kol-ur",
  partOfSpeech: "noun",
  variants: ["blank-collar worker", "blank collar"],
  senses: [
    {
      n: 1,
      gloss:
        "A worker of the post-AI era who operates as a generalist empowered by artificial intelligence, delegating routine execution to machines in order to concentrate on creativity, judgment, empathy, and strategy — often functioning as a one-person company.",
      example:
        "She left her role as a specialist analyst and went blank-collar — one founder, twelve agents, shipping what used to take a team of thirty.",
    },
    {
      n: 2,
      gloss:
        "The third era of labor, succeeding the blue-collar (manual) and white-collar (knowledge) worker: a human whose output is defined not by a job description but by the breadth of problems they can solve and the AI systems they orchestrate.",
      example:
        "Blue collar built the machines. White collar managed them. Blank collar directs them.",
    },
    {
      n: 3,
      label: "philosophy",
      gloss:
        "A practitioner of the principle work is for bots, life is for humans — someone who uses AI to automate the routine so that human attention can return to meaning, taste, and invention.",
      example: "The blank-collar mindset is simple: automate the work, keep the life.",
    },
  ],
  adjective: {
    partOfSpeech: "adjective",
    gloss:
      "Of work, a company, or a mindset: AI-native, lean, generalist-led, and freed from specialist silos.",
    example: "a blank-collar startup runs with three people and a thousand agents.",
  },
  origin:
    "Coined by Kristian Kabashi in The Blank Collar Equation: A Manifesto for the Future of Work (2023). The blank evokes a blank canvas — unbound by a fixed role — on which the worker paints their own form of value.",
  philosophy: "Work is for bots. Life is for humans.",
} as const;

export type Definition = typeof definition;
