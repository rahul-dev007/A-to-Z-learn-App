import type { JsTopic } from "./jsTopicsType";

export const jsTopics: Record<string, JsTopic> = {

  "what-is-javascript": {
    title: "What is JavaScript",

    description: {
      en: "JavaScript is a programming language used to make web pages interactive.",
      bn: "JavaScript একটি programming language যা web page কে interactive করে।"
    },

    exampleCode: `
<button onclick="alert('Hello')">Click</button>
`,

    realWorld: {
      en: "JavaScript is used for form validation, dynamic UI, API calls, and web applications.",
      bn: "JavaScript ব্যবহার করা হয় form validation, dynamic UI, API call এবং web app তৈরি করতে।"
    },

    questions: [
      {
        questionEn: "What is JavaScript?",
        questionBn: "JavaScript কি?",
        answerEn: "JavaScript is a programming language used to create interactive web pages.",
        answerBn: "JavaScript একটি programming language যা interactive web page তৈরি করতে ব্যবহৃত হয়।"
      }
    ]
  },

  variables: {
    title: "JavaScript Variables",

    description: {
      en: "Variables are used to store data values in JavaScript.",
      bn: "JavaScript এ data store করার জন্য variable ব্যবহার করা হয়।"
    },

    exampleCode: `
let name = "Rahul";
const age = 25;

console.log(name);
console.log(age);
`,

    questions: [
      {
        questionEn: "What are variables?",
        questionBn: "Variable কি?",
        answerEn: "Variables store data values in JavaScript.",
        answerBn: "Variable JavaScript এ data store করে।"
      }
    ]
  },

  "data-types": {
    title: "JavaScript Data Types",

    description: {
      en: "Data types define the type of value a variable holds.",
      bn: "Data type বলে দেয় variable এ কী ধরনের data আছে।"
    },

    exampleCode: `
let name = "Rahul";   // string
let age = 25;        // number
let isDev = true;    // boolean
`,

    questions: [
      {
        questionEn: "What are JavaScript data types?",
        questionBn: "JavaScript data type কি?",
        answerEn: "Common types are string, number, boolean, object, undefined and null.",
        answerBn: "Common type হলো string, number, boolean, object, undefined এবং null।"
      }
    ]
  },

  operators: {
    title: "JavaScript Operators",

    description: {
      en: "Operators perform operations on variables and values.",
      bn: "Operator variable বা value এর উপর operation করে।"
    },

    exampleCode: `
let a = 10;
let b = 5;

console.log(a + b);
console.log(a > b);
`,

    questions: [
      {
        questionEn: "What is an operator?",
        questionBn: "Operator কি?",
        answerEn: "Operators perform operations like addition, comparison, etc.",
        answerBn: "Operator addition, comparison ইত্যাদি operation করে।"
      }
    ]
  },

  comments: {
    title: "JavaScript Comments",

    description: {
      en: "Comments are used to explain code and are ignored by the browser.",
      bn: "Comment কোড ব্যাখ্যা করার জন্য ব্যবহার করা হয় এবং browser এগুলো ignore করে।"
    },

    exampleCode: `
// single line comment

/*
multi
line
comment
*/
`,

    questions: [
      {
        questionEn: "Why are comments used?",
        questionBn: "Comment কেন ব্যবহার করা হয়?",
        answerEn: "Comments help explain code.",
        answerBn: "Comment কোড বুঝতে সাহায্য করে।"
      }
    ]
  },

  "type-conversion": {
    title: "JavaScript Type Conversion",

    description: {
      en: "Type conversion changes one data type into another.",
      bn: "Type conversion একটি data type কে অন্য data type এ পরিবর্তন করে।"
    },

    exampleCode: `
let num = "10";

let result = Number(num);

console.log(result);
`,

    questions: [
      {
        questionEn: "What is type conversion?",
        questionBn: "Type conversion কি?",
        answerEn: "Type conversion converts one data type to another.",
        answerBn: "Type conversion একটি data type কে অন্য type এ পরিবর্তন করে।"
      }
    ]
  },

  "if-else": {
  title: "JavaScript if else",

  description: {
    en: "The if...else statement is used to execute different code depending on a condition.",
    bn: "if...else ব্যবহার করা হয় condition অনুযায়ী ভিন্ন code execute করার জন্য।"
  },

  exampleCode: `
let age = 18;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
`,

  realWorld: {
    en: "Used in login systems, form validation, and user permission checks.",
    bn: "Login system, form validation এবং user permission check এ ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "What is an if statement?",
      questionBn: "if statement কি?",
      answerEn: "The if statement runs code when a condition is true.",
      answerBn: "if statement condition true হলে code run করে।"
    }
  ]
},

"switch": {
  title: "JavaScript Switch Statement",

  description: {
    en: "The switch statement is used to perform different actions based on different conditions.",
    bn: "switch statement বিভিন্ন condition অনুযায়ী different action execute করে।"
  },

  exampleCode: `
let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Other day");
}
`,

  realWorld: {
    en: "Often used in menu systems and state handling.",
    bn: "Menu system এবং state handling এ ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "When should you use switch?",
      questionBn: "switch কখন ব্যবহার করা হয়?",
      answerEn: "Switch is used when multiple conditions are checked against one value.",
      answerBn: "একটি value এর সাথে অনেক condition check করতে switch ব্যবহার করা হয়।"
    }
  ]
},

"ternary-operator": {
  title: "JavaScript Ternary Operator",

  description: {
    en: "The ternary operator is a short form of if...else.",
    bn: "Ternary operator হলো if...else এর short form।"
  },

  exampleCode: `
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
`,

  realWorld: {
    en: "Commonly used in React UI rendering and conditional display.",
    bn: "React UI rendering এবং conditional display এ বেশি ব্যবহার হয়।"
  },

  questions: [
    {
      questionEn: "What is the ternary operator?",
      questionBn: "Ternary operator কি?",
      answerEn: "It is a shorthand for if...else using ? and :",
      answerBn: "? এবং : ব্যবহার করে if...else এর shortcut হলো ternary operator।"
    }
  ]
},

// loops

"for-loop": {
  title: "JavaScript For Loop",

  description: {
    en: "The for loop is used when you know how many times the loop should run.",
    bn: "যখন আগে থেকে জানা থাকে কতবার loop চলবে তখন for loop ব্যবহার করা হয়।"
  },

  exampleCode: `
for (let i = 0; i < 5; i++) {
  console.log(i);
}
`,

  realWorld: {
    en: "Used for iterating arrays, generating lists, and repeating tasks.",
    bn: "Array iterate করা, list generate করা এবং repeat task এর জন্য ব্যবহার হয়।"
  },

  questions: [
    {
      questionEn: "What are the three parts of a for loop?",
      questionBn: "for loop এর তিনটি অংশ কি?",
      answerEn: "Initialization, condition, and increment/decrement.",
      answerBn: "Initialization, condition এবং increment/decrement।"
    }
  ]
},

"while-loop": {
  title: "JavaScript While Loop",

  description: {
    en: "The while loop runs as long as a condition is true.",
    bn: "যতক্ষণ condition true থাকে ততক্ষণ while loop চলতে থাকে।"
  },

  exampleCode: `
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
`,

  realWorld: {
    en: "Used when the number of iterations is unknown.",
    bn: "যখন কতবার loop চলবে আগে থেকে জানা থাকে না তখন ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "What is the difference between for and while?",
      questionBn: "for এবং while এর পার্থক্য কি?",
      answerEn: "For loop is used when iteration count is known, while is used when it is unknown.",
      answerBn: "Iteration count জানা থাকলে for loop, না জানা থাকলে while loop।"
    }
  ]
},

"do-while-loop": {
  title: "JavaScript Do While Loop",

  description: {
    en: "The do...while loop runs the code at least once before checking the condition.",
    bn: "do...while loop প্রথমে code execute করে তারপর condition check করে।"
  },

  exampleCode: `
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
`,

  realWorld: {
    en: "Useful when code must run at least once.",
    bn: "যখন code কমপক্ষে একবার run করতেই হবে তখন ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "What is the main difference between while and do while?",
      questionBn: "while এবং do while এর প্রধান পার্থক্য কি?",
      answerEn: "Do while executes at least once even if the condition is false.",
      answerBn: "do while condition false হলেও অন্তত একবার run করে।"
    }
  ]
},

"for-of": {
  title: "JavaScript For Of Loop",

  description: {
    en: "The for...of loop is used to iterate over iterable values like arrays and strings.",
    bn: "Array বা string এর মতো iterable data iterate করার জন্য for...of ব্যবহার করা হয়।"
  },

  exampleCode: `
const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}
`,

  realWorld: {
    en: "Commonly used to loop through arrays.",
    bn: "Array loop করার জন্য বেশি ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "What does for...of iterate?",
      questionBn: "for...of কি iterate করে?",
      answerEn: "It iterates values of iterable objects.",
      answerBn: "Iterable object এর value iterate করে।"
    }
  ]
},

"for-in": {
  title: "JavaScript For In Loop",

  description: {
    en: "The for...in loop iterates over object keys.",
    bn: "for...in loop object এর key iterate করে।"
  },

  exampleCode: `
const user = {
  name: "Rahul",
  age: 25
};

for (let key in user) {
  console.log(key, user[key]);
}
`,

  realWorld: {
    en: "Used for iterating object properties.",
    bn: "Object properties iterate করার জন্য ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "What is the difference between for-in and for-of?",
      questionBn: "for-in এবং for-of এর পার্থক্য কি?",
      answerEn: "For-in loops through keys, while for-of loops through values.",
      answerBn: "for-in key iterate করে, for-of value iterate করে।"
    }
  ]
},

// functions
"function-declaration": {
  title: "JavaScript Function Declaration",

  description: {
    en: "A function declaration defines a named function using the function keyword.",
    bn: "function keyword ব্যবহার করে named function তৈরি করাকে function declaration বলে।"
  },

  exampleCode: `
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Rahul"));
`,

  realWorld: {
    en: "Used to create reusable logic in applications.",
    bn: "Application এ reusable logic তৈরি করতে ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "What is a function declaration?",
      questionBn: "Function declaration কি?",
      answerEn: "A named function defined using the function keyword.",
      answerBn: "function keyword ব্যবহার করে তৈরি named function।"
    },
    {
      questionEn: "Are function declarations hoisted?",
      questionBn: "Function declaration কি hoisting support করে?",
      answerEn: "Yes, function declarations are hoisted.",
      answerBn: "হ্যাঁ, function declaration hoisting support করে।"
    },
    {
      questionEn: "Can you call a function before declaring it?",
      questionBn: "Function declare করার আগে কি call করা যায়?",
      answerEn: "Yes, because of hoisting.",
      answerBn: "হ্যাঁ, hoisting এর কারণে করা যায়।"
    }
  ]
},

"function-expression": {
  title: "JavaScript Function Expression",

  description: {
    en: "A function expression stores a function inside a variable.",
    bn: "যখন একটি function variable এর মধ্যে store করা হয় তাকে function expression বলে।"
  },

  exampleCode: `
const greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Rahul"));
`,

  questions: [
    {
      questionEn: "What is a function expression?",
      questionBn: "Function expression কি?",
      answerEn: "A function stored in a variable.",
      answerBn: "Variable এর মধ্যে রাখা function।"
    },
    {
      questionEn: "Is function expression hoisted?",
      questionBn: "Function expression কি hoisted?",
      answerEn: "No, function expressions are not hoisted.",
      answerBn: "না, function expression hoisted হয় না।"
    },
    {
      questionEn: "What is the difference between declaration and expression?",
      questionBn: "Declaration এবং expression এর পার্থক্য কি?",
      answerEn: "Declaration is hoisted but expression is not.",
      answerBn: "Declaration hoisted হয় কিন্তু expression হয় না।"
    }
  ]
},

"arrow-function": {
  title: "JavaScript Arrow Function",

  description: {
    en: "Arrow functions provide a shorter syntax for writing functions.",
    bn: "Arrow function হলো function লেখার short syntax।"
  },

  exampleCode: `
const add = (a, b) => {
  return a + b;
};

console.log(add(2,3));
`,

  questions: [
    {
      questionEn: "What is an arrow function?",
      questionBn: "Arrow function কি?",
      answerEn: "A shorter syntax for writing functions using =>.",
      answerBn: "=> ব্যবহার করে লেখা function syntax।"
    },
    {
      questionEn: "Does arrow function have its own this?",
      questionBn: "Arrow function কি নিজের this রাখে?",
      answerEn: "No, arrow functions inherit this from parent scope.",
      answerBn: "না, parent scope থেকে this নেয়।"
    },
    {
      questionEn: "When should arrow functions be avoided?",
      questionBn: "Arrow function কখন avoid করা উচিত?",
      answerEn: "When using object methods that require their own this.",
      answerBn: "যখন object method এ নিজের this দরকার হয়।"
    }
  ]
},

"parameters-arguments": {
  title: "JavaScript Parameters vs Arguments",

  description: {
    en: "Parameters are variables defined in the function, while arguments are the values passed when calling it.",
    bn: "Function এ defined variable হলো parameter এবং call করার সময় দেওয়া value হলো argument।"
  },

  exampleCode: `
function add(a, b) { // parameters
  return a + b;
}

add(2,3); // arguments
`,

  questions: [
    {
      questionEn: "What is the difference between parameters and arguments?",
      questionBn: "Parameter এবং argument এর পার্থক্য কি?",
      answerEn: "Parameters are defined in function, arguments are passed during call.",
      answerBn: "Parameter function এ define হয়, argument call করার সময় দেয়া হয়।"
    },
    {
      questionEn: "What is default parameter?",
      questionBn: "Default parameter কি?",
      answerEn: "A parameter with a default value.",
      answerBn: "যার default value থাকে।"
    }
  ]
},

"return": {
  title: "JavaScript Return Statement",

  description: {
    en: "The return statement sends a value back from a function.",
    bn: "return function থেকে value ফেরত দেয়।"
  },

  exampleCode: `
function multiply(a,b){
  return a * b;
}

console.log(multiply(2,3));
`,

  questions: [
    {
      questionEn: "What does return do?",
      questionBn: "return কি করে?",
      answerEn: "It sends a value back from a function.",
      answerBn: "Function থেকে value ফেরত দেয়।"
    },
    {
      questionEn: "What happens if a function has no return?",
      questionBn: "Function এ return না থাকলে কি হয়?",
      answerEn: "It returns undefined.",
      answerBn: "undefined return করে।"
    },
    {
      questionEn: "Does return stop function execution?",
      questionBn: "return কি function execution থামায়?",
      answerEn: "Yes, return stops execution immediately.",
      answerBn: "হ্যাঁ, return execution বন্ধ করে।"
    }
  ]
},

// arrays
"array-basics": {
  title: "JavaScript Array Basics",

  description: {
    en: "An array is a data structure used to store multiple values in a single variable.",
    bn: "Array হলো একটি data structure যেখানে একাধিক value একটি variable এ রাখা হয়।"
  },

  exampleCode: `
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits.length);
`,

  questions: [
    {
      questionEn: "What is an array in JavaScript?",
      questionBn: "JavaScript এ array কি?",
      answerEn: "An array is a collection of multiple values stored in one variable.",
      answerBn: "Array হলো একাধিক value একটি variable এ রাখার উপায়।"
    },
    {
      questionEn: "How do you access array elements?",
      questionBn: "Array element কিভাবে access করা হয়?",
      answerEn: "Using index like array[0].",
      answerBn: "Index ব্যবহার করে যেমন array[0]।"
    },
    {
      questionEn: "What does array.length return?",
      questionBn: "array.length কি return করে?",
      answerEn: "It returns the number of elements in the array.",
      answerBn: "Array এর element সংখ্যা return করে।"
    }
  ]
},

"array-methods": {
  title: "JavaScript Array Methods",

  description: {
    en: "Array methods are built-in functions used to manipulate arrays.",
    bn: "Array method হলো built-in function যা array modify করতে ব্যবহার হয়।"
  },

  exampleCode: `
const numbers = [1,2,3];

numbers.push(4);
numbers.pop();

console.log(numbers);
`,

  questions: [
    {
      questionEn: "What are array methods?",
      questionBn: "Array method কি?",
      answerEn: "Built-in functions used to manipulate arrays.",
      answerBn: "Array পরিবর্তন করার built-in function।"
    },
    {
      questionEn: "What does push() do?",
      questionBn: "push() কি করে?",
      answerEn: "Adds an element at the end of the array.",
      answerBn: "Array এর শেষে element যোগ করে।"
    },
    {
      questionEn: "What does pop() do?",
      questionBn: "pop() কি করে?",
      answerEn: "Removes the last element from the array.",
      answerBn: "শেষ element remove করে।"
    }
  ]
},

"map": {
  title: "JavaScript Map Method",

  description: {
    en: "The map() method creates a new array by transforming each element.",
    bn: "map() প্রতিটি element পরিবর্তন করে নতুন array তৈরি করে।"
  },

  exampleCode: `
const numbers = [1,2,3];

const doubled = numbers.map(n => n * 2);

console.log(doubled);
`,

  questions: [
    {
      questionEn: "What does map() do?",
      questionBn: "map() কি করে?",
      answerEn: "It transforms each element and returns a new array.",
      answerBn: "প্রতিটি element পরিবর্তন করে নতুন array return করে।"
    },
    {
      questionEn: "Does map() modify the original array?",
      questionBn: "map() কি original array পরিবর্তন করে?",
      answerEn: "No, it returns a new array.",
      answerBn: "না, এটি নতুন array return করে।"
    },
    {
      questionEn: "Why is map used in React?",
      questionBn: "React এ map কেন ব্যবহার হয়?",
      answerEn: "To render lists dynamically.",
      answerBn: "Dynamic list render করার জন্য।"
    }
  ]
},

"filter": {
  title: "JavaScript Filter Method",

  description: {
    en: "The filter() method creates a new array with elements that match a condition.",
    bn: "filter() condition অনুযায়ী element নিয়ে নতুন array তৈরি করে।"
  },

  exampleCode: `
const numbers = [1,2,3,4];

const even = numbers.filter(n => n % 2 === 0);

console.log(even);
`,

  questions: [
    {
      questionEn: "What does filter() do?",
      questionBn: "filter() কি করে?",
      answerEn: "Returns elements that match a condition.",
      answerBn: "Condition match করা element return করে।"
    },
    {
      questionEn: "Does filter modify the original array?",
      questionBn: "filter কি original array পরিবর্তন করে?",
      answerEn: "No, it returns a new array.",
      answerBn: "না, এটি নতুন array return করে।"
    }
  ]
},

"reduce": {
  title: "JavaScript Reduce Method",

  description: {
    en: "The reduce() method reduces an array to a single value.",
    bn: "reduce() array কে একটি value এ রূপান্তর করে।"
  },

  exampleCode: `
const numbers = [1,2,3,4];

const sum = numbers.reduce((total,n) => total + n, 0);

console.log(sum);
`,

  questions: [
    {
      questionEn: "What does reduce() do?",
      questionBn: "reduce() কি করে?",
      answerEn: "It reduces an array to a single value.",
      answerBn: "Array কে একটি value এ রূপান্তর করে।"
    },
    {
      questionEn: "What is the accumulator in reduce?",
      questionBn: "reduce এ accumulator কি?",
      answerEn: "The accumulated result from previous iterations.",
      answerBn: "আগের iteration এর result।"
    }
  ]
},

// objects

"object-basics": {
  title: "JavaScript Object Basics",

  description: {
    en: "An object is a collection of key-value pairs used to store structured data.",
    bn: "Object হলো key-value pair এর collection যা structured data store করতে ব্যবহৃত হয়।"
  },

  exampleCode: `
const user = {
  name: "Rahul",
  age: 25,
  city: "Dhaka"
};

console.log(user.name);
console.log(user["age"]);
`,

  realWorld: {
    en: "Objects are used to represent real world entities like users, products, and orders.",
    bn: "Object ব্যবহার করা হয় user, product, order এর মতো real-world data store করতে।"
  },

  questions: [
    {
      questionEn: "What is an object in JavaScript?",
      questionBn: "JavaScript এ object কি?",
      answerEn: "An object is a collection of key-value pairs.",
      answerBn: "Object হলো key-value pair এর collection।"
    },
    {
      questionEn: "How do you access object properties?",
      questionBn: "Object property কিভাবে access করা হয়?",
      answerEn: "Using dot notation or bracket notation.",
      answerBn: "Dot notation বা bracket notation ব্যবহার করে।"
    },
    {
      questionEn: "What is the difference between array and object?",
      questionBn: "Array এবং object এর পার্থক্য কি?",
      answerEn: "Array stores values by index, object stores values by keys.",
      answerBn: "Array index দিয়ে value store করে, object key দিয়ে store করে।"
    }
  ]
},

"object-methods": {
  title: "JavaScript Object Methods",

  description: {
    en: "Object methods are functions stored inside objects.",
    bn: "Object method হলো object এর ভিতরে থাকা function।"
  },

  exampleCode: `
const user = {
  name: "Rahul",
  greet: function() {
    return "Hello " + this.name;
  }
};

console.log(user.greet());
`,

  questions: [
    {
      questionEn: "What is an object method?",
      questionBn: "Object method কি?",
      answerEn: "A function stored inside an object.",
      answerBn: "Object এর ভিতরে থাকা function।"
    },
    {
      questionEn: "What does 'this' refer to in object methods?",
      questionBn: "Object method এ this কি নির্দেশ করে?",
      answerEn: "It refers to the object that owns the method.",
      answerBn: "এটি সেই object কে নির্দেশ করে যেটি method ধারণ করে।"
    },
    {
      questionEn: "Can objects contain multiple methods?",
      questionBn: "Object এ কি একাধিক method থাকতে পারে?",
      answerEn: "Yes, objects can have multiple methods.",
      answerBn: "হ্যাঁ, object এ একাধিক method থাকতে পারে।"
    }
  ]
},

"destructuring": {
  title: "JavaScript Destructuring",

  description: {
    en: "Destructuring allows you to extract values from objects or arrays into variables.",
    bn: "Destructuring ব্যবহার করে object বা array থেকে value বের করে variable এ রাখা যায়।"
  },

  exampleCode: `
const user = {
  name: "Rahul",
  age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);
`,

  questions: [
    {
      questionEn: "What is destructuring?",
      questionBn: "Destructuring কি?",
      answerEn: "Extracting values from objects or arrays into variables.",
      answerBn: "Object বা array থেকে value বের করে variable এ রাখা।"
    },
    {
      questionEn: "Why is destructuring useful?",
      questionBn: "Destructuring কেন দরকার?",
      answerEn: "It makes code shorter and cleaner.",
      answerBn: "Code ছোট এবং পরিষ্কার করে।"
    },
    {
      questionEn: "Is destructuring used in React?",
      questionBn: "React এ destructuring ব্যবহার হয়?",
      answerEn: "Yes, commonly used with props and state.",
      answerBn: "হ্যাঁ, props এবং state এ বেশি ব্যবহার হয়।"
    }
  ]
},

"spread-operator": {
  title: "JavaScript Spread Operator",

  description: {
    en: "The spread operator (...) expands arrays or objects into individual elements.",
    bn: "Spread operator (...) array বা object কে expand করে।"
  },

  exampleCode: `
const user = {
  name: "Rahul",
  age: 25
};

const newUser = {
  ...user,
  city: "Dhaka"
};

console.log(newUser);
`,

  questions: [
    {
      questionEn: "What is the spread operator?",
      questionBn: "Spread operator কি?",
      answerEn: "It expands arrays or objects into individual elements.",
      answerBn: "Array বা object কে expand করে।"
    },
    {
      questionEn: "Why is spread operator used?",
      questionBn: "Spread operator কেন ব্যবহার করা হয়?",
      answerEn: "To copy or merge arrays and objects.",
      answerBn: "Array বা object copy বা merge করার জন্য।"
    },
    {
      questionEn: "Is spread operator used in React state updates?",
      questionBn: "React state update এ spread operator ব্যবহার হয়?",
      answerEn: "Yes, it helps create immutable updates.",
      answerBn: "হ্যাঁ, immutable update করতে সাহায্য করে।"
    }
  ]
},

// dom

"what-is-dom": {
  title: "What is DOM",

  description: {
    en: "The DOM (Document Object Model) is a programming interface that represents HTML as a tree of objects.",
    bn: "DOM (Document Object Model) হলো একটি interface যা HTML document কে object tree হিসেবে উপস্থাপন করে।"
  },

  exampleCode: `
console.log(document);
`,

  realWorld: {
    en: "DOM allows JavaScript to change HTML structure, styles, and content dynamically.",
    bn: "DOM ব্যবহার করে JavaScript HTML structure, style এবং content পরিবর্তন করতে পারে।"
  },

  questions: [
    {
      questionEn: "What is DOM?",
      questionBn: "DOM কি?",
      answerEn: "DOM is a programming interface for HTML documents.",
      answerBn: "DOM হলো HTML document এর programming interface।"
    },
    {
      questionEn: "Why is DOM important?",
      questionBn: "DOM কেন গুরুত্বপূর্ণ?",
      answerEn: "It allows JavaScript to interact with HTML.",
      answerBn: "এটি JavaScript কে HTML এর সাথে কাজ করতে দেয়।"
    },
    {
      questionEn: "How does the browser represent DOM?",
      questionBn: "Browser কিভাবে DOM represent করে?",
      answerEn: "As a tree structure of nodes.",
      answerBn: "Node এর tree structure হিসেবে।"
    }
  ]
},

"get-element": {
  title: "Get Element Methods",

  description: {
    en: "JavaScript provides methods to access HTML elements from the DOM.",
    bn: "JavaScript DOM থেকে HTML element access করার জন্য বিভিন্ন method দেয়।"
  },

  exampleCode: `
const title = document.getElementById("title");

console.log(title);
`,

  questions: [
    {
      questionEn: "What does getElementById do?",
      questionBn: "getElementById কি করে?",
      answerEn: "It selects an element by its id.",
      answerBn: "ID দিয়ে element select করে।"
    },
    {
      questionEn: "Name two DOM selection methods.",
      questionBn: "DOM element select করার দুটি method বলো।",
      answerEn: "getElementById and getElementsByClassName.",
      answerBn: "getElementById এবং getElementsByClassName।"
    },
    {
      questionEn: "Does getElementById return multiple elements?",
      questionBn: "getElementById কি একাধিক element return করে?",
      answerEn: "No, it returns only one element.",
      answerBn: "না, এটি একটি element return করে।"
    }
  ]
},

"query-selector": {
  title: "querySelector and querySelectorAll",

  description: {
    en: "querySelector selects the first matching element, while querySelectorAll selects all matching elements.",
    bn: "querySelector প্রথম matching element select করে এবং querySelectorAll সব element select করে।"
  },

  exampleCode: `
const item = document.querySelector(".item");

const items = document.querySelectorAll(".item");
`,

  questions: [
    {
      questionEn: "What is querySelector?",
      questionBn: "querySelector কি?",
      answerEn: "It selects the first matching element using CSS selectors.",
      answerBn: "CSS selector ব্যবহার করে প্রথম element select করে।"
    },
    {
      questionEn: "What does querySelectorAll return?",
      questionBn: "querySelectorAll কি return করে?",
      answerEn: "A NodeList of all matching elements.",
      answerBn: "সব matching element এর NodeList।"
    },
    {
      questionEn: "Which is more flexible: getElementById or querySelector?",
      questionBn: "getElementById নাকি querySelector বেশি flexible?",
      answerEn: "querySelector is more flexible.",
      answerBn: "querySelector বেশি flexible।"
    }
  ]
},

"change-content": {
  title: "Change HTML Content",

  description: {
    en: "JavaScript can change HTML content using properties like innerText, innerHTML, or textContent.",
    bn: "JavaScript innerText, innerHTML বা textContent ব্যবহার করে HTML content পরিবর্তন করতে পারে।"
  },

  exampleCode: `
document.getElementById("title").innerText = "Hello World";
`,

  questions: [
    {
      questionEn: "What is innerText?",
      questionBn: "innerText কি?",
      answerEn: "It changes or reads visible text inside an element.",
      answerBn: "Element এর visible text পরিবর্তন করে।"
    },
    {
      questionEn: "What is innerHTML?",
      questionBn: "innerHTML কি?",
      answerEn: "It changes HTML content inside an element.",
      answerBn: "Element এর HTML content পরিবর্তন করে।"
    },
    {
      questionEn: "What is the difference between innerText and innerHTML?",
      questionBn: "innerText এবং innerHTML এর পার্থক্য কি?",
      answerEn: "innerText handles text, innerHTML handles HTML markup.",
      answerBn: "innerText শুধু text handle করে, innerHTML HTML handle করে।"
    }
  ]
},

"change-style": {
  title: "Change Element Style",

  description: {
    en: "JavaScript can dynamically change CSS styles of elements.",
    bn: "JavaScript দিয়ে HTML element এর style পরিবর্তন করা যায়।"
  },

  exampleCode: `
const box = document.querySelector(".box");

box.style.backgroundColor = "red";
box.style.fontSize = "20px";
`,

  questions: [
    {
      questionEn: "How do you change CSS using JavaScript?",
      questionBn: "JavaScript দিয়ে CSS কিভাবে পরিবর্তন করা হয়?",
      answerEn: "Using element.style property.",
      answerBn: "element.style property ব্যবহার করে।"
    },
    {
      questionEn: "Why use classList instead of style?",
      questionBn: "style এর বদলে classList কেন ব্যবহার করা হয়?",
      answerEn: "To apply predefined CSS classes.",
      answerBn: "আগে থেকে তৈরি CSS class apply করার জন্য।"
    }
  ]
},

"event-listener": {
  title: "JavaScript Event Listener",

  description: {
    en: "Event listeners allow JavaScript to respond to user actions like clicks, typing, or scrolling.",
    bn: "Event listener ব্যবহার করে JavaScript user action যেমন click, typing বা scroll detect করতে পারে।"
  },

  exampleCode: `
const button = document.querySelector("button");

button.addEventListener("click", function() {
  alert("Button clicked");
});
`,

  questions: [
    {
      questionEn: "What is an event listener?",
      questionBn: "Event listener কি?",
      answerEn: "A function that runs when an event occurs.",
      answerBn: "Event ঘটলে যে function run হয়।"
    },
    {
      questionEn: "What are common DOM events?",
      questionBn: "Common DOM event কি কি?",
      answerEn: "click, input, change, submit.",
      answerBn: "click, input, change, submit।"
    },
    {
      questionEn: "What does addEventListener do?",
      questionBn: "addEventListener কি করে?",
      answerEn: "It attaches an event handler to an element.",
      answerBn: "Element এ event handler attach করে।"
    }
  ]
},

// async-javascript

"callbacks": {
  title: "JavaScript Callbacks",

  description: {
    en: "A callback is a function passed as an argument to another function and executed later.",
    bn: "Callback হলো এমন একটি function যা অন্য function এর argument হিসেবে পাঠানো হয় এবং পরে execute হয়।"
  },

  exampleCode: `
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Greeting finished");
}

greet("Rahul", done);
`,

  realWorld: {
    en: "Callbacks are used in event handling, timers, and asynchronous operations.",
    bn: "Callback ব্যবহার করা হয় event handling, timer এবং asynchronous কাজের জন্য।"
  },

  questions: [
    {
      questionEn: "What is a callback function?",
      questionBn: "Callback function কি?",
      answerEn: "A function passed into another function as an argument.",
      answerBn: "অন্য function এর argument হিসেবে দেওয়া function।"
    },
    {
      questionEn: "What is callback hell?",
      questionBn: "Callback hell কি?",
      answerEn: "Deeply nested callbacks that make code hard to read.",
      answerBn: "অনেক nested callback যার কারণে code পড়া কঠিন হয়।"
    },
    {
      questionEn: "Why were promises introduced?",
      questionBn: "Promise কেন introduce করা হয়?",
      answerEn: "To solve callback hell.",
      answerBn: "Callback hell সমস্যা সমাধান করার জন্য।"
    }
  ]
},

"promises": {
  title: "JavaScript Promises",

  description: {
    en: "A Promise represents a value that may be available now, later, or never.",
    bn: "Promise এমন একটি object যা ভবিষ্যতে resolve বা reject হতে পারে।"
  },

  exampleCode: `
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 1000);
});

promise.then(data => console.log(data));
`,

  questions: [
    {
      questionEn: "What is a Promise?",
      questionBn: "Promise কি?",
      answerEn: "An object representing the eventual completion of an async operation.",
      answerBn: "Async operation এর future result represent করা object।"
    },
    {
      questionEn: "What are the states of a promise?",
      questionBn: "Promise এর state কি কি?",
      answerEn: "Pending, fulfilled, rejected.",
      answerBn: "Pending, fulfilled, rejected।"
    },
    {
      questionEn: "What does .then() do?",
      questionBn: ".then() কি করে?",
      answerEn: "Handles the resolved value of a promise.",
      answerBn: "Promise resolve হলে value handle করে।"
    }
  ]
},

"async-await": {
  title: "JavaScript Async Await",

  description: {
    en: "Async/await is a modern way to handle asynchronous code using promises.",
    bn: "Async/await হলো promise ব্যবহার করে asynchronous code handle করার আধুনিক পদ্ধতি।"
  },

  exampleCode: `
async function getData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

getData();
`,

  questions: [
    {
      questionEn: "What does async keyword do?",
      questionBn: "async keyword কি করে?",
      answerEn: "It makes a function return a promise.",
      answerBn: "Function কে promise return করতে বাধ্য করে।"
    },
    {
      questionEn: "What does await do?",
      questionBn: "await কি করে?",
      answerEn: "It pauses execution until the promise resolves.",
      answerBn: "Promise resolve হওয়া পর্যন্ত execution pause করে।"
    },
    {
      questionEn: "Why is async/await better than promises?",
      questionBn: "Async/await promise এর চেয়ে কেন ভালো?",
      answerEn: "It makes asynchronous code easier to read.",
      answerBn: "Async code পড়তে সহজ করে।"
    }
  ]
},

"fetch-api": {
  title: "JavaScript Fetch API",

  description: {
    en: "The Fetch API is used to make HTTP requests to servers.",
    bn: "Fetch API ব্যবহার করা হয় server এ HTTP request পাঠানোর জন্য।"
  },

  exampleCode: `
fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data));
`,

  realWorld: {
    en: "Fetch is used to load data from APIs in modern web applications.",
    bn: "Modern web application এ API থেকে data load করতে fetch ব্যবহার করা হয়।"
  },

  questions: [
    {
      questionEn: "What is Fetch API?",
      questionBn: "Fetch API কি?",
      answerEn: "A modern way to make HTTP requests.",
      answerBn: "HTTP request করার আধুনিক পদ্ধতি।"
    },
    {
      questionEn: "What does fetch return?",
      questionBn: "fetch কি return করে?",
      answerEn: "A Promise.",
      answerBn: "একটি Promise।"
    },
    {
      questionEn: "How do you convert fetch response to JSON?",
      questionBn: "fetch response JSON এ কিভাবে convert করা হয়?",
      answerEn: "Using response.json().",
      answerBn: "response.json() ব্যবহার করে।"
    }
  ]
},

// advanced

"scope": {
  title: "JavaScript Scope",

  description: {
    en: "Scope defines where variables can be accessed in a program.",
    bn: "Scope নির্ধারণ করে একটি variable কোথায় access করা যাবে।"
  },

  exampleCode: `
let globalVar = "Hello";

function test() {
  let localVar = "World";
  console.log(globalVar);
}

test();
`,

  questions: [
    {
      questionEn: "What is scope in JavaScript?",
      questionBn: "JavaScript এ scope কি?",
      answerEn: "Scope defines where variables are accessible.",
      answerBn: "Scope বলে দেয় variable কোথায় access করা যাবে।"
    },
    {
      questionEn: "What are the types of scope?",
      questionBn: "Scope এর ধরন কি কি?",
      answerEn: "Global scope, function scope, block scope.",
      answerBn: "Global scope, function scope, block scope।"
    },
    {
      questionEn: "What creates block scope?",
      questionBn: "Block scope কি দিয়ে তৈরি হয়?",
      answerEn: "let and const create block scope.",
      answerBn: "let এবং const block scope তৈরি করে।"
    }
  ]
},

"closures": {
  title: "JavaScript Closures",

  description: {
    en: "A closure occurs when a function remembers variables from its outer scope.",
    bn: "Closure তখন হয় যখন একটি function তার outer scope এর variable মনে রাখে।"
  },

  exampleCode: `
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
`,

  questions: [
    {
      questionEn: "What is a closure?",
      questionBn: "Closure কি?",
      answerEn: "A function that remembers variables from its outer scope.",
      answerBn: "Outer scope এর variable মনে রাখা function।"
    },
    {
      questionEn: "Why are closures useful?",
      questionBn: "Closure কেন দরকার?",
      answerEn: "To create private variables and maintain state.",
      answerBn: "Private variable এবং state বজায় রাখতে।"
    },
    {
      questionEn: "Where are closures commonly used?",
      questionBn: "Closure কোথায় বেশি ব্যবহার হয়?",
      answerEn: "In callbacks, event handlers, and functional programming.",
      answerBn: "Callback, event handler এবং functional programming এ।"
    }
  ]
},
"hoisting": {
  title: "JavaScript Hoisting",

  description: {
    en: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope.",
    bn: "Hoisting হলো JavaScript এর behavior যেখানে declaration scope এর উপরে নিয়ে যায়।"
  },

  exampleCode: `
console.log(x);
var x = 10;
`,

  questions: [
    {
      questionEn: "What is hoisting?",
      questionBn: "Hoisting কি?",
      answerEn: "JavaScript moves variable and function declarations to the top of the scope.",
      answerBn: "JavaScript declaration কে scope এর উপরে নিয়ে যায়।"
    },
    {
      questionEn: "Are let and const hoisted?",
      questionBn: "let এবং const কি hoisted?",
      answerEn: "Yes, but they stay in the temporal dead zone.",
      answerBn: "হ্যাঁ, কিন্তু temporal dead zone এ থাকে।"
    },
    {
      questionEn: "Which is fully hoisted: var or let?",
      questionBn: "var নাকি let পুরোপুরি hoisted?",
      answerEn: "var is fully hoisted.",
      answerBn: "var পুরোপুরি hoisted হয়।"
    }
  ]
},

"this-keyword": {
  title: "JavaScript This Keyword",

  description: {
    en: "The 'this' keyword refers to the object that is currently executing the function.",
    bn: "this keyword সেই object কে নির্দেশ করে যেটি function execute করছে।"
  },

  exampleCode: `
const user = {
  name: "Rahul",
  greet() {
    console.log(this.name);
  }
};

user.greet();
`,

  questions: [
    {
      questionEn: "What is 'this' in JavaScript?",
      questionBn: "JavaScript এ this কি?",
      answerEn: "It refers to the object that calls the function.",
      answerBn: "যে object function call করে তাকে নির্দেশ করে।"
    },
    {
      questionEn: "Does arrow function have its own this?",
      questionBn: "Arrow function কি নিজের this রাখে?",
      answerEn: "No, it inherits this from its parent scope.",
      answerBn: "না, parent scope থেকে this নেয়।"
    },
    {
      questionEn: "What does this refer to in a method?",
      questionBn: "Method এ this কি নির্দেশ করে?",
      answerEn: "The object that owns the method.",
      answerBn: "যে object method ধারণ করে।"
    }
  ]
},

"modules": {
  title: "JavaScript Modules",

  description: {
    en: "Modules allow JavaScript code to be split into reusable files.",
    bn: "Module ব্যবহার করে JavaScript code আলাদা reusable file এ ভাগ করা যায়।"
  },

  exampleCode: `
export function add(a,b){
  return a+b;
}

import { add } from "./math.js";
`,

  questions: [
    {
      questionEn: "What is a JavaScript module?",
      questionBn: "JavaScript module কি?",
      answerEn: "A separate file that exports or imports code.",
      answerBn: "Code export বা import করা যায় এমন আলাদা file।"
    },
    {
      questionEn: "What is the difference between export and default export?",
      questionBn: "export এবং default export এর পার্থক্য কি?",
      answerEn: "Default export exports one main value.",
      answerBn: "Default export একটি main value export করে।"
    },
    {
      questionEn: "Why are modules important?",
      questionBn: "Module কেন গুরুত্বপূর্ণ?",
      answerEn: "They improve code organization and reusability.",
      answerBn: "Code organization এবং reusability বাড়ায়।"
    }
  ]
},


};