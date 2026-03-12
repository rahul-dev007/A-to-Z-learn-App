import type { HtmlTopic } from "./htmlTopic";

export const formTopics: Record<string, HtmlTopic> = {

  form: {
    title: "HTML Form",
    description: {
      en: "The <form> element is used to collect user input and send it to a server. Forms are essential for login pages, registration forms, search boxes, and contact forms.",
      bn: "<form> element ব্যবহারকারীর কাছ থেকে input সংগ্রহ করে server এ পাঠানোর জন্য ব্যবহৃত হয়। Login page, registration form, search box এবং contact form তৈরিতে form ব্যবহার করা হয়।",
    },
    realWorld: {
      en: "Forms are used in login systems, checkout pages, contact forms, surveys, and data collection systems.",
      bn: "Login system, checkout page, contact form, survey এবং data collection system এ form ব্যবহার করা হয়।",
    },
    exampleCode: `<form action="/submit" method="POST">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>`,
    questions: [
      {
        questionEn: "What is the purpose of the <form> element?",
        questionBn: "<form> element এর কাজ কী?",
        answerEn: "It collects user input and sends it to a server.",
        answerBn: "এটি ব্যবহারকারীর input সংগ্রহ করে server এ পাঠায়।",
      },
      {
        questionEn: "What does the action attribute do?",
        questionBn: "action attribute কী করে?",
        answerEn: "It defines where the form data will be sent.",
        answerBn: "Form data কোথায় পাঠানো হবে তা নির্ধারণ করে।",
      },
      {
        questionEn: "What does the method attribute specify?",
        questionBn: "method attribute কী নির্ধারণ করে?",
        answerEn: "It specifies the HTTP method like GET or POST.",
        answerBn: "এটি HTTP method নির্ধারণ করে যেমন GET বা POST।",
      },
    ],
  },

  input: {
    title: "HTML Input",
    description: {
      en: "The <input> element is the most important form control. It allows users to enter different types of data such as text, email, password, numbers, and files.",
      bn: "<input> element হলো সবচেয়ে গুরুত্বপূর্ণ form control। এটি text, email, password, number, file ইত্যাদি বিভিন্ন ধরনের input নেওয়ার জন্য ব্যবহৃত হয়।",
    },
    realWorld: {
      en: "Input fields are used in login forms, search bars, registration forms, payment forms, and user profile settings.",
      bn: "Login form, search bar, registration form, payment form এবং profile settings এ input field ব্যবহার করা হয়।",
    },
    exampleCode: `<input type="text" placeholder="Enter your name">

<input type="email" placeholder="Enter email">

<input type="password" placeholder="Password">`,
    questions: [
      {
        questionEn: "What is the purpose of the <input> element?",
        questionBn: "<input> element এর কাজ কী?",
        answerEn: "It allows users to enter data in forms.",
        answerBn: "এটি form এ user data প্রবেশ করার সুযোগ দেয়।",
      },
      {
        questionEn: "What does the type attribute do?",
        questionBn: "type attribute কী করে?",
        answerEn: "It defines the type of input such as text, email, password, etc.",
        answerBn: "এটি input এর ধরন নির্ধারণ করে যেমন text, email, password।",
      },
      {
        questionEn: "Is <input> a void element?",
        questionBn: "<input> কি void element?",
        answerEn: "Yes, it does not have a closing tag.",
        answerBn: "হ্যাঁ, এর closing tag নেই।",
      },
    ],
  },

  label: {
    title: "HTML Label",
    description: {
      en: "The <label> element defines a label for an input element. It improves accessibility and allows users to click the label to focus the input.",
      bn: "<label> element input field এর জন্য label নির্ধারণ করে। এটি accessibility উন্নত করে এবং label এ click করলে input focus হয়।",
    },
    exampleCode: `<label for="email">Email</label>
<input type="email" id="email">`,
    questions: [
      {
        questionEn: "Why is the <label> element important?",
        questionBn: "<label> element কেন গুরুত্বপূর্ণ?",
        answerEn: "It improves accessibility and usability of forms.",
        answerBn: "এটি form এর accessibility ও usability উন্নত করে।",
      },
      {
        questionEn: "What does the for attribute do?",
        questionBn: "for attribute কী করে?",
        answerEn: "It connects the label with an input element using the id.",
        answerBn: "এটি label কে input এর সাথে id ব্যবহার করে সংযুক্ত করে।",
      },
    ],
  },

  textarea: {
    title: "HTML Textarea",
    description: {
      en: "The <textarea> element defines a multi-line text input field.",
      bn: "<textarea> element multi-line text input নেওয়ার জন্য ব্যবহৃত হয়।",
    },
    realWorld: {
      en: "Textarea is used in comment systems, contact forms, feedback forms, and messaging apps.",
      bn: "Comment system, contact form, feedback form এবং messaging app এ textarea ব্যবহার করা হয়।",
    },
    exampleCode: `<textarea rows="4" cols="40">
Write your message here...
</textarea>`,
    questions: [
      {
        questionEn: "What is the difference between <input> and <textarea>?",
        questionBn: "<input> এবং <textarea> এর পার্থক্য কী?",
        answerEn: "<input> is single-line input while <textarea> is multi-line.",
        answerBn: "<input> single-line input এবং <textarea> multi-line input।",
      },
    ],
  },

  select: {
    title: "HTML Select (Dropdown)",
    description: {
      en: "The <select> element creates a dropdown list where users can choose one option.",
      bn: "<select> element dropdown list তৈরি করে যেখানে ব্যবহারকারী একটি option নির্বাচন করতে পারে।",
    },
    exampleCode: `<select>
  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>
</select>`,
    questions: [
      {
        questionEn: "What does the <select> element do?",
        questionBn: "<select> element কী করে?",
        answerEn: "It creates a dropdown selection list.",
        answerBn: "এটি dropdown selection list তৈরি করে।",
      },
    ],
  },

  option: {
    title: "HTML Option",
    description: {
      en: "The <option> element defines items inside a dropdown list.",
      bn: "<option> element dropdown list এর item নির্ধারণ করে।",
    },
    exampleCode: `<select>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
</select>`,
    questions: [
      {
        questionEn: "Where is the <option> element used?",
        questionBn: "<option> কোথায় ব্যবহার হয়?",
        answerEn: "Inside the <select> element.",
        answerBn: "<select> element এর ভিতরে।",
      },
    ],
  },

  button: {
    title: "HTML Button",
    description: {
      en: "The <button> element creates a clickable button used to submit forms or trigger actions.",
      bn: "<button> element একটি clickable button তৈরি করে যা form submit করা বা action trigger করার জন্য ব্যবহৃত হয়।",
    },
    realWorld: {
      en: "Buttons are used for form submission, navigation, modal triggers, and interactive UI actions.",
      bn: "Form submit, navigation, modal trigger এবং interactive UI action এ button ব্যবহার করা হয়।",
    },
    exampleCode: `<button type="submit">Submit Form</button>

<button type="button">Click Me</button>`,
    questions: [
      {
        questionEn: "What is the difference between button types?",
        questionBn: "Button type এর পার্থক্য কী?",
        answerEn: "submit sends form data, button triggers JS actions, reset clears form fields.",
        answerBn: "submit form পাঠায়, button JS action চালায়, reset form clear করে।",
      },
    ],
  },

};