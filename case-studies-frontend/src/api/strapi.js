import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1337/api", 
});
export const getCaseStudies = () =>
  API.get("/case-studies?populate=deep");

export const getCaseStudyBySlug = (slug) =>
  API.get(`/case-studies?filters[slug][$eq]=${slug}&populate=deep`);
