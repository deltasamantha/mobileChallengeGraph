import axios from "axios";

import {API_ROOT} from "../config/AppConfig";

export const api = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Content-type": "application/json",
  },
});
