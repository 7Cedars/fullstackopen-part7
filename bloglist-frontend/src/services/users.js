import axios from "axios";
const baseUrl = "/api/users";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getIndividual = (id) => {
  const request = axios.get(baseUrl, id);
  return request.then((response) => response.data);
};

export default { getAll, getIndividual };
