import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = [
    {
      id: crypto.randomUUID(),
      title: "Learn React",
      description:
        "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Master JavaScript ES6",
      description:
        "Learn modern JavaScript features such as arrow functions, destructuring, promises, async/await, and modules to write cleaner and more efficient code.",
      tags: ["vsCode", "js"],
      priority: "Medium",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Build a Node.js REST API",
      description:
        "Create a RESTful API using Node.js and Express, implement CRUD operations, connect to MongoDB, and handle authentication with JWT.",
      tags: ["node", "js", "nextjs"],
      priority: "High",
      isFavorite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Learn CSS Flexbox & Grid",
      description:
        "Understand how Flexbox and CSS Grid work to build responsive and modern web layouts with proper alignment and spacing.",
      tags: ["html", "css", "tailwind"],
      priority: "Low",
      isFavorite: false,
    },
  ];

  const [tasks, setTasks] = useState(defaultTask);
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            {/* Search Component */}
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* Task Action Component */}
            <TaskAction />
            {/* Task List Component */}
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </div>
  );
}
