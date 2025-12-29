import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://onepasscms-backend-tvdy.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
