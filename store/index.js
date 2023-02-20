export const state = () => ({
  strict: false,
  words: [
    {
      word: "Acquire",
      url: "/words/Acquire",
      meaning: "to get as one's own",
      synonyms: [
        {
          word: "Cultivate",
          url: "/words/Cultivate",
        },
        {
          word: "Develope",
          url: "",
        },
      ],
      antonyms: [
        {
          word: "Lose",
          url: "",
        },
        {
          word: "Reject",
          url: "",
        },
      ],
      examples: [
        "The two ships were acquired by the navy after the war.",
        "The team acquired three new players this year.",
        "The old word has acquired a new meaning.",
        "He is studying the way that language is acquired by children.",
      ],
    },
    {
      word: "Cultivate",
      url: "/words/Cultivate",
      meaning: "to prepare or prepare and use for the raising of crops",
      synonyms: [
        {
          word: "Acquire",
          url: "/words/Acquire",
        },
        {
          word: "Develope",
          url: "",
        },
      ],
      antonyms: [
        {
          word: "Lose",
          url: "",
        },
        {
          word: "Reject",
          url: "",
        },
      ],
      examples: [
        "Prehistoric peoples settled the area and began to cultivate the land.",
        "Some of the fields are cultivated while others lie fallow.",
        "A plant that is cultivated for its fruit.",
        "They survived by cultivating vegetables and grain.",
      ],
    },
    {
      word: "Manifest",
      url: "/words/Manifest",
      meaning:
        "readily perceived by the senses and especially by the sense of sight.",
      synonyms: [
        {
          word: "Evident",
          url: "",
        },
        {
          word: "Apparent",
          url: "",
        },
      ],
      antonyms: [
        {
          word: "Obscure",
          url: "",
        },
        {
          word: "Indistinct",
          url: "",
        },
      ],
      examples: ["Manifested musical ability at an early age."],
    },
  ],
});
export const getters = {
  getWord: (state) => (id) => {
    return state.words.find((word) => word.word == id);
  },
};
