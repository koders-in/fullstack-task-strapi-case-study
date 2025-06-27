import axios from "axios";
import { BACKEND_URL } from "../config";
const CaseStudyAxios = axios.create({
  baseURL: BACKEND_URL + "/case-studies",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export default CaseStudyAxios;
