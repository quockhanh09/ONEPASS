import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://be-onpass.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
