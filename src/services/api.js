import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

api.interceptors.request.use((request) => {
  const method = request.method.toUpperCase();

  if (method === "PUT" || method === "DELETE" || method === "PATCH") {
    request.method = "post";
    request.params = {
      ...request.params,
      _method: method,
    };
  }

  return request;
});

export default api;
