import { htmlTopics } from "./html/htmlTopic";
import { textTopics } from "./html/textTopics";
import { mediaTopics } from "./html/mediaTopics";
import { listTableTopics } from "./html/listTableTopics";
import { formTopics } from "./html/formTopics";
import { semanticTopics } from "./html/semanticTopics";

import { cssTopics } from "./css/cssTopics";

import { jsTopics } from "./js/jsTopics";

import type { HtmlTopic } from "./html/htmlTopic";
import type { CssTopic } from "./css/cssTopicsType";
import type { JsTopic } from "./js/jsTopicsType";

export type Topic = HtmlTopic | CssTopic | JsTopic;

const topicGroups = [
  htmlTopics,
  textTopics,
  mediaTopics,
  listTableTopics,
  formTopics,
  semanticTopics,
  cssTopics,
  jsTopics,
];

export const allTopics: Record<string, Topic> =
  Object.assign({}, ...topicGroups);