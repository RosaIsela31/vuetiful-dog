// import axios from "axios";

const url = "https://api.coincap.io/v2";

const getApi = () => {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export default {
  getApi,
};
