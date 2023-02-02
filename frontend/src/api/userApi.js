import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export
export const Login = (payload) => {
  console.log(payload);
  return axios.post(apiUrl + "user/login", payload);
};
