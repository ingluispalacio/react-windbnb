import axios from "axios";

const client = axios.create({
  baseURL: 'data/' ,
  timeout: 8000,
});


export default client;