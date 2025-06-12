import axios from "axios"

console.log("baase url :", import.meta.env.VITE_API_BASE_URL)
console.log("api key :", import.meta.env.VITE_WEATHER_API_KEY)

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 7000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Optional: Add request interceptor to attach API key automatically
axiosClient.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  config.params = {
    ...(config.params || {}),
    key: apiKey,
  };

  return config;
});

export default axiosClient;