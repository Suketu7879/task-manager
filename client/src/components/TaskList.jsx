import { useContext, useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api";
import { AppContext } from "../context";

const TaskList = ({ token, onEdit }) => {
  const { tasks, setTasks } = useContext(AppContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await getTasks(token);
      setTasks(res.data);
    };
    fetchTasks();
  }, [token]);

  const handleDelete = async (id) => {
    await deleteTask(id, token);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="p-4 bg-purple-50 rounded-lg shadow md:w-[66%] overflow-auto">
      {tasks.length !== 0 ? (
        <h2 className="text-xl font-bold text-gray-600">Your Tasks</h2>
      ) : (
        <h2 className="text-xl font-bold text-gray-400">No Tasks</h2>
      )}
      {tasks.map((task, index) => (
        <div
          key={index}
          className="p-2 mt-2 border-t group hover:bg-purple-400 hover:scale-[1.01] rounded-md transition-all duration-200"
        >
          <h3 className="text-xl font-semibold text-black transition-all duration-200 group-hover:text-white">
            {task.title}
          </h3>
          <p className="text-black transition-all duration-200 group-hover:text-gray-50">
            {task.description}
          </p>
          <div className="mt-1 flex gap-4 justify-end">
            <button
              onClick={() => onEdit(task)}
              className="bg-purple-600 rounded-sm w-20 text-white scale-110"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-purple-600 rounded-sm w-20 text-white scale-110"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
