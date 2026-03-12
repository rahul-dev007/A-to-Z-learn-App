export type CssNode = {
  name: string;
  children?: CssNode[];
};

export const cssTree: CssNode = {
  name: "css",
  children: [
    {
      name: "fundamentals",
      children: [
        { name: "what-is-css" },
        { name: "css-syntax" },
        { name: "selectors" },
        { name: "comments" },
        { name: "colors" },
        { name: "units" },
      ],
    },
    {
      name: "box-model",
      children: [
        { name: "margin" },
        { name: "border" },
        { name: "padding" },
        { name: "width-height" },
        { name: "box-sizing" },
      ],
    },
    {
      name: "text-style",
      children: [
        { name: "font-family" },
        { name: "font-size" },
        { name: "font-weight" },
        { name: "line-height" },
        { name: "text-align" },
      ],
    },
    {
      name: "layout",
      children: [
        { name: "display" },
        { name: "position" },
        { name: "z-index" },
        { name: "overflow" },
      ],
    },
    {
      name: "flexbox",
      children: [
        { name: "flex-container" },
        { name: "justify-content" },
        { name: "align-items" },
        { name: "flex-wrap" },
        { name: "gap" },
      ],
    },
    {
      name: "grid",
      children: [
        { name: "grid-container" },
        { name: "grid-template" },
        { name: "grid-gap" },
        { name: "grid-area" },
      ],
    },
    {
      name: "responsive",
      children: [
        { name: "media-query" },
        { name: "mobile-first" },
        { name: "responsive-layout" },
      ],
    },
  ],
};