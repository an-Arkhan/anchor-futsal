/* eslint-disable quotes */
import API_ENDPOINT from "../globals/api-endpoint";

class fieldSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.fields;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.field;
  }
}

export default fieldSource;
