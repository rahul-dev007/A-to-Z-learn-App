"use client";

import { useRouter, usePathname } from "next/navigation";
import { HtmlNode } from "@/lib/htmlTree";
import { useState } from "react";
import clsx from "clsx";

type Props = {
  data: HtmlNode;
};

export default function HtmlTree({ data }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (name: string) => {
    setOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const renderNode = (node: HtmlNode, depth = 0) => {
    const isActive = pathname === `/html/${node.name}`;
    const hasChildren = !!node.children;

    return (
      <div key={node.name} className="mt-2">

        {/* Button */}
        <div
          onClick={() => {
            if (hasChildren) toggle(node.name);
            router.push(`/html/${node.name}`);
          }}
          className={clsx(
            "px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium",
            "hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500",
            isActive && "bg-black text-white scale-105 shadow-md"
          )}
          style={{ marginLeft: depth * 16 }}
        >
          &lt;{node.name}&gt;
        </div>

        {/* Children */}
        {hasChildren && open[node.name] && (
          <div className="ml-4 border-l pl-4 border-gray-300">
            {node.children!.map((child) =>
              renderNode(child, depth + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md border">
      <h2 className="text-lg font-bold mb-4 text-gray-700">
        HTML Topics
      </h2>
      {renderNode(data)}
    </div>
  );
}