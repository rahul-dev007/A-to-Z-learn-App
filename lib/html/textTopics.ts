import type { HtmlTopic } from "./htmlTopic";

export const textTopics: Record<string, HtmlTopic> = {

  heading: {
    title: "HTML Headings",
    description: {
      en: "HTML provides six heading levels from <h1> to <h6>. <h1> is the most important and <h6> is the least important. Headings define structure and hierarchy of a webpage.",
      bn: "HTML এ <h1> থেকে <h6> পর্যন্ত ৬টি heading level রয়েছে। <h1> সবচেয়ে গুরুত্বপূর্ণ এবং <h6> সবচেয়ে কম গুরুত্বপূর্ণ। Heading পেজের structure ও hierarchy নির্ধারণ করে।",
    },
    realWorld: {
      en: "Search engines use heading hierarchy for SEO. Screen readers rely on headings for accessibility.",
      bn: "SEO এর জন্য search engine heading structure ব্যবহার করে। Accessibility এর জন্য screen reader heading নির্ভর করে।",
    },
    exampleCode: `<h1>Main Title</h1>
<h2>Section</h2>
<h3>Sub Section</h3>`,
    questions: [
      {
        questionEn: "How many heading levels are there in HTML?",
        questionBn: "HTML এ কয়টি heading level আছে?",
        answerEn: "There are six levels from <h1> to <h6>.",
        answerBn: "<h1> থেকে <h6> পর্যন্ত ৬টি level আছে।",
      },
      {
        questionEn: "Can we use multiple <h1> tags?",
        questionBn: "একাধিক <h1> ব্যবহার করা যায়?",
        answerEn: "Yes, but best practice is to use one main <h1> per page.",
        answerBn: "হ্যাঁ, তবে best practice হলো একটি প্রধান <h1> ব্যবহার করা।",
      },
      {
        questionEn: "Why are headings important for SEO?",
        questionBn: "SEO এর জন্য heading কেন গুরুত্বপূর্ণ?",
        answerEn: "Headings help search engines understand content structure.",
        answerBn: "Heading search engine কে content structure বুঝতে সাহায্য করে।",
      },
    ],
  },

  paragraph: {
    title: "HTML Paragraph",
    description: {
      en: "The <p> tag defines a paragraph of text. Browsers automatically add margin before and after paragraphs.",
      bn: "<p> tag একটি paragraph নির্ধারণ করে। Browser স্বয়ংক্রিয়ভাবে এর আগে ও পরে margin যোগ করে।",
    },
    realWorld: {
      en: "Paragraphs are widely used in blogs, articles, documentation, and content-based websites.",
      bn: "Blog, article, documentation ও content ভিত্তিক ওয়েবসাইটে paragraph ব্যাপকভাবে ব্যবহৃত হয়।",
    },
    exampleCode: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`,
    questions: [
      {
        questionEn: "What tag defines a paragraph?",
        questionBn: "Paragraph কোন tag দিয়ে তৈরি হয়?",
        answerEn: "The <p> tag.",
        answerBn: "<p> tag।",
      },
      {
        questionEn: "Does <p> automatically add spacing?",
        questionBn: "<p> কি স্বয়ংক্রিয়ভাবে spacing যোগ করে?",
        answerEn: "Yes, browsers apply default margins to paragraphs.",
        answerBn: "হ্যাঁ, browser default margin যোগ করে।",
      },
    ],
  },

  formatting: {
    title: "HTML Text Formatting",
    description: {
      en: "HTML provides formatting elements such as <strong>, <em>, <mark>, <del>, <ins>, <small>, <sup>, <sub>.",
      bn: "HTML এ বিভিন্ন formatting tag আছে যেমন <strong>, <em>, <mark>, <del>, <ins>, <small>, <sup>, <sub>।",
    },
    exampleCode: `<strong>Important</strong>
<em>Emphasis</em>
<mark>Highlight</mark>
<del>Deleted</del>
<ins>Inserted</ins>
<small>Small text</small>
<sup>Superscript</sup>
<sub>Subscript</sub>`,
    questions: [
      {
        questionEn: "Difference between <b> and <strong>?",
        questionBn: "<b> ও <strong> এর পার্থক্য কী?",
        answerEn: "<strong> has semantic meaning, while <b> is purely visual.",
        answerBn: "<strong> semantic অর্থ বহন করে, <b> শুধু visual।",
      },
      {
        questionEn: "Difference between <i> and <em>?",
        questionBn: "<i> ও <em> এর পার্থক্য কী?",
        answerEn: "<em> has semantic emphasis, <i> is just italic style.",
        answerBn: "<em> semantic গুরুত্ব দেয়, <i> শুধু italic style।",
      },
    ],
  },

  blockquote: {
    title: "HTML Blockquote",
    description: {
      en: "The <blockquote> element defines a section quoted from another source.",
      bn: "<blockquote> element অন্য উৎস থেকে উদ্ধৃত লেখা প্রদর্শন করে।",
    },
    exampleCode: `<blockquote cite="https://example.com">
  This is a quoted text.
</blockquote>`,
    questions: [
      {
        questionEn: "What is blockquote used for?",
        questionBn: "blockquote কী কাজে ব্যবহৃত হয়?",
        answerEn: "It is used to define quoted content.",
        answerBn: "উদ্ধৃত content প্রদর্শনের জন্য ব্যবহৃত হয়।",
      },
      {
        questionEn: "What is the cite attribute?",
        questionBn: "cite attribute কী?",
        answerEn: "It specifies the source URL of the quotation.",
        answerBn: "এটি উদ্ধৃত লেখার উৎস URL নির্দেশ করে।",
      },
    ],
  },

  code: {
    title: "HTML Code Element",
    description: {
      en: "The <code> element displays inline code snippets in a monospace font.",
      bn: "<code> element inline code monospace font এ দেখায়।",
    },
    exampleCode: `Use <code>console.log()</code> to print output.`,
    questions: [
      {
        questionEn: "What does the <code> element do?",
        questionBn: "<code> element কী করে?",
        answerEn: "It displays inline code snippets.",
        answerBn: "Inline code snippet দেখায়।",
      },
    ],
  },

  pre: {
    title: "HTML Preformatted Text",
    description: {
      en: "The <pre> element preserves whitespace, line breaks, and formatting exactly as written.",
      bn: "<pre> element whitespace ও line break ঠিক যেভাবে লেখা হয় সেভাবেই সংরক্ষণ করে।",
    },
    exampleCode: `<pre>
Line 1
    Line 2 (Indented)
Line 3
</pre>`,
    questions: [
      {
        questionEn: "What does the <pre> element preserve?",
        questionBn: "<pre> কী সংরক্ষণ করে?",
        answerEn: "Whitespace and line breaks.",
        answerBn: "Whitespace ও line break।",
      },
      {
        questionEn: "Difference between <pre> and <code>?",
        questionBn: "<pre> ও <code> এর পার্থক্য কী?",
        answerEn: "<pre> preserves formatting, <code> displays inline code.",
        answerBn: "<pre> formatting সংরক্ষণ করে, <code> inline code দেখায়।",
      },
    ],
  },

};