import type { HtmlTopic } from "./htmlTopic";

export const listTableTopics: Record<string, HtmlTopic> = {

  ul: {
    title: "HTML Unordered List",
    description: {
      en: "The <ul> element defines an unordered list. Items inside the list are displayed with bullet points.",
      bn: "<ul> element একটি unordered list তৈরি করে যেখানে item গুলো bullet point দিয়ে দেখানো হয়।",
    },
    realWorld: {
      en: "Unordered lists are commonly used in navigation menus, feature lists, and bullet point descriptions.",
      bn: "Navigation menu, feature list এবং bullet point description এ unordered list ব্যাপকভাবে ব্যবহৃত হয়।",
    },
    exampleCode: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
    questions: [
      {
        questionEn: "What is the purpose of the <ul> element?",
        questionBn: "<ul> element এর কাজ কী?",
        answerEn: "It creates an unordered list with bullet points.",
        answerBn: "এটি bullet point সহ unordered list তৈরি করে।",
      },
      {
        questionEn: "What elements are used inside <ul>?",
        questionBn: "<ul> এর ভিতরে কোন element ব্যবহার হয়?",
        answerEn: "The <li> element is used inside <ul>.",
        answerBn: "<ul> এর ভিতরে <li> element ব্যবহার করা হয়।",
      },
      {
        questionEn: "Can lists be nested?",
        questionBn: "List কি nested হতে পারে?",
        answerEn: "Yes, lists can be nested inside other lists.",
        answerBn: "হ্যাঁ, একটি list অন্য list এর ভিতরে থাকতে পারে।",
      },
    ],
  },

  ol: {
    title: "HTML Ordered List",
    description: {
      en: "The <ol> element defines an ordered list where items are displayed with numbers.",
      bn: "<ol> element একটি ordered list তৈরি করে যেখানে item গুলো number দিয়ে দেখানো হয়।",
    },
    realWorld: {
      en: "Ordered lists are used in step-by-step instructions, tutorials, and ranking systems.",
      bn: "Tutorial step, instruction list এবং ranking system এ ordered list ব্যবহার করা হয়।",
    },
    exampleCode: `<ol>
  <li>Install Node.js</li>
  <li>Create Project</li>
  <li>Run Development Server</li>
</ol>`,
    questions: [
      {
        questionEn: "What is the difference between <ul> and <ol>?",
        questionBn: "<ul> এবং <ol> এর পার্থক্য কী?",
        answerEn: "<ul> creates bullet lists while <ol> creates numbered lists.",
        answerBn: "<ul> bullet list তৈরি করে এবং <ol> numbered list তৈরি করে।",
      },
      {
        questionEn: "What attribute changes numbering style?",
        questionBn: "Number style পরিবর্তন করতে কোন attribute লাগে?",
        answerEn: "The type attribute.",
        answerBn: "type attribute।",
      },
      {
        questionEn: "Can ordered lists start from a custom number?",
        questionBn: "Ordered list কি custom number থেকে শুরু হতে পারে?",
        answerEn: "Yes, using the start attribute.",
        answerBn: "হ্যাঁ, start attribute ব্যবহার করে।",
      },
    ],
  },

  li: {
    title: "HTML List Item",
    description: {
      en: "The <li> element defines a list item inside <ul> or <ol> lists.",
      bn: "<li> element list item নির্ধারণ করে যা <ul> বা <ol> এর ভিতরে থাকে।",
    },
    realWorld: {
      en: "Every item in navigation menus, feature lists, or task lists is created using the <li> element.",
      bn: "Navigation menu, feature list বা task list এর প্রতিটি item <li> element দিয়ে তৈরি হয়।",
    },
    exampleCode: `<ul>
  <li>React</li>
  <li>Next.js</li>
  <li>Node.js</li>
</ul>`,
    questions: [
      {
        questionEn: "Where is the <li> element used?",
        questionBn: "<li> element কোথায় ব্যবহার হয়?",
        answerEn: "Inside <ul> or <ol> lists.",
        answerBn: "<ul> অথবা <ol> list এর ভিতরে।",
      },
      {
        questionEn: "Can <li> contain other HTML elements?",
        questionBn: "<li> এর ভিতরে কি অন্য element থাকতে পারে?",
        answerEn: "Yes, <li> can contain text, images, links, or nested lists.",
        answerBn: "হ্যাঁ, <li> এর ভিতরে text, image, link বা nested list থাকতে পারে।",
      },
    ],
  },

  table: {
    title: "HTML Table",
    description: {
      en: "The <table> element defines a table used to display tabular data in rows and columns.",
      bn: "<table> element row এবং column আকারে tabular data প্রদর্শন করার জন্য ব্যবহার করা হয়।",
    },
    realWorld: {
      en: "Tables are used in dashboards, financial reports, product comparison charts, and admin panels.",
      bn: "Dashboard, financial report, product comparison chart এবং admin panel এ table ব্যবহৃত হয়।",
    },
    exampleCode: `<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>

  <tr>
    <td>Rahul</td>
    <td>25</td>
  </tr>
</table>`,
    questions: [
      {
        questionEn: "What is the purpose of the <table> element?",
        questionBn: "<table> element কেন ব্যবহার করা হয়?",
        answerEn: "It is used to display structured data in rows and columns.",
        answerBn: "Row এবং column আকারে structured data দেখানোর জন্য।",
      },
      {
        questionEn: "What elements are used inside a table?",
        questionBn: "Table এর ভিতরে কোন element ব্যবহার হয়?",
        answerEn: "<tr>, <td>, and <th> elements.",
        answerBn: "<tr>, <td> এবং <th> element।",
      },
    ],
  },

  tr: {
    title: "HTML Table Row",
    description: {
      en: "The <tr> element defines a row inside a table.",
      bn: "<tr> element table এর একটি row নির্ধারণ করে।",
    },
    exampleCode: `<table>
  <tr>
    <td>HTML</td>
    <td>CSS</td>
  </tr>
</table>`,
    questions: [
      {
        questionEn: "What does <tr> represent in a table?",
        questionBn: "<tr> table এ কী নির্দেশ করে?",
        answerEn: "It represents a table row.",
        answerBn: "এটি table এর একটি row নির্দেশ করে।",
      },
    ],
  },

  td: {
    title: "HTML Table Data Cell",
    description: {
      en: "The <td> element defines a standard data cell inside a table row.",
      bn: "<td> element table row এর ভিতরে data cell নির্ধারণ করে।",
    },
    exampleCode: `<table>
  <tr>
    <td>HTML</td>
    <td>CSS</td>
  </tr>
</table>`,
    questions: [
      {
        questionEn: "What does <td> stand for?",
        questionBn: "<td> এর পূর্ণরূপ কী?",
        answerEn: "Table Data.",
        answerBn: "Table Data।",
      },
      {
        questionEn: "Where is <td> used?",
        questionBn: "<td> কোথায় ব্যবহার হয়?",
        answerEn: "Inside a <tr> element.",
        answerBn: "<tr> element এর ভিতরে।",
      },
    ],
  },

  th: {
    title: "HTML Table Header Cell",
    description: {
      en: "The <th> element defines a header cell in a table. Header cells are bold and centered by default.",
      bn: "<th> element table এর header cell নির্ধারণ করে। এটি default ভাবে bold এবং center থাকে।",
    },
    exampleCode: `<table>
  <tr>
    <th>Name</th>
    <th>Country</th>
  </tr>
</table>`,
    questions: [
      {
        questionEn: "What is the difference between <td> and <th>?",
        questionBn: "<td> এবং <th> এর পার্থক্য কী?",
        answerEn: "<th> defines header cells while <td> defines normal data cells.",
        answerBn: "<th> header cell এবং <td> data cell তৈরি করে।",
      },
      {
        questionEn: "How are <th> cells displayed by default?",
        questionBn: "<th> default ভাবে কেমন দেখায়?",
        answerEn: "Bold and centered.",
        answerBn: "Bold এবং center।",
      },
    ],
  },

};