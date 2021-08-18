import axios from "axios"
import { REST_API_URL } from "../../constants/API.constants";

const instance = axios.create({
  baseURL: REST_API_URL
});

export default instance;