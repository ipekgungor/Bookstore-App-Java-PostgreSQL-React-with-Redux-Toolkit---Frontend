import axios from "axios";

const api = axios.create({
  baseURL: "https://141e-78-176-82-116.ngrok-free.app", //This URL needs to be re-fetched.
  headers: { "ngrok-skip-browser-warning": "true" },
});

export default api;
