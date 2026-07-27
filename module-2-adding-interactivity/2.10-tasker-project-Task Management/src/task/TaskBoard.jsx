import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
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
            <TaskList />
          </div>
        </div>
      </section>
    </div>
  );
}
