import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

//The parameter st represents a piece of state.

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer()}
`;
const links = document.querySelectorAll('nav a, footer a');
links.forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  render(state[event.target.textContent]);
}));
  }

  render();
