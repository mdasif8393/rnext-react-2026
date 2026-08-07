/* eslint-disable react-refresh/only-export-components */
import { useImmerReducer } from "use-immer";
import taskReducer from "../reducers/taskReducer";
import { initialTasks } from "../data/tasks";
import { createContext } from "react";
import { useContext } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTaskDispatch() {
  return useContext(TasksDispatchContext);
}
