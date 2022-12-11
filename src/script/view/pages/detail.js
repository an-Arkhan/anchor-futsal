import UrlParser from "../../routes/url-parser";
import { detailLapangan } from "../templates/templates";
import fieldSource from "../../data/field-source";

const Detail = {
  async render() {
    return `<div class="container-header-detail" id="content"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const field = await fieldSource.detail(url.id);
    const lapanganContainer = document.querySelector("#content");
    lapanganContainer.innerHTML = detailLapangan(field);
  },
};
export default Detail;
