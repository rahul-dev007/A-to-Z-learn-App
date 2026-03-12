import { jsTree } from "@/lib/js/jsTree";

export default function JsPage() {
  return (
    <div className="flex">

      <aside className="w-64 p-4 bg-gray-100">
        <h2 className="font-bold mb-3">JavaScript Topics</h2>

        {jsTree.children?.map((group) => (
          <div key={group.name}>
            <h3 className="font-semibold mt-3">{group.name}</h3>

            <ul className="ml-3">
              {group.children?.map((topic) => (
                <li key={topic.name}>{topic.name}</li>
              ))}
            </ul>
          </div>
        ))}

      </aside>

      <main className="flex-1 p-6">
        JavaScript Learning
      </main>

    </div>
  );
}