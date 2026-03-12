export default function Dashboard() {
  return (
    <div className="p-10 ">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to Web Mentor
      </h1>

      <p className="text-lg text-gray-600">
        Choose a subject from the top navigation to start learning.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="p-6 bg-orange-100 rounded">
          <h2 className="font-bold text-xl">HTML</h2>
          <p>Structure of the web</p>
        </div>

        <div className="p-6 bg-blue-100 rounded">
          <h2 className="font-bold text-xl">CSS</h2>
          <p>Design and styling</p>
        </div>

        <div className="p-6 bg-yellow-100 rounded">
          <h2 className="font-bold text-xl">JavaScript</h2>
          <p>Interactivity and logic</p>
        </div>
      </div>
    </div>
  );
}