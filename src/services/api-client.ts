import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
});

export default client;
