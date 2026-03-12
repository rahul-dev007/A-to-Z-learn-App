"use client";
import { useState } from "react";

export default function HtmlHome() {
  const progress = 20;
  const [activeBlock, setActiveBlock] = useState<string | null>(null);

  const blockBase =
    "p-5 transition-all duration-300 cursor-pointer font-semibold";

  const getBlockStyle = (name: string, bg: string) =>
    `${blockBase} ${bg} ${
      activeBlock === name
        ? "scale-105 shadow-xl ring-2 ring-black"
        : "hover:scale-105 hover:shadow-lg"
    }`;

  return (
    <div className="space-y-12 bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl">

      {/* Title */}
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          HTML Structure Overview
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Understand how HTML elements are structured.
        </p>
      </div>

      {/* Progress */}
      <div className="space-y-3">
        <p className="text-sm font-semibold">Your Progress</p>

        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-700 h-4 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-gray-600">
          {progress}% completed
        </p>
      </div>

      {/* Interactive Structure */}
      <div className="rounded-2xl overflow-hidden border shadow-lg">

        <div
          onClick={() => setActiveBlock("header")}
          className={getBlockStyle("header", "bg-red-300")}
        >
          &lt;header&gt;
        </div>

        <div
          onClick={() => setActiveBlock("nav")}
          className={getBlockStyle("nav", "bg-blue-300")}
        >
          &lt;nav&gt;
        </div>

        <div className="bg-green-200 p-6">

          <div
            onClick={() => setActiveBlock("main")}
            className={getBlockStyle("main", "bg-green-300")}
          >
            &lt;main&gt;

            <div
              onClick={() => setActiveBlock("section")}
              className={getBlockStyle("section", "bg-green-400 mt-4")}
            >
              &lt;section&gt;

              <div
                onClick={() => setActiveBlock("article")}
                className={getBlockStyle(
                  "article",
                  "bg-green-600 text-white mt-4"
                )}
              >
                &lt;article&gt;
              </div>

            </div>
          </div>

        </div>

        <div
          onClick={() => setActiveBlock("footer")}
          className={getBlockStyle("footer", "bg-gray-500 text-white")}
        >
          &lt;footer&gt;
        </div>

      </div>

      {/* Explanation */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          How HTML Works
        </h2>

        <p className="text-gray-700 leading-relaxed">
          HTML works like a tree structure. The html element is the root.
          Inside it, we have head and body.
        </p>

        <p className="text-gray-500 mt-3 leading-relaxed">
          HTML একটি গাছের মতো কাজ করে। html হলো মূল element।
          এর ভিতরে head ও body থাকে।
        </p>
      </div>

      {/* Questions */}
      <div className="bg-gray-100 p-8 rounded-xl shadow-inner">
        <h2 className="text-xl font-bold mb-6">
          Important Basic Questions
        </h2>

        <div className="space-y-6">

          <div className="hover:bg-white p-4 rounded-lg transition">
            <p className="font-semibold">
              Q1: What is the full form of HTML?
            </p>
            <p className="text-gray-700 mt-1">
              A: HyperText Markup Language
            </p>
            <p className="text-sm text-gray-500 mt-1">
              HTML এর পূর্ণরূপ হলো HyperText Markup Language।
            </p>
          </div>

          <div className="hover:bg-white p-4 rounded-lg transition">
            <p className="font-semibold">
              Q2: How many main parts does HTML have?
            </p>
            <p className="text-gray-700 mt-1">
              A: 2 — &lt;head&gt; and &lt;body&gt;
            </p>
            <p className="text-sm text-gray-500 mt-1">
              HTML এর ২টি প্রধান অংশ আছে — head এবং body।
            </p>
          </div>

        </div>
      </div>

      {/* Instruction */}
      <div className="bg-yellow-100 p-6 rounded-xl border shadow-sm hover:shadow-md transition">
        <h3 className="font-bold mb-2 text-lg">
          🚀 Start Learning
        </h3>
        <p>
          Click any element from the left sidebar to explore.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          শেখা শুরু করতে বাম পাশের যেকোনো ট্যাগে ক্লিক করুন।
        </p>
      </div>

    </div>
  );
}