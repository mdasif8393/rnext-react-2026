import { useState } from "react";

import { getNextId } from "../utils/getNextId";
import { useTaskDispatch, useTasks } from "../contexts/TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");

  const tasks = useTasks();
  const dispatch = useTaskDispatch();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
