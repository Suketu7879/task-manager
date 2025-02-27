import { useState } from "react";
import { register } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/");
  };

  const HandleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-5">
      <div className="w-full max-w-sm p-6 bg-purple-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
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
            Register
          </button>
          <div className="mt-2 ml-1 text-gray-500">
            Have an accoount?{" "}
            <button
              className="text-purple-400 cursor-pointer hover:text-purple-600 hover:underline"
              onClick={HandleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
