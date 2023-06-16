import axios from "axios";

export const $authHost = axios.create({
    baseURL: "https://rocky-temple-83495.herokuapp.com",
  });
  