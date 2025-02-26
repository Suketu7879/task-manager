import { useContext, useState } from "react";
import { createTask, updateTask } from "../api";
import { AppContext } from "../context";

const TaskForm = ({ token, existingTask, onSuccess }) => {
  const { tasks, setTasks } = useContext(AppContext);

  const [form, setForm] = useState(
    existingTask || { title: "", description: "" }
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (existingTask) {
      await updateTask(existingTask._id, form, token);
      setTasks((tasks) => [...tasks, form]);
    } else {
      console.log("aaya probleml chhe");
      await createTask(form, token);
      setTasks((tasks) => [...tasks, form]);
    }

    onSuccess();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-600"
          onChange={handleChange}
          value={form.title}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-600"
          onChange={handleChange}
          value={form.description}
        />
        <button
          type="submit"
          className="w-full p-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition"
        >
          {existingTask ? "Update" : "Create"} Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
