import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const GetEventsById = (id) => {
  return axios.get(apiUrl + "events/" + id);
};
