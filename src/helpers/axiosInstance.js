import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:5000";
} else if (process.env.NODE_ENV === "production") {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
