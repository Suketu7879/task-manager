import { useContext, useState } from "react";
import { getTasks, login } from "../api";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { setTasks } = useContext(AppContext);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    localStorage.setItem("token", res.data.token);

    let ts = await getTasks(res.data.token);
    setTasks(ts.data);

    navigate("/dashboard");
  };

  const HandleReg = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
      <div className="w-full max-w-sm p-6 bg-purple-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-center"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 mt-2 border rounded bg-purple-100 text-gray-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mt-2 border rounded bg-purple-100 text-gray-500"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-purple-500 rounded hover:bg-purple-600"
          >
            Login
          </button>
          <div className="mt-2 ml-1 text-gray-500">
            Don't have an accoount?{" "}
            <button
              className="text-purple-400 cursor-pointer hover:text-purple-600 hover:underline"
              onClick={HandleReg}
            >
              create one
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
