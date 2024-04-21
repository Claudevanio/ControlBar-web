import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const token = null;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});
