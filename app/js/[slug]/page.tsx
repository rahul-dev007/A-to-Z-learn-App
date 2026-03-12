import Link from "next/link";
import { allTopics } from "@/lib/allTopics";
import { redirect, notFound } from "next/navigation";
import QuestionBox from "../../components/QuestionBox";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function JsTopicPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "js") {
    redirect("/js");
  }

  const topic = allTopics[slug];

  if (!topic) {
    return notFound();
  }

  const topicKeys = Object.keys(allTopics);
  const currentIndex = topicKeys.indexOf(slug);

  const prevTopic = topicKeys[currentIndex - 1];
  const nextTopic = topicKeys[currentIndex + 1];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white rounded-3xl p-10 shadow-lg overflow-hidden">

          <div className="absolute -top-6 -right-6 text-white/10 text-[120px] font-bold pointer-events-none">
            {slug}
          </div>

          <span className="inline-block bg-white/20 backdrop-blur-md text-sm px-4 py-1 rounded-full mb-6">
            JavaScript
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {topic.title}
          </h1>

          <p className="text-lg opacity-90">
            Learn {slug} in JavaScript with examples & interview questions
          </p>
        </div>

        {/* Explanation */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">
            📘 Explanation
          </h2>

          <div className="space-y-4 text-lg">
            <p>{topic.description.en}</p>
            <p className="text-gray-600">🇧🇩 {topic.description.bn}</p>
          </div>

          {topic.exampleCode && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">
                💻 Example
              </h3>

              <pre className="bg-black text-green-400 p-6 rounded-xl overflow-x-auto text-sm">
                {topic.exampleCode}
              </pre>
            </div>
          )}
        </div>

        {/* Real World */}
        {topic.realWorld && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              🌍 Real World Usage
            </h2>

            <p>{topic.realWorld.en}</p>
            <p className="text-gray-600">{topic.realWorld.bn}</p>
          </div>
        )}

        {/* Questions */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            🎯 Important Interview Questions
          </h2>

          <div className="space-y-6">
            {topic.questions.map((q, index) => (
              <QuestionBox
                key={index}
                questionEn={q.questionEn}
                questionBn={q.questionBn}
                answerEn={q.answerEn}
                answerBn={q.answerBn}
              />
            ))}
          </div>
        </div>

        {/* Next / Previous Navigation */}
        <div className="flex justify-between border-t pt-10">

          {prevTopic ? (
            <Link
              href={`/js/${prevTopic}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ← Previous
            </Link>
          ) : <div />}

          {nextTopic && (
            <Link
              href={`/js/${nextTopic}`}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Next →
            </Link>
          )}

        </div>

      </div>
    </div>
  );
}