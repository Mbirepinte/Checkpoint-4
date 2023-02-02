import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// eslint-disable-next-line import/prefer-default-export
export const Login = (payload) => {
  console.log(payload);
  return axios.post(apiUrl + "user/login", payload);
};

export const GetFriendById = (id) => {
  return axios.get(apiUrl + "user/" + id);
};

export const GetMyProfile = (id) => {
  return axios.get(apiUrl + "user/" + id);
};
export const UpdateMyProfile = (id, payload) => {
  return axios.put(apiUrl + "user/" + id, payload);
};
