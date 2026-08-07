import Task from "./Task";
import { useTasks } from "../contexts/TasksContext";

export default function TaskList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
