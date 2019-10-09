import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

//The parameter st represents a piece of state.

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main()}
${Footer()}
`;
}

render();

const links = document.querySelectorAll("nav a, footer a");

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener("click", event => {
    event.preventDefault();

    render(state[event.target.textContent]);
  });
}
