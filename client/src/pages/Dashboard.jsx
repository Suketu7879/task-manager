import { useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [editingTask, setEditingTask] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen max-h-screen bg-gradient-to-b from-purple-400 to-purple-500 flex justify-center p-2">
      {token ? (
        <div className="w-full bg-gradient-to-b from-purple-300 to-purple-400 p-4 rounded-lg shadow-md flex md:flex-row flex-col gap-2">
          <div className="flex flex-col gap-2 md:w-[33%] bg-purple-50 rounded-lg shadow p-2 relative">
            <button
              onClick={logout}
              className="w-30 mt-4 p-3 bg-purple-500 shadow-md shadow-purple-900 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-200 absolute bottom-2 left-2"
            >
              Logout
            </button>
            <h2 className="text-3xl font-bold text-center bg-gradient-to-br from-purple-700 to-purple-300 bg-clip-text text-transparent mb-4">
              Dashboard
            </h2>

            <TaskForm
              token={token}
              existingTask={editingTask}
              onSuccess={() => setEditingTask(null)}
            />
          </div>
          <TaskList token={token} onEdit={setEditingTask} />
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
          Invalid Credentials
        </h2>
      )}
    </div>
  );
};

export default Dashboard;
