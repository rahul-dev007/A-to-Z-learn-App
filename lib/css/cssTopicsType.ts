export type CssQuestion = {
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
};

export type CssTopic = {
  title: string;

  description: {
    en: string;
    bn: string;
  };

  realWorld?: {
    en: string;
    bn: string;
  };

  exampleCode?: string;

  questions: CssQuestion[];
};