// import axios from "axios";

const url = "https://www.breakingbadapi.com/api/characters/";

const getApi = () => {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(res => res.data);
};

export default {
  getApi
};
