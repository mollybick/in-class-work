import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import axios from "axios";

const router = new Navigo(location.origin);

//The parameter st represents a piece of state.

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer()}

`;
  const links = document.querySelectorAll("nav a, footer a");
  links.forEach(link =>
    link.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.textContent]);
    })
  );
}

router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  .on(":page", params =>
    render(
      state[
        `${params.page.slice(0, 1).toUpperCase()} ${params.page
          .slice(1)
          .toLowerCase()}`
      ]
    )
  )
  .on("/", render())
  .resolve();
