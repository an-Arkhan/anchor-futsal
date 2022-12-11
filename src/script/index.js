/* eslint-disable quotes */
import "lazysizes";
import "../styles/main.css";
import "../styles/detail-lapangan.css";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "regenerator-runtime";
import App from "./view/app";
import "bootstrap";

const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#navbar"),
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
