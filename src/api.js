import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7285/ActiveControl/api",
});

export default api;