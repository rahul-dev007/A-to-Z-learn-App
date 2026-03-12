









































































import type { HtmlTopic } from "./htmlTopic";

export const semanticTopics: Record<string, HtmlTopic> = {

  header: {
    title: "HTML Header",
    description: {
      en: "The <header> element represents introductory content for a webpage or section. It usually contains the logo, navigation links, headings, or introductory information.",
      bn: "<header> element একটি webpage বা section এর introductory অংশ নির্দেশ করে। এখানে সাধারণত logo, navigation menu, heading বা introduction থাকে।",
    },
    realWorld: {
      en: "Website logos, navigation bars, and top sections are usually placed inside the header element.",
      bn: "Website logo, navigation bar এবং top section সাধারণত header element এর ভিতরে থাকে।",
    },
    exampleCode: `<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </nav>
</header>`,
    questions: [
      {
        questionEn: "What is the purpose of the <header> element?",
        questionBn: "<header> element এর কাজ কী?",
        answerEn: "It defines the introductory content of a page or section.",
        answerBn: "এটি page বা section এর introductory content নির্ধারণ করে।",
      },
    ],
  },

  nav: {
    title: "HTML Navigation",
    description: {
      en: "The <nav> element defines a section of navigation links that help users move between pages or sections of a website.",
      bn: "<nav> element navigation link এর একটি section নির্ধারণ করে যা ব্যবহারকারীকে ওয়েবসাইটের বিভিন্ন পেজে যেতে সাহায্য করে।",
    },
    realWorld: {
      en: "Main menus, sidebar menus, and pagination links are usually placed inside the nav element.",
      bn: "Main menu, sidebar menu এবং pagination link সাধারণত nav element এর ভিতরে থাকে।",
    },
    exampleCode: `<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>`,
    questions: [
      {
        questionEn: "What does the <nav> element represent?",
        questionBn: "<nav> element কী নির্দেশ করে?",
        answerEn: "A section containing navigation links.",
        answerBn: "Navigation link এর একটি section।",
      },
    ],
  },

  main: {
    title: "HTML Main",
    description: {
      en: "The <main> element represents the main content of the webpage. It should contain the primary information of the page.",
      bn: "<main> element ওয়েবপেজের প্রধান content নির্দেশ করে। এখানে পেজের মূল তথ্য থাকে।",
    },
    realWorld: {
      en: "Blog articles, product descriptions, and main application content are usually inside the main element.",
      bn: "Blog article, product description এবং main application content সাধারণত main element এর ভিতরে থাকে।",
    },
    exampleCode: `<main>
  <h1>Welcome to my blog</h1>
  <p>This is the main content of the page.</p>
</main>`,
    questions: [
      {
        questionEn: "How many <main> elements should exist in a page?",
        questionBn: "একটি পেজে কয়টি <main> element থাকা উচিত?",
        answerEn: "Only one main element should exist per page.",
        answerBn: "একটি পেজে সাধারণত একটি main element থাকে।",
      },
    ],
  },

  section: {
    title: "HTML Section",
    description: {
      en: "The <section> element defines a thematic grouping of content, usually with a heading.",
      bn: "<section> element একটি related content group নির্দেশ করে, যেখানে সাধারণত একটি heading থাকে।",
    },
    realWorld: {
      en: "Website sections like features, services, testimonials, and pricing blocks often use the section element.",
      bn: "Feature section, service section, testimonial section এবং pricing section এ section element ব্যবহার করা হয়।",
    },
    exampleCode: `<section>
  <h2>Our Services</h2>
  <p>We build modern web applications.</p>
</section>`,
    questions: [
      {
        questionEn: "What is the purpose of the <section> element?",
        questionBn: "<section> element এর কাজ কী?",
        answerEn: "It groups related content together.",
        answerBn: "এটি related content একসাথে group করে।",
      },
    ],
  },

  article: {
    title: "HTML Article",
    description: {
      en: "The <article> element represents independent, self-contained content that can be distributed or reused.",
      bn: "<article> element self-contained content নির্দেশ করে যা আলাদাভাবে ব্যবহার করা যায়।",
    },
    realWorld: {
      en: "Blog posts, news articles, forum posts, and product cards are often marked with the article element.",
      bn: "Blog post, news article, forum post এবং product card সাধারণত article element দিয়ে তৈরি হয়।",
    },
    exampleCode: `<article>
  <h2>How to Learn HTML</h2>
  <p>This article explains HTML basics.</p>
</article>`,
    questions: [
      {
        questionEn: "What type of content should be inside <article>?",
        questionBn: "<article> এর ভিতরে কী ধরনের content থাকে?",
        answerEn: "Independent and reusable content like blog posts.",
        answerBn: "Independent content যেমন blog post।",
      },
    ],
  },

  aside: {
    title: "HTML Aside",
    description: {
      en: "The <aside> element defines content that is indirectly related to the main content.",
      bn: "<aside> element এমন content নির্দেশ করে যা main content এর সাথে সম্পর্কিত কিন্তু প্রধান নয়।",
    },
    realWorld: {
      en: "Sidebars, advertisements, related links, and author information often appear inside aside.",
      bn: "Sidebar, advertisement, related link এবং author information সাধারণত aside এ থাকে।",
    },
    exampleCode: `<aside>
  <h3>Related Articles</h3>
  <p>Learn CSS next.</p>
</aside>`,
    questions: [
      {
        questionEn: "Where is the <aside> element commonly used?",
        questionBn: "<aside> সাধারণত কোথায় ব্যবহার হয়?",
        answerEn: "Sidebars and related content sections.",
        answerBn: "Sidebar এবং related content section এ।",
      },
    ],
  },

  footer: {
    title: "HTML Footer",
    description: {
      en: "The <footer> element represents the footer section of a webpage or section. It often contains copyright information, contact links, and legal notices.",
      bn: "<footer> element একটি পেজ বা section এর footer অংশ নির্দেশ করে। এখানে সাধারণত copyright, contact link এবং legal information থাকে।",
    },
    realWorld: {
      en: "Most websites place copyright text, social links, and company information in the footer.",
      bn: "বেশিরভাগ ওয়েবসাইট footer এ copyright text, social link এবং company information রাখে।",
    },
    exampleCode: `<footer>
  <p>© 2026 My Website</p>
</footer>`,
    questions: [
      {
        questionEn: "What is the purpose of the <footer> element?",
        questionBn: "<footer> element এর কাজ কী?",
        answerEn: "It defines the footer section of a page or section.",
        answerBn: "এটি page বা section এর footer অংশ নির্ধারণ করে।",
      },
    ],
  },

};