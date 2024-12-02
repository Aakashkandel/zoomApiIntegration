import Axios from "axios";

const token = localStorage.getItem("token");

const axios = Axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
    "token": token ? token : "",  
  }
});

export default axios