export type JsTopic = {
  title: string;

  description: {
    en: string;
    bn: string;
  };

  exampleCode?: string;

  realWorld?: {
    en: string;
    bn: string;
  };

  questions: {
    questionEn: string;
    questionBn: string;
    answerEn: string;
    answerBn: string;
  }[];
};