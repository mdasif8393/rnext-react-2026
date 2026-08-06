import { useReducer } from "react";
import "./App.css";
import { initialTasks } from "./data/tasks";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import taskReducer from "./reducers/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // make id
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id,
    );
    return maxId + 1;
  };

  //Handlers
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1>prague itinerary</h1>

      <AddTask onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
