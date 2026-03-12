"use client";

import { useState } from "react";

type Props = {
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
};

export default function QuestionBox({
  questionEn,
  questionBn,
  answerEn,
  answerBn,
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="group border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

      {/* Question Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          🇧🇩 {questionBn}
        </h3>

        <p className="text-gray-600">
          🇬🇧 {questionEn}
        </p>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShow(!show)}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        {show ? "Hide Answer ▲" : "Show Answer ▼"}
      </button>

      {/* Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          show ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
          <p className="text-gray-800">
            <span className="font-semibold">🇧🇩 Answer:</span> {answerBn}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold">🇬🇧 Answer:</span> {answerEn}
          </p>
        </div>
      </div>
    </div>
  );
}