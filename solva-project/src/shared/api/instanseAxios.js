import axios from "axios";
import { environment } from "shared/consts/environment";

const api = axios.create({
  baseURL: `${environment}`,
  headers: {
    "Content-Type": "application/json",
  },
});


export default api;
