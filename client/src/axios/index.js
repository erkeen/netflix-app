import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_IMG_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

export default instance;

export const imgURL = REACT_APP_IMG_URL;
