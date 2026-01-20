import axiosConfig from "./axiosConfig";
import { baseurl } from "./BaseUrl";

// Request body template
export const studentData = {
  rollNo: "",
  name: "",
  email: "",
  age: "",
  department: "",
  course: "",
};

// CREATE student
export const addStudentApi = async (reqBody) => {
  return axiosConfig("post", `${baseurl}/students`, reqBody);
};

// READ all students
export const getAllStudentApi = async () => {
  return await axiosConfig("get", `${baseurl}/students`, "");
};

// READ single student by id
export const getStudentByIdApi = async (id) => {
  return await axiosConfig("get", `${baseurl}/students/${id}`, "");
};


// DELETE student by id
export const deleteStudentApi = async (id) => {
  return await axiosConfig("delete", `${baseurl}/students/${id}`, "");
};

