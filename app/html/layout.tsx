"use client";

import Link from "next/link";
import { htmlTree } from "@/lib/html/htmlTree";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HtmlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/")[2];

  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-5 border-r overflow-y-auto">

        <h2 className="text-xl font-bold mb-6">
          HTML Topics
        </h2>

        {htmlTree.children?.map((group) => {

          const isOpen = openGroup === group.name;

          return (
            <div key={group.name} className="mb-4">

              {/* Group Title */}
              <button
                onClick={() =>
                  setOpenGroup(isOpen ? null : group.name)
                }
                className="font-semibold text-gray-700 mb-2 capitalize flex justify-between w-full"
              >
                {group.name}
                <span>{isOpen ? "▾" : "▸"}</span>
              </button>

              {/* Topics */}
              {isOpen && (
                <ul className="space-y-1 ml-3">

                  {group.children?.map((topic) => {

                    const active = currentSlug === topic.name;

                    return (
                      <li key={topic.name}>

                        <Link
                          href={`/html/${topic.name}`}
                          className={`block px-2 py-1 rounded text-sm
                          ${
                            active
                              ? "bg-blue-400 text-white font-semibold"
                              : "text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {topic.name.replaceAll("-", " ")}
                        </Link>

                      </li>
                    );
                  })}

                </ul>
              )}

            </div>
          );
        })}

      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>

    </div>
  );
}