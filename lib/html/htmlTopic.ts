export type HtmlTopic = {
  title: string;
  description: {
    en: string;
    bn: string;
  };
  realWorld?: {
    en: string;
    bn: string;
  };
  exampleCode?: string;   // ✅ ADD THIS
  questions: {
    questionEn: string;
    questionBn: string;
    answerEn: string;
    answerBn: string;
  }[];
};

export const htmlTopics: Record<string, HtmlTopic> = {
  "what-is-html": {
    title: "What is HTML?",
    description: {
      en: "HTML stands for HyperText Markup Language. It is the standard markup language used to create and structure content on the web. HTML defines the structure of web pages using elements and tags.",
      bn: "HTML এর পূর্ণরূপ HyperText Markup Language। এটি ওয়েব পেজ তৈরি ও structure করার জন্য ব্যবহৃত standard markup language। HTML tag ও element ব্যবহার করে ওয়েব পেজের গঠন নির্ধারণ করে।",
    },
    realWorld: {
      en: "Every website you visit — Facebook, YouTube, Google — uses HTML as its foundation structure before CSS styling and JavaScript functionality are applied.",
      bn: "আপনি যে ওয়েবসাইটই ব্যবহার করেন — Facebook, YouTube, Google — সবগুলোর ভিত্তি হলো HTML। এরপর CSS দিয়ে design এবং JavaScript দিয়ে functionality যোগ করা হয়।",
    },
    questions: [
      {
        questionEn: "What does HTML stand for?",
        questionBn: "HTML এর পূর্ণরূপ কী?",
        answerEn: "HTML stands for HyperText Markup Language.",
        answerBn: "HTML এর পূর্ণরূপ হলো HyperText Markup Language।",
      },
      {
        questionEn: "Is HTML a programming language?",
        questionBn: "HTML কি programming language?",
        answerEn: "No. HTML is a markup language used for structuring content.",
        answerBn: "না। HTML একটি markup language, যা content structure করার জন্য ব্যবহৃত হয়।",
      },
      {
        questionEn: "What is the role of HTML in web development?",
        questionBn: "Web development এ HTML এর ভূমিকা কী?",
        answerEn: "HTML provides the basic structure of a webpage.",
        answerBn: "HTML ওয়েবপেজের মৌলিক কাঠামো তৈরি করে।",
      },
      {
        questionEn: "What is HyperText?",
        questionBn: "HyperText কী?",
        answerEn: "HyperText refers to text that links to other documents via hyperlinks.",
        answerBn: "HyperText হলো এমন লেখা যা hyperlink এর মাধ্যমে অন্য document এর সাথে সংযুক্ত থাকে।",
      },
      {
        questionEn: "Can a website exist without HTML?",
        questionBn: "HTML ছাড়া কি ওয়েবসাইট তৈরি সম্ভব?",
        answerEn: "No. HTML is required to create any webpage structure.",
        answerBn: "না। HTML ছাড়া কোনো ওয়েবপেজ structure তৈরি করা সম্ভব নয়।",
      },
    ],
  },

  structure: {
    title: "HTML Structure",
    description: {
      en: "An HTML document follows a fixed structural pattern that includes <!DOCTYPE html>, <html>, <head>, and <body>. This structure helps browsers correctly interpret and render the webpage.",
      bn: "একটি HTML document নির্দিষ্ট structure অনুসরণ করে, যেমন <!DOCTYPE html>, <html>, <head>, এবং <body>। এই গঠন browser কে সঠিকভাবে ওয়েবপেজ বুঝতে সাহায্য করে।",
    },
    realWorld: {
      en: "If the HTML structure is incorrect, browsers may enter 'quirks mode' and display the webpage incorrectly.",
      bn: "HTML structure ভুল হলে browser 'quirks mode' এ চলে যেতে পারে এবং পেজ ভুলভাবে দেখাতে পারে।",
    },
    questions: [
      {
        questionEn: "What is the purpose of <!DOCTYPE html>?",
        questionBn: "<!DOCTYPE html> এর কাজ কী?",
        answerEn: "It tells the browser that the document is HTML5.",
        answerBn: "এটি browser কে জানায় যে document টি HTML5।",
      },
      {
        questionEn: "What is inside the <head> tag?",
        questionBn: "<head> এর ভিতরে কী থাকে?",
        answerEn: "Metadata, title, meta tags, CSS links, and scripts.",
        answerBn: "Metadata, title, meta tag, CSS link এবং script থাকে।",
      },
      {
        questionEn: "What is inside the <body> tag?",
        questionBn: "<body> এর ভিতরে কী থাকে?",
        answerEn: "All visible content of the webpage.",
        answerBn: "ওয়েবপেজের দৃশ্যমান সব content body এর ভিতরে থাকে।",
      },
      {
        questionEn: "What happens if we remove the <head> tag?",
        questionBn: "<head> tag বাদ দিলে কী হবে?",
        answerEn: "The page may work but important metadata and title will be missing.",
        answerBn: "পেজ কাজ করতে পারে কিন্তু গুরুত্বপূর্ণ metadata ও title থাকবে না।",
      },
      {
        questionEn: "What is the difference between structure and content?",
        questionBn: "Structure ও content এর পার্থক্য কী?",
        answerEn: "Structure defines layout hierarchy, content is the actual data displayed.",
        answerBn: "Structure হলো layout এর hierarchy, content হলো দেখানো data।",
      },
    ],
  },

  element: {
    title: "HTML Element",
    description: {
      en: "An HTML element is the complete structure that defines content on a webpage. It usually consists of an opening tag, content, and a closing tag. Elements are the building blocks of HTML documents.",
      bn: "HTML element হলো একটি পূর্ণাঙ্গ গঠন যা ওয়েবপেজে content নির্ধারণ করে। এটি সাধারণত opening tag, content এবং closing tag নিয়ে গঠিত। HTML document এর মূল building block হলো element।",
    },
    realWorld: {
      en: "Every visible part of a webpage — headings, paragraphs, images, links — is created using HTML elements.",
      bn: "ওয়েবপেজের প্রতিটি দৃশ্যমান অংশ — heading, paragraph, image, link — সবই HTML element দিয়ে তৈরি।",
    },
    questions: [
      {
        questionEn: "What is an HTML element?",
        questionBn: "HTML element কী?",
        answerEn: "An HTML element is a complete structure consisting of an opening tag, content, and usually a closing tag.",
        answerBn: "HTML element হলো opening tag, content এবং সাধারণত closing tag সমন্বয়ে গঠিত একটি পূর্ণাঙ্গ গঠন।",
      },
      {
        questionEn: "What are the parts of an HTML element?",
        questionBn: "একটি HTML element এর অংশগুলো কী কী?",
        answerEn: "Opening tag, content, and closing tag.",
        answerBn: "Opening tag, content এবং closing tag।",
      },
      {
        questionEn: "What are void elements?",
        questionBn: "Void element কী?",
        answerEn: "Void elements are elements that do not have closing tags, such as <img>, <br>, and <hr>.",
        answerBn: "Void element হলো যেগুলোর closing tag নেই, যেমন <img>, <br>, <hr>।",
      },
      {
        questionEn: "Can HTML elements be nested?",
        questionBn: "HTML element কি nested হতে পারে?",
        answerEn: "Yes, elements can be placed inside other elements.",
        answerBn: "হ্যাঁ, একটি element অন্য element এর ভিতরে থাকতে পারে।",
      },
      {
        questionEn: "What is a nested element?",
        questionBn: "Nested element কী?",
        answerEn: "A nested element is an element placed inside another element.",
        answerBn: "Nested element হলো এমন element যা অন্য element এর ভিতরে থাকে।",
      },
      {
        questionEn: "Why are elements important in HTML?",
        questionBn: "HTML এ element কেন গুরুত্বপূর্ণ?",
        answerEn: "Elements define the structure and meaning of content on a webpage.",
        answerBn: "Element ওয়েবপেজের content এর গঠন ও অর্থ নির্ধারণ করে।",
      },
    ],
  },

  tag: {
    title: "HTML Tag",
    description: {
      en: "A tag is a keyword enclosed within angle brackets (< >). Tags are used to define the beginning and end of an HTML element. Tags tell the browser how to interpret content.",
      bn: "Tag হলো angle bracket (< >) এর ভিতরে লেখা keyword। Tag element এর শুরু ও শেষ নির্ধারণ করে এবং browser কে জানায় content কীভাবে interpret করতে হবে।",
    },
    realWorld: {
      en: "When the browser reads <h1>, it understands that the text inside should be displayed as a heading.",
      bn: "Browser যখন <h1> পড়ে, তখন বুঝে যে এর ভিতরের লেখা heading হিসেবে দেখাতে হবে।",
    },
    questions: [
      {
        questionEn: "What is a tag in HTML?",
        questionBn: "HTML এ tag কী?",
        answerEn: "A tag is a keyword enclosed in angle brackets used to define HTML elements.",
        answerBn: "Tag হলো angle bracket এর ভিতরে লেখা keyword যা HTML element নির্ধারণ করে।",
      },
      {
        questionEn: "What are the types of tags?",
        questionBn: "Tag এর প্রকারভেদ কী?",
        answerEn: "There are opening tags, closing tags, and self-closing (void) tags.",
        answerBn: "Opening tag, closing tag এবং self-closing (void) tag রয়েছে।",
      },
      {
        questionEn: "What is an opening tag?",
        questionBn: "Opening tag কী?",
        answerEn: "An opening tag marks the beginning of an element, like <p>.",
        answerBn: "Opening tag element এর শুরু নির্দেশ করে, যেমন <p>।",
      },
      {
        questionEn: "What is a closing tag?",
        questionBn: "Closing tag কী?",
        answerEn: "A closing tag ends an element and includes a forward slash, like </p>.",
        answerBn: "Closing tag element শেষ করে এবং এতে forward slash থাকে, যেমন </p>।",
      },
      {
        questionEn: "What is the difference between tag and element?",
        questionBn: "Tag ও Element এর পার্থক্য কী?",
        answerEn: "A tag is just the markup symbol, while an element includes the tag and content.",
        answerBn: "Tag শুধু markup চিহ্ন, কিন্তু element হলো tag + content সহ সম্পূর্ণ গঠন।",
      },
    ],
  },

  attribute: {
    title: "HTML Attribute",
    description: {
      en: "HTML attributes provide additional information about elements. They are always written inside the opening tag and usually come in name=\"value\" pairs. Attributes modify the behavior, appearance, or functionality of an element.",
      bn: "HTML attribute element সম্পর্কে অতিরিক্ত তথ্য প্রদান করে। এটি সবসময় opening tag এর ভিতরে লেখা হয় এবং সাধারণত name=\"value\" আকারে থাকে। Attribute element এর behavior, appearance অথবা functionality পরিবর্তন করে।",
    },
    realWorld: {
      en: "Attributes like id, class, href, src, alt, and type are widely used in real-world web development to control styling, linking, images, forms, and JavaScript behavior.",
      bn: "id, class, href, src, alt, type ইত্যাদি attribute বাস্তব ওয়েব development এ ব্যাপকভাবে ব্যবহৃত হয় — styling, linking, image control, form handling এবং JavaScript behavior নির্ধারণে।",
    },
    questions: [
      {
        questionEn: "What is an HTML attribute?",
        questionBn: "HTML attribute কী?",
        answerEn: "An attribute provides additional information about an HTML element.",
        answerBn: "Attribute হলো element সম্পর্কে অতিরিক্ত তথ্য প্রদানকারী অংশ।",
      },
      {
        questionEn: "Where are attributes written?",
        questionBn: "Attribute কোথায় লেখা হয়?",
        answerEn: "Attributes are written inside the opening tag of an element.",
        answerBn: "Attribute element এর opening tag এর ভিতরে লেখা হয়।",
      },
      {
        questionEn: "What is the correct format of an attribute?",
        questionBn: "Attribute এর সঠিক format কী?",
        answerEn: "Attributes are written as name=\"value\" pairs.",
        answerBn: "Attribute সাধারণত name=\"value\" আকারে লেখা হয়।",
      },
      {
        questionEn: "What is the difference between id and class?",
        questionBn: "id এবং class এর পার্থক্য কী?",
        answerEn: "id must be unique in a page, but class can be used multiple times.",
        answerBn: "id একটি পেজে একবার ব্যবহার হয়, কিন্তু class একাধিকবার ব্যবহার করা যায়।",
      },
      {
        questionEn: "What is a boolean attribute?",
        questionBn: "Boolean attribute কী?",
        answerEn: "Boolean attributes do not require a value. Their presence means true, like disabled or checked.",
        answerBn: "Boolean attribute এর আলাদা value লাগে না। এটি থাকলেই true হয়, যেমন disabled বা checked।",
      },
      {
        questionEn: "Are attributes case-sensitive?",
        questionBn: "Attribute কি case-sensitive?",
        answerEn: "In HTML, attribute names are not case-sensitive, but values may be case-sensitive depending on context.",
        answerBn: "HTML এ attribute name case-sensitive নয়, তবে value কিছু ক্ষেত্রে case-sensitive হতে পারে।",
      },
      {
        questionEn: "Can an element have multiple attributes?",
        questionBn: "একটি element এ কি একাধিক attribute থাকতে পারে?",
        answerEn: "Yes, an element can contain multiple attributes separated by spaces.",
        answerBn: "হ্যাঁ, একটি element এ একাধিক attribute থাকতে পারে এবং এগুলো space দিয়ে আলাদা করা হয়।",
      },
      {
        questionEn: "What is the purpose of the alt attribute?",
        questionBn: "alt attribute এর কাজ কী?",
        answerEn: "The alt attribute provides alternative text for images, improving accessibility and SEO.",
        answerBn: "alt attribute image এর জন্য বিকল্প লেখা প্রদান করে, যা accessibility ও SEO উন্নত করে।",
      },
      {
        questionEn: "What are global attributes?",
        questionBn: "Global attribute কী?",
        answerEn: "Global attributes are attributes that can be used on almost all HTML elements, like id, class, style, and title.",
        answerBn: "Global attribute হলো এমন attribute যা প্রায় সব HTML element এ ব্যবহার করা যায়, যেমন id, class, style, title।",
      },
    ],
  },

  comment: {
    title: "HTML Comment",
    description: {
      en: "HTML comments are used to insert notes or explanations inside the code that are not displayed in the browser. They help developers document and organize their code.",
      bn: "HTML comment হলো কোডের ভিতরে নোট বা ব্যাখ্যা লেখার একটি পদ্ধতি যা browser এ প্রদর্শিত হয় না। এটি developer দের কোড বুঝতে ও সংগঠিত রাখতে সাহায্য করে।",
    },
    realWorld: {
      en: "Developers use comments to explain complex logic, temporarily disable code, or leave notes for team members.",
      bn: "Developer রা comment ব্যবহার করে জটিল অংশ ব্যাখ্যা করতে, সাময়িকভাবে কোড বন্ধ করতে, অথবা team member দের জন্য নোট রাখতে।",
    },
    exampleCode: `<!-- This is a single-line comment -->

<p>This paragraph is visible</p>

<!--
  This is a multi-line comment.
  It will not appear in the browser.
-->

<!-- <h1>This heading is temporarily disabled</h1> -->`,
    questions: [
      {
        questionEn: "How do you write a comment in HTML?",
        questionBn: "HTML এ comment কীভাবে লিখতে হয়?",
        answerEn: "Comments are written using <!-- comment --> syntax.",
        answerBn: "Comment লেখা হয় <!-- comment --> syntax ব্যবহার করে।",
      },
      {
        questionEn: "Are HTML comments visible in the browser?",
        questionBn: "HTML comment কি browser এ দেখা যায়?",
        answerEn: "No, comments are not displayed in the browser.",
        answerBn: "না, comment browser এ প্রদর্শিত হয় না।",
      },
      {
        questionEn: "Can HTML comments span multiple lines?",
        questionBn: "HTML comment কি একাধিক লাইনে লেখা যায়?",
        answerEn: "Yes, comments can span multiple lines.",
        answerBn: "হ্যাঁ, comment একাধিক লাইনে লেখা যায়।",
      },
      {
        questionEn: "Why are comments important?",
        questionBn: "Comment কেন গুরুত্বপূর্ণ?",
        answerEn: "Comments improve code readability and maintainability.",
        answerBn: "Comment কোডকে পড়তে সহজ করে এবং maintain করতে সাহায্য করে।",
      },
      {
        questionEn: "Can comments be used to hide code?",
        questionBn: "Comment ব্যবহার করে কি কোড লুকানো যায়?",
        answerEn: "Yes, developers often comment out code to temporarily disable it.",
        answerBn: "হ্যাঁ, developer রা সাময়িকভাবে কোড বন্ধ করতে comment ব্যবহার করে।",
      },
      {
        questionEn: "Can HTML comments be nested?",
        questionBn: "HTML comment কি nested করা যায়?",
        answerEn: "No, HTML comments cannot be nested.",
        answerBn: "না, HTML comment nested করা যায় না।",
      },
    ],
  },

  

};