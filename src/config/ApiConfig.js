import axios from "axios";
import Cookies from "js-cookie";


const TOKEN_PAYLOAD_KEY = 'authorization';
// const PUBLIC_REQUEST_KEY = 'public-request';
const tocken = Cookies.get('tocken')

const PROJECT_BASE_API = process.env.REACT_APP_BASE_API



const api = axios.create({
  baseURL: PROJECT_BASE_API
});


api.interceptors.request.use(function (config) {
  // Do something before request is sent

  config.headers[TOKEN_PAYLOAD_KEY] = `Bearer${tocken}`

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

const login = async (formData) => {
  const { data } = await api.post("/api/login", formData)
  console.log(data ,'data');
  return data
}

const user = async () => {
  const { data } = await api.get("/api/users")
  console.log(data ,'data');
  return data
}

export {
  login,
  user
}