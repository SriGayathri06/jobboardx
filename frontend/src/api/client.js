import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:9090";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // disable cookies
});

// Attach JWT if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jbxtoken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("🟢 JWT attached:", token.slice(0, 20) + "...");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
