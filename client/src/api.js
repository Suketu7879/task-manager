import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const register = (userData) =>
  axios.post(`${API_URL}/auth/register`, userData);

export const login = (userData) =>
  axios.post(`${API_URL}/auth/login`, userData);

export const getTasks = (token) =>
  axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createTask = (task, token) =>
  axios.post(`${API_URL}/tasks`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateTask = (id, task, token) =>
  axios.put(`${API_URL}/tasks/${id}`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteTask = (id, token) =>
  axios.delete(`${API_URL}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
