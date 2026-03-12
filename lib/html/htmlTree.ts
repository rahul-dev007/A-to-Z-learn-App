export type HtmlNode = {
  name: string;
  children?: HtmlNode[];
};

export const htmlTree: HtmlNode = {
  name: "html",
  children: [
    {
      name: "fundamentals",
      children: [
        { name: "what-is-html" },
        { name: "structure" },
        { name: "element" },
        { name: "tag" },
        { name: "attribute" },
        { name: "comment" },
      ],
    },
    {
      name: "text",
      children: [
        { name: "heading" },
        { name: "paragraph" },
        { name: "formatting" },
        { name: "blockquote" },
        { name: "code" },
        { name: "pre" },
      ],
    },
    {
      name: "media",
      children: [
        { name: "a" },
        { name: "img" },
        { name: "audio" },
        { name: "video" },
        { name: "iframe" },
      ],
    },
    {
      name: "list-table",
      children: [
        { name: "ul" },
        { name: "ol" },
        { name: "li" },
        { name: "table" },
        { name: "tr" },
        { name: "td" },
        { name: "th" },
      ],
    },
    {
      name: "form",
      children: [
        { name: "form" },
        { name: "input" },
        { name: "label" },
        { name: "textarea" },
        { name: "select" },
        { name: "option" },
        { name: "button" },
      ],
    },
    {
      name: "semantic",
      children: [
        { name: "header" },
        { name: "nav" },
        { name: "main" },
        { name: "section" },
        { name: "article" },
        { name: "aside" },
        { name: "footer" },
      ],
    },
  ],
};