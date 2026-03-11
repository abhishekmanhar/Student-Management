import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000"
});

export const getStudents = () => API.get("/students");

export const createStudent = (data) =>
  API.post("/students", data);

export const updateStudent = (id,data) =>
  API.patch(`/students/${id}`, data);

export const deleteStudent = (id) =>
  API.delete(`/students/${id}`);