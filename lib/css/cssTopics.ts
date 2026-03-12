import type { CssTopic } from "./cssTopicsType"; // যদি আলাদা type file রাখো

export const cssTopics: Record<string, CssTopic> = {

  "what-is-css": {
    title: "What is CSS",

    description: {
      en: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning of HTML elements.",
      bn: "CSS (Cascading Style Sheets) ওয়েব পেজের ডিজাইন ও layout নিয়ন্ত্রণ করার জন্য ব্যবহৃত হয়। এটি color, font, spacing এবং element positioning নিয়ন্ত্রণ করে।",
    },

    realWorld: {
      en: "Every modern website uses CSS to create responsive layouts and visually appealing designs.",
      bn: "প্রতিটি আধুনিক ওয়েবসাইট responsive layout এবং সুন্দর design তৈরির জন্য CSS ব্যবহার করে।",
    },

    exampleCode: `h1 {
  color: blue;
  font-size: 32px;
}`,

    questions: [
      {
        questionEn: "What does CSS stand for?",
        questionBn: "CSS এর পূর্ণরূপ কী?",
        answerEn: "CSS stands for Cascading Style Sheets.",
        answerBn: "CSS এর পূর্ণরূপ Cascading Style Sheets।",
      },
      {
        questionEn: "What is the main purpose of CSS?",
        questionBn: "CSS এর মূল কাজ কী?",
        answerEn: "CSS is used to style and layout web pages.",
        answerBn: "CSS ওয়েব পেজের design এবং layout নিয়ন্ত্রণ করতে ব্যবহৃত হয়।",
      },
      {
        questionEn: "Can a website work without CSS?",
        questionBn: "CSS ছাড়া কি ওয়েবসাইট কাজ করবে?",
        answerEn: "Yes, but the website will appear without styling and layout.",
        answerBn: "হ্যাঁ, কিন্তু ওয়েবসাইটে কোনো design বা styling থাকবে না।",
      },
      {
        questionEn: "What is the difference between HTML and CSS?",
        questionBn: "HTML ও CSS এর পার্থক্য কী?",
        answerEn: "HTML structures content, while CSS styles and designs it.",
        answerBn: "HTML content এর structure তৈরি করে, আর CSS design ও styling করে।",
      },
    ],
  },

  "css-syntax": {
    title: "CSS Syntax",

    description: {
      en: "CSS syntax consists of a selector and a declaration block that defines styles applied to HTML elements.",
      bn: "CSS syntax একটি selector এবং declaration block নিয়ে গঠিত যা HTML element এ style প্রয়োগ করে।",
    },

    exampleCode: `p {
  color: red;
  font-size: 18px;
}`,

    questions: [
      {
        questionEn: "What are the parts of CSS syntax?",
        questionBn: "CSS syntax এর অংশ কী কী?",
        answerEn: "Selector and declaration block.",
        answerBn: "Selector এবং declaration block।",
      },
      {
        questionEn: "What is a declaration block?",
        questionBn: "Declaration block কী?",
        answerEn: "A declaration block contains property-value pairs.",
        answerBn: "Declaration block এর ভিতরে property এবং value থাকে।",
      },
      {
        questionEn: "What is a CSS property?",
        questionBn: "CSS property কী?",
        answerEn: "A property defines what style will be changed.",
        answerBn: "Property নির্ধারণ করে কোন style পরিবর্তন হবে।",
      },
    ],
  },

  selectors: {
    title: "CSS Selectors",

    description: {
      en: "Selectors are used to target HTML elements so that CSS styles can be applied to them.",
      bn: "Selector ব্যবহার করে HTML element নির্বাচন করা হয় যাতে তাদের উপর CSS style প্রয়োগ করা যায়।",
    },

    exampleCode: `h1 {
  color: blue;
}

.className {
  font-size: 20px;
}

#idName {
  color: red;
}`,

    questions: [
      {
        questionEn: "What is a CSS selector?",
        questionBn: "CSS selector কী?",
        answerEn: "A selector targets HTML elements for styling.",
        answerBn: "Selector HTML element নির্বাচন করে যাতে style প্রয়োগ করা যায়।",
      },
      {
        questionEn: "What are the common types of selectors?",
        questionBn: "Common selector কোনগুলো?",
        answerEn: "Element, class, id, attribute, and pseudo selectors.",
        answerBn: "Element, class, id, attribute এবং pseudo selector।",
      },
      {
        questionEn: "Which selector has the highest specificity?",
        questionBn: "কোন selector এর specificity সবচেয়ে বেশি?",
        answerEn: "The id selector has higher specificity than class and element selectors.",
        answerBn: "ID selector এর specificity class এবং element selector থেকে বেশি।",
      },
    ],
  },

  comments: {
    title: "CSS Comments",

    description: {
      en: "CSS comments are used to explain code and improve readability. They are ignored by browsers.",
      bn: "CSS comment কোড ব্যাখ্যা করতে এবং readability উন্নত করতে ব্যবহার করা হয়। Browser এগুলো ignore করে।",
    },

    exampleCode: `/* This is a CSS comment */

p {
  color: red;
}`,

    questions: [
      {
        questionEn: "How do you write a comment in CSS?",
        questionBn: "CSS এ comment কীভাবে লেখা হয়?",
        answerEn: "CSS comments are written using /* comment */ syntax.",
        answerBn: "CSS comment লেখা হয় /* comment */ syntax ব্যবহার করে।",
      },
      {
        questionEn: "Are CSS comments visible in the browser?",
        questionBn: "CSS comment কি browser এ দেখা যায়?",
        answerEn: "No, browsers ignore CSS comments.",
        answerBn: "না, browser CSS comment ignore করে।",
      },
    ],
  },

  colors: {
    title: "CSS Colors",

    description: {
      en: "CSS colors define the color of text, backgrounds, borders, and other elements.",
      bn: "CSS color ব্যবহার করে text, background, border এবং অন্যান্য element এর রং নির্ধারণ করা হয়।",
    },

    exampleCode: `p {
  color: red;
  background-color: yellow;
}`,

    questions: [
      {
        questionEn: "What are the different ways to define colors in CSS?",
        questionBn: "CSS এ color নির্ধারণ করার উপায় কী কী?",
        answerEn: "Named colors, HEX, RGB, RGBA, HSL.",
        answerBn: "Named color, HEX, RGB, RGBA, HSL।",
      },
      {
        questionEn: "What is HEX color format?",
        questionBn: "HEX color format কী?",
        answerEn: "HEX colors use hexadecimal values like #ff0000.",
        answerBn: "HEX color hexadecimal value ব্যবহার করে যেমন #ff0000।",
      },
    ],
  },

  units: {
    title: "CSS Units",

    description: {
      en: "CSS units define the measurement used for sizes, spacing, and layout.",
      bn: "CSS unit size, spacing এবং layout এর পরিমাপ নির্ধারণ করে।",
    },

    exampleCode: `p {
  font-size: 16px;
  margin: 1rem;
}`,

    questions: [
      {
        questionEn: "What are CSS units?",
        questionBn: "CSS unit কী?",
        answerEn: "Units define measurements like width, height, margin, and font-size.",
        answerBn: "CSS unit width, height, margin এবং font-size এর পরিমাপ নির্ধারণ করে।",
      },
      {
        questionEn: "What is the difference between px and rem?",
        questionBn: "px এবং rem এর পার্থক্য কী?",
        answerEn: "px is a fixed unit, while rem is relative to the root font size.",
        answerBn: "px একটি fixed unit, আর rem root font-size এর উপর নির্ভর করে।",
      },
    ],
  },
  margin: {
    title: "CSS Margin",

    description: {
      en: "Margin creates space outside an element's border. It controls the distance between elements.",
      bn: "Margin element এর border এর বাইরে space তৈরি করে। এটি element এর মধ্যে দূরত্ব নিয়ন্ত্রণ করে।",
    },

    exampleCode: `div {
  margin: 20px;
}`,

    realWorld: {
      en: "Margins are commonly used to create spacing between sections, cards, and layout components.",
      bn: "Margin সাধারণত section, card এবং layout component এর মধ্যে spacing তৈরি করতে ব্যবহার করা হয়।",
    },

    questions: [
      {
        questionEn: "What is margin in CSS?",
        questionBn: "CSS এ margin কী?",
        answerEn: "Margin creates space outside the border of an element.",
        answerBn: "Margin element এর border এর বাইরে space তৈরি করে।",
      },
      {
        questionEn: "Can margin have negative values?",
        questionBn: "Margin কি negative হতে পারে?",
        answerEn: "Yes, margin can have negative values.",
        answerBn: "হ্যাঁ, margin negative value হতে পারে।",
      },
    ],
  },
  border: {
    title: "CSS Border",

    description: {
      en: "The border property defines the outline around an element's padding and content.",
      bn: "Border element এর padding ও content এর চারপাশে outline তৈরি করে।",
    },

    exampleCode: `div {
  border: 2px solid black;
}`,

    realWorld: {
      en: "Borders are used in UI components like buttons, cards, and tables.",
      bn: "Border button, card এবং table এর মতো UI component এ ব্যবহার করা হয়।",
    },

    questions: [
      {
        questionEn: "What is the CSS border property?",
        questionBn: "CSS border property কী?",
        answerEn: "It defines the border around an element.",
        answerBn: "এটি element এর চারপাশে border তৈরি করে।",
      },
      {
        questionEn: "What are the parts of a border?",
        questionBn: "Border এর অংশগুলো কী?",
        answerEn: "Border width, border style, and border color.",
        answerBn: "Border width, border style এবং border color।",
      },
    ],
  },
  "width-height": {
    title: "CSS Width and Height",

    description: {
      en: "Width and height properties define the size of an element.",
      bn: "Width এবং height property element এর size নির্ধারণ করে।",
    },

    exampleCode: `div {
  width: 200px;
  height: 100px;
}`,

    questions: [
      {
        questionEn: "What does width property do?",
        questionBn: "width property কী কাজ করে?",
        answerEn: "It sets the width of an element.",
        answerBn: "এটি element এর প্রস্থ নির্ধারণ করে।",
      },
      {
        questionEn: "What does height property do?",
        questionBn: "height property কী কাজ করে?",
        answerEn: "It sets the height of an element.",
        answerBn: "এটি element এর উচ্চতা নির্ধারণ করে।",
      },
    ],
  },
  "box-sizing": {
    title: "CSS Box Sizing",

    description: {
      en: "The box-sizing property defines how the total width and height of an element are calculated.",
      bn: "box-sizing property element এর width এবং height কিভাবে গণনা হবে তা নির্ধারণ করে।",
    },

    exampleCode: `div {
  box-sizing: border-box;
}`,

    realWorld: {
      en: "Most modern CSS layouts use box-sizing: border-box to simplify layout calculations.",
      bn: "আধুনিক CSS layout এ box-sizing: border-box ব্যবহার করা হয় layout সহজ করার জন্য।",
    },

    questions: [
      {
        questionEn: "What does box-sizing do?",
        questionBn: "box-sizing কী কাজ করে?",
        answerEn: "It controls how element width and height are calculated.",
        answerBn: "এটি element এর width ও height কিভাবে গণনা হবে তা নির্ধারণ করে।",
      },
      {
        questionEn: "What is the difference between content-box and border-box?",
        questionBn: "content-box এবং border-box এর পার্থক্য কী?",
        answerEn: "content-box excludes padding and border from width, border-box includes them.",
        answerBn: "content-box width এ padding ও border যোগ করে না, border-box করে।",
      },
    ],
  },
  padding: {
    title: "CSS Padding",
    description: {
      en: "Padding creates space inside an element, between its content and border.",
      bn: "Padding element এর content এবং border এর মধ্যে space তৈরি করে।",
    },
    exampleCode: `div {
  padding: 20px;
}`,
    questions: [
      {
        questionEn: "What is padding in CSS?",
        questionBn: "CSS এ padding কী?",
        answerEn: "Padding creates space inside an element, between its content and border.",
        answerBn: "Padding element এর content এবং border এর মধ্যে space তৈরি করে।",
      },
    ],
  },


  // text-style

  "font-family": {
    title: "CSS Font Family",

    description: {
      en: "The font-family property defines the typeface used for text. It allows you to specify multiple fallback fonts.",
      bn: "font-family property টেক্সটের জন্য কোন font ব্যবহার হবে তা নির্ধারণ করে। এতে fallback font ব্যবহার করা যায়।",
    },

    exampleCode: `p {
  font-family: Arial, Helvetica, sans-serif;
}`,

    realWorld: {
      en: "Websites use font-family to control typography and maintain consistent branding.",
      bn: "ওয়েবসাইটে typography এবং branding ঠিক রাখতে font-family ব্যবহার করা হয়।",
    },

    questions: [
      {
        questionEn: "What does font-family do?",
        questionBn: "font-family কী কাজ করে?",
        answerEn: "It specifies the font used for text.",
        answerBn: "এটি টেক্সটের জন্য কোন font ব্যবহার হবে তা নির্ধারণ করে।",
      },
      {
        questionEn: "What is a fallback font?",
        questionBn: "Fallback font কী?",
        answerEn: "A fallback font is used when the primary font is not available.",
        answerBn: "প্রথম font না থাকলে fallback font ব্যবহার হয়।",
      },
    ],
  },

  "font-size": {
    title: "CSS Font Size",

    description: {
      en: "The font-size property controls the size of text.",
      bn: "font-size property টেক্সটের আকার নির্ধারণ করে।",
    },

    exampleCode: `p {
  font-size: 18px;
}`,

    questions: [
      {
        questionEn: "What does font-size control?",
        questionBn: "font-size কী নিয়ন্ত্রণ করে?",
        answerEn: "It controls the size of text.",
        answerBn: "এটি টেক্সটের আকার নিয়ন্ত্রণ করে।",
      },
      {
        questionEn: "Which units are used with font-size?",
        questionBn: "font-size এর সাথে কোন unit ব্যবহার করা হয়?",
        answerEn: "px, em, rem, %, vw.",
        answerBn: "px, em, rem, %, vw।",
      },
    ],
  },

  "font-weight": {
    title: "CSS Font Weight",

    description: {
      en: "The font-weight property controls how bold or light the text appears.",
      bn: "font-weight property টেক্সট কতটা bold বা light হবে তা নির্ধারণ করে।",
    },

    exampleCode: `p {
  font-weight: bold;
}`,

    questions: [
      {
        questionEn: "What does font-weight do?",
        questionBn: "font-weight কী কাজ করে?",
        answerEn: "It controls the thickness or boldness of text.",
        answerBn: "এটি টেক্সটের boldness বা thickness নিয়ন্ত্রণ করে।",
      },
      {
        questionEn: "What are common font-weight values?",
        questionBn: "font-weight এর সাধারণ value কী?",
        answerEn: "normal, bold, 100–900.",
        answerBn: "normal, bold, 100–900।",
      },
    ],
  },

  "line-height": {
    title: "CSS Line Height",

    description: {
      en: "The line-height property controls the vertical spacing between lines of text.",
      bn: "line-height property টেক্সটের লাইনের মধ্যে vertical spacing নিয়ন্ত্রণ করে।",
    },

    exampleCode: `p {
  line-height: 1.6;
}`,

    questions: [
      {
        questionEn: "What does line-height control?",
        questionBn: "line-height কী নিয়ন্ত্রণ করে?",
        answerEn: "It controls the spacing between lines of text.",
        answerBn: "এটি টেক্সট লাইনের মধ্যে spacing নিয়ন্ত্রণ করে।",
      },
      {
        questionEn: "Why is line-height important?",
        questionBn: "line-height কেন গুরুত্বপূর্ণ?",
        answerEn: "It improves readability of text.",
        answerBn: "এটি টেক্সট পড়তে সহজ করে।",
      },
    ],
  },

  "text-align": {
    title: "CSS Text Align",

    description: {
      en: "The text-align property controls the horizontal alignment of text.",
      bn: "text-align property টেক্সটের horizontal alignment নিয়ন্ত্রণ করে।",
    },

    exampleCode: `p {
  text-align: center;
}`,

    questions: [
      {
        questionEn: "What does text-align do?",
        questionBn: "text-align কী কাজ করে?",
        answerEn: "It aligns text horizontally.",
        answerBn: "এটি টেক্সটকে horizontal ভাবে align করে।",
      },
      {
        questionEn: "What are common text-align values?",
        questionBn: "text-align এর সাধারণ value কী?",
        answerEn: "left, right, center, justify.",
        answerBn: "left, right, center, justify।",
      },
    ],
  },

  // layout
  display: {
    title: "CSS Display",

    description: {
      en: "The display property controls how an HTML element is rendered in the layout. It determines whether an element behaves as block, inline, flex, grid, or none.",
      bn: "display property নির্ধারণ করে একটি HTML element layout এ কীভাবে প্রদর্শিত হবে। এটি block, inline, flex, grid বা none হিসেবে element কে render করতে পারে।",
    },

    exampleCode: `div {
  display: block;
}

span {
  display: inline;
}

.container {
  display: flex;
}`,

    realWorld: {
      en: "Modern layouts often use display:flex and display:grid to build responsive designs.",
      bn: "আধুনিক layout তৈরিতে display:flex এবং display:grid ব্যাপকভাবে ব্যবহার করা হয়।",
    },

    questions: [
      {
        questionEn: "What does the display property do?",
        questionBn: "display property কী কাজ করে?",
        answerEn: "It defines how an element is displayed in the layout.",
        answerBn: "এটি element layout এ কীভাবে প্রদর্শিত হবে তা নির্ধারণ করে।",
      },
      {
        questionEn: "What is the difference between block and inline elements?",
        questionBn: "block ও inline element এর পার্থক্য কী?",
        answerEn: "Block elements take full width and start on a new line, while inline elements take only the required width.",
        answerBn: "Block element পুরো width নেয় এবং নতুন লাইনে শুরু হয়, inline element প্রয়োজন অনুযায়ী width নেয়।",
      },
      {
        questionEn: "What does display:none do?",
        questionBn: "display:none কী করে?",
        answerEn: "It completely removes the element from the layout.",
        answerBn: "এটি element কে সম্পূর্ণভাবে layout থেকে সরিয়ে দেয়।",
      },
    ],
  },


  position: {
    title: "CSS Position",

    description: {
      en: "The position property controls how an element is positioned on the page.",
      bn: "position property নির্ধারণ করে element পেজে কোথায় অবস্থান করবে।",
    },

    exampleCode: `div {
  position: absolute;
  top: 20px;
  left: 10px;
}`,

    questions: [
      {
        questionEn: "What does the position property do?",
        questionBn: "position property কী কাজ করে?",
        answerEn: "It controls how an element is positioned in the document.",
        answerBn: "এটি element document এ কীভাবে অবস্থান করবে তা নিয়ন্ত্রণ করে।",
      },
      {
        questionEn: "What are the different position values?",
        questionBn: "position এর value কী কী?",
        answerEn: "static, relative, absolute, fixed, sticky.",
        answerBn: "static, relative, absolute, fixed, sticky।",
      },
      {
        questionEn: "What is the difference between relative and absolute?",
        questionBn: "relative ও absolute এর পার্থক্য কী?",
        answerEn: "Relative positions an element relative to itself, while absolute positions it relative to the nearest positioned ancestor.",
        answerBn: "relative element কে নিজের অবস্থানের ভিত্তিতে সরায়, absolute nearest positioned parent এর ভিত্তিতে সরায়।",
      },
      {
        questionEn: "What does position:fixed do?",
        questionBn: "position:fixed কী করে?",
        answerEn: "It positions an element relative to the viewport and stays fixed during scrolling.",
        answerBn: "এটি element কে viewport এর সাথে স্থির রাখে এবং scroll করলেও নড়ে না।",
      },
    ],
  },


  "z-index": {
    title: "CSS Z Index",

    description: {
      en: "The z-index property controls the vertical stacking order of positioned elements.",
      bn: "z-index property element গুলোর stacking order নির্ধারণ করে।",
    },

    exampleCode: `.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 2;
}`,

    questions: [
      {
        questionEn: "What does z-index control?",
        questionBn: "z-index কী নিয়ন্ত্রণ করে?",
        answerEn: "It controls which element appears on top when elements overlap.",
        answerBn: "Element overlap করলে কোনটি উপরে থাকবে তা নির্ধারণ করে।",
      },
      {
        questionEn: "When does z-index work?",
        questionBn: "z-index কখন কাজ করে?",
        answerEn: "It works only on positioned elements (relative, absolute, fixed, sticky).",
        answerBn: "এটি শুধু positioned element এ কাজ করে।",
      },
    ],
  },

  overflow: {
    title: "CSS Overflow",

    description: {
      en: "The overflow property controls what happens when content overflows its container.",
      bn: "overflow property নির্ধারণ করে container এর বাইরে content চলে গেলে কী হবে।",
    },

    exampleCode: `div {
  width: 200px;
  height: 100px;
  overflow: auto;
}`,

    questions: [
      {
        questionEn: "What does overflow do?",
        questionBn: "overflow property কী কাজ করে?",
        answerEn: "It controls how overflowing content is handled.",
        answerBn: "এটি container এর বাইরে চলে যাওয়া content কীভাবে handle হবে তা নির্ধারণ করে।",
      },
      {
        questionEn: "What are overflow values?",
        questionBn: "overflow এর value কী কী?",
        answerEn: "visible, hidden, scroll, auto.",
        answerBn: "visible, hidden, scroll, auto।",
      },
      {
        questionEn: "What is the difference between scroll and auto?",
        questionBn: "scroll ও auto এর পার্থক্য কী?",
        answerEn: "scroll always shows scrollbars, while auto shows them only when needed.",
        answerBn: "scroll সবসময় scrollbar দেখায়, auto প্রয়োজন হলে দেখায়।",
      },
    ],
  },

  // flexbox

  "flex-container": {
    title: "CSS Flex Container",

    description: {
      en: "A flex container is created by setting display:flex on an element. It enables flexible layout for its child elements.",
      bn: "display:flex ব্যবহার করলে element flex container হয়ে যায় এবং তার child element গুলো flexible layout অনুসরণ করে।",
    },

    exampleCode: `.container {
  display: flex;
}`,

    realWorld: {
      en: "Flexbox is widely used for building navigation bars, card layouts, and responsive UI components.",
      bn: "Navigation bar, card layout এবং responsive UI তৈরিতে Flexbox ব্যাপকভাবে ব্যবহার করা হয়।",
    },

    questions: [
      {
        questionEn: "What is a flex container?",
        questionBn: "Flex container কী?",
        answerEn: "A flex container is an element with display:flex applied to it.",
        answerBn: "display:flex ব্যবহার করা element কে flex container বলা হয়।",
      },
      {
        questionEn: "What are flex items?",
        questionBn: "Flex item কী?",
        answerEn: "The direct children of a flex container are called flex items.",
        answerBn: "Flex container এর direct child গুলোকে flex item বলা হয়।",
      },
    ],
  },

  "justify-content": {
    title: "CSS Justify Content",

    description: {
      en: "The justify-content property aligns flex items along the main axis.",
      bn: "justify-content property flex item গুলোকে main axis বরাবর align করে।",
    },

    exampleCode: `.container {
  display: flex;
  justify-content: center;
}`,

    questions: [
      {
        questionEn: "What does justify-content do?",
        questionBn: "justify-content কী কাজ করে?",
        answerEn: "It aligns flex items along the main axis.",
        answerBn: "এটি flex item গুলোকে main axis বরাবর align করে।",
      },
      {
        questionEn: "Common justify-content values?",
        questionBn: "justify-content এর সাধারণ value কী?",
        answerEn: "flex-start, center, flex-end, space-between, space-around, space-evenly.",
        answerBn: "flex-start, center, flex-end, space-between, space-around, space-evenly।",
      },
    ],
  },

  "align-items": {
    title: "CSS Align Items",

    description: {
      en: "The align-items property aligns flex items along the cross axis.",
      bn: "align-items property flex item গুলোকে cross axis বরাবর align করে।",
    },

    exampleCode: `.container {
  display: flex;
  align-items: center;
}`,

    questions: [
      {
        questionEn: "What does align-items do?",
        questionBn: "align-items কী কাজ করে?",
        answerEn: "It aligns flex items along the cross axis.",
        answerBn: "এটি flex item গুলোকে cross axis বরাবর align করে।",
      },
      {
        questionEn: "Difference between justify-content and align-items?",
        questionBn: "justify-content ও align-items এর পার্থক্য কী?",
        answerEn: "justify-content works on the main axis, align-items works on the cross axis.",
        answerBn: "justify-content main axis এ কাজ করে, align-items cross axis এ কাজ করে।",
      },
    ],
  },

  "flex-wrap": {
    title: "CSS Flex Wrap",

    description: {
      en: "The flex-wrap property controls whether flex items stay on one line or wrap onto multiple lines.",
      bn: "flex-wrap property নির্ধারণ করে flex item গুলো এক লাইনে থাকবে নাকি multiple line এ যাবে।",
    },

    exampleCode: `.container {
  display: flex;
  flex-wrap: wrap;
}`,

    questions: [
      {
        questionEn: "What does flex-wrap do?",
        questionBn: "flex-wrap কী কাজ করে?",
        answerEn: "It controls whether flex items wrap to the next line.",
        answerBn: "এটি নির্ধারণ করে flex item পরের লাইনে যাবে কিনা।",
      },
      {
        questionEn: "flex-wrap values?",
        questionBn: "flex-wrap এর value কী কী?",
        answerEn: "nowrap, wrap, wrap-reverse.",
        answerBn: "nowrap, wrap, wrap-reverse।",
      },
    ],
  },

  gap: {
    title: "CSS Gap",

    description: {
      en: "The gap property creates space between flex or grid items.",
      bn: "gap property flex বা grid item এর মধ্যে space তৈরি করে।",
    },

    exampleCode: `.container {
  display: flex;
  gap: 20px;
}`,

    questions: [
      {
        questionEn: "What does gap do in flexbox?",
        questionBn: "Flexbox এ gap কী কাজ করে?",
        answerEn: "It creates spacing between flex items.",
        answerBn: "এটি flex item এর মধ্যে spacing তৈরি করে।",
      },
      {
        questionEn: "What is the difference between gap and margin?",
        questionBn: "gap ও margin এর পার্থক্য কী?",
        answerEn: "gap controls spacing between flex/grid items, margin controls spacing around elements.",
        answerBn: "gap item এর মধ্যে spacing দেয়, margin element এর চারপাশে spacing দেয়।",
      },
    ],
  },

  //grid

  "grid-container": {
    title: "CSS Grid Container",

    description: {
      en: "A grid container is created by applying display:grid or display:inline-grid to an element. It enables a two-dimensional layout system with rows and columns.",
      bn: "display:grid বা display:inline-grid ব্যবহার করলে element grid container হয়ে যায়। এটি row এবং column ভিত্তিক দুই-মাত্রিক layout তৈরি করে।",
    },

    exampleCode: `.container {
  display: grid;
}`,

    realWorld: {
      en: "Grid is commonly used for complex layouts such as dashboards, gallery layouts, and full-page designs.",
      bn: "Dashboard layout, gallery layout এবং complex page design তৈরিতে CSS Grid ব্যবহার করা হয়।",
    },

    questions: [
      {
        questionEn: "What is a grid container?",
        questionBn: "Grid container কী?",
        answerEn: "An element with display:grid becomes a grid container.",
        answerBn: "display:grid ব্যবহার করা element কে grid container বলা হয়।",
      },
      {
        questionEn: "What are grid items?",
        questionBn: "Grid item কী?",
        answerEn: "The direct children of a grid container are called grid items.",
        answerBn: "Grid container এর direct child গুলোকে grid item বলা হয়।",
      },
    ],
  },

  "grid-template": {
    title: "CSS Grid Template",

    description: {
      en: "The grid-template property defines the structure of rows and columns in a grid layout.",
      bn: "grid-template property grid layout এর row এবং column এর গঠন নির্ধারণ করে।",
    },

    exampleCode: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`,

    questions: [
      {
        questionEn: "What does grid-template-columns do?",
        questionBn: "grid-template-columns কী কাজ করে?",
        answerEn: "It defines the number and width of columns in the grid.",
        answerBn: "এটি grid এর column সংখ্যা এবং প্রস্থ নির্ধারণ করে।",
      },
      {
        questionEn: "What does the unit fr mean in grid?",
        questionBn: "Grid এ fr unit কী বোঝায়?",
        answerEn: "fr stands for fraction and distributes available space.",
        answerBn: "fr মানে fraction এবং এটি available space ভাগ করে।",
      },
    ],
  },

  "grid-gap": {
    title: "CSS Grid Gap",

    description: {
      en: "The grid-gap property defines the spacing between grid rows and columns.",
      bn: "grid-gap property grid এর row এবং column এর মধ্যে spacing তৈরি করে।",
    },

    exampleCode: `.container {
  display: grid;
  grid-gap: 20px;
}`,

    questions: [
      {
        questionEn: "What does grid-gap do?",
        questionBn: "grid-gap কী কাজ করে?",
        answerEn: "It creates space between grid items.",
        answerBn: "এটি grid item এর মধ্যে space তৈরি করে।",
      },
      {
        questionEn: "What is the modern alternative to grid-gap?",
        questionBn: "grid-gap এর modern alternative কী?",
        answerEn: "The gap property replaces grid-gap.",
        answerBn: "gap property grid-gap কে replace করেছে।",
      },
    ],
  },

  "grid-area": {
    title: "CSS Grid Area",

    description: {
      en: "The grid-area property allows an item to span across rows and columns in a grid layout.",
      bn: "grid-area property ব্যবহার করে একটি item grid এর multiple row বা column জুড়ে বসানো যায়।",
    },

    exampleCode: `.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`,

    questions: [
      {
        questionEn: "What does grid-area do?",
        questionBn: "grid-area কী কাজ করে?",
        answerEn: "It defines where a grid item should be placed within the grid.",
        answerBn: "এটি grid item grid এর কোন জায়গায় থাকবে তা নির্ধারণ করে।",
      },
      {
        questionEn: "What is the difference between Flexbox and Grid?",
        questionBn: "Flexbox ও Grid এর পার্থক্য কী?",
        answerEn: "Flexbox is one-dimensional, while Grid is two-dimensional.",
        answerBn: "Flexbox এক-মাত্রিক layout, Grid দুই-মাত্রিক layout।",
      },
    ],
  },

  // responsive

  "media-query": {
  title: "CSS Media Query",

  description: {
    en: "Media queries allow CSS to apply styles depending on device screen size, resolution, or orientation.",
    bn: "Media query ব্যবহার করে device screen size, resolution বা orientation অনুযায়ী CSS style পরিবর্তন করা যায়।",
  },

  exampleCode: `@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}`,

  realWorld: {
    en: "Media queries are used to make websites responsive across mobile, tablet, and desktop screens.",
    bn: "Mobile, tablet এবং desktop screen অনুযায়ী responsive design তৈরিতে media query ব্যবহার করা হয়।",
  },

  questions: [
    {
      questionEn: "What is a media query in CSS?",
      questionBn: "CSS এ media query কী?",
      answerEn: "Media queries allow CSS styles to be applied based on device conditions such as screen size.",
      answerBn: "Media query device condition যেমন screen size অনুযায়ী CSS style পরিবর্তন করতে সাহায্য করে।",
    },
    {
      questionEn: "What is the most common media query breakpoint?",
      questionBn: "Common media query breakpoint কী?",
      answerEn: "768px, 1024px, and 1280px are common breakpoints.",
      answerBn: "768px, 1024px এবং 1280px সাধারণ breakpoint।",
    },
    {
      questionEn: "What does max-width mean in media queries?",
      questionBn: "Media query এ max-width কী বোঝায়?",
      answerEn: "It applies styles when the screen width is smaller than a specified value.",
      answerBn: "Screen width নির্দিষ্ট মানের কম হলে style প্রয়োগ হয়।",
    },
  ],
},

"mobile-first": {
  title: "Mobile First Design",

  description: {
    en: "Mobile-first design means designing for smaller screens first and then progressively enhancing the layout for larger screens.",
    bn: "Mobile-first design মানে প্রথমে mobile screen এর জন্য design করা এবং পরে বড় screen এর জন্য layout উন্নত করা।",
  },

  exampleCode: `/* Mobile style */
.container {
  padding: 10px;
}

/* Desktop style */
@media (min-width: 768px) {
  .container {
    padding: 40px;
  }
}`,

  questions: [
    {
      questionEn: "What is mobile-first design?",
      questionBn: "Mobile-first design কী?",
      answerEn: "It is a design approach where styles are created for mobile devices first.",
      answerBn: "এটি এমন একটি design approach যেখানে প্রথমে mobile device এর জন্য style তৈরি করা হয়।",
    },
    {
      questionEn: "Why is mobile-first important?",
      questionBn: "Mobile-first কেন গুরুত্বপূর্ণ?",
      answerEn: "Most users access websites from mobile devices.",
      answerBn: "বর্তমানে অধিকাংশ user mobile device থেকে ওয়েবসাইট ব্যবহার করে।",
    },
  ],
},

"responsive-layout": {
  title: "Responsive Layout",

  description: {
    en: "Responsive layout ensures that a website adapts to different screen sizes and devices.",
    bn: "Responsive layout নিশ্চিত করে যে ওয়েবসাইট বিভিন্ন screen size এবং device এ সঠিকভাবে প্রদর্শিত হবে।",
  },

  exampleCode: `.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}`,

  realWorld: {
    en: "Responsive layouts are used in modern web applications to provide a consistent user experience across devices.",
    bn: "Modern web application এ বিভিন্ন device এ একই user experience দিতে responsive layout ব্যবহার করা হয়।",
  },

  questions: [
    {
      questionEn: "What is responsive design?",
      questionBn: "Responsive design কী?",
      answerEn: "Responsive design ensures websites adapt to different screen sizes.",
      answerBn: "Responsive design ওয়েবসাইটকে বিভিন্ন screen size অনুযায়ী মানিয়ে নিতে সাহায্য করে।",
    },
    {
      questionEn: "What techniques are used for responsive layouts?",
      questionBn: "Responsive layout তৈরিতে কোন technique ব্যবহার হয়?",
      answerEn: "Flexbox, Grid, media queries, and fluid layouts.",
      answerBn: "Flexbox, Grid, media query এবং fluid layout।",
    },
  ],
},


};