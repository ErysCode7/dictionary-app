export type DictonaryResponse = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: any[];
};

type Definition = {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
};

type Phonetic = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
};

type License = {
  name: string;
  url: string;
};
