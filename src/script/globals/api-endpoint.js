/* eslint-disable quotes */
import CONFIG from "./config";

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}show/${id}`,
};

export default API_ENDPOINT;
