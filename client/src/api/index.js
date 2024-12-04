import Axios from "axios";

const token = localStorage.getItem("token");

const axios = Axios.create({
  baseURL: "http://localhost:5000",
  
});
export default axios