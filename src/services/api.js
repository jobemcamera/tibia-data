import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tibiadata.com/v4",
});

export default api;
