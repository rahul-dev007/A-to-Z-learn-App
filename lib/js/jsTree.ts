export type JsNode = {
  name: string;
  children?: JsNode[];
};

export const jsTree: JsNode = {
  name: "js",
  children: [
    {
      name: "fundamentals",
      children: [
        { name: "what-is-javascript" },
        { name: "variables" },
        { name: "data-types" },
        { name: "operators" },
        { name: "comments" },
        { name: "type-conversion" },
      ],
    },
    {
      name: "control-flow",
      children: [
        { name: "if-else" },
        { name: "switch" },
        { name: "ternary-operator" },
      ],
    },
    {
      name: "loops",
      children: [
        { name: "for-loop" },
        { name: "while-loop" },
        { name: "do-while-loop" },
        { name: "for-of" },
        { name: "for-in" },
      ],
    },
    {
      name: "functions",
      children: [
        { name: "function-declaration" },
        { name: "function-expression" },
        { name: "arrow-function" },
        { name: "parameters-arguments" },
        { name: "return" },
      ],
    },
    {
      name: "arrays",
      children: [
        { name: "array-basics" },
        { name: "array-methods" },
        { name: "map" },
        { name: "filter" },
        { name: "reduce" },
      ],
    },
    {
      name: "objects",
      children: [
        { name: "object-basics" },
        { name: "object-methods" },
        { name: "destructuring" },
        { name: "spread-operator" },
      ],
    },
    {
      name: "dom",
      children: [
        { name: "what-is-dom" },
        { name: "get-element" },
        { name: "query-selector" },
        { name: "change-content" },
        { name: "change-style" },
        { name: "event-listener" },
      ],
    },
    {
      name: "async-javascript",
      children: [
        { name: "callbacks" },
        { name: "promises" },
        { name: "async-await" },
        { name: "fetch-api" },
      ],
    },
    {
      name: "advanced",
      children: [
        { name: "scope" },
        { name: "closures" },
        { name: "hoisting" },
        { name: "this-keyword" },
        { name: "modules" },
      ],
    },
  ],
};