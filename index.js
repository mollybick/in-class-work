import { Header, Nav, Main, Footer } from "./components";
import { Home, About, Contact, Blog, Gallery, Links } from "./store";

//The parameter st represents a piece of state.

function render(st = Home) {
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
  links[i].addEventListener("click", function(event) {
    event.preventDefault();

    render(event.target.textContent);
  });
}
