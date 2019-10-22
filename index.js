import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import axios from "axios";

import {capitalize} from "lodash";

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
        capitalize(params.page)
        // `${params.page.slice(0, 1).toUpperCase()} ${params.page
        //   .slice(1)
        //   .toLowerCase()}`
      ]
    )
  )
  .on("/", () => render())
  .resolve();

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    state.Blog.main = response.data.map(
      ({ title, body }) => `
    <article>
    <h2>${title}<h2>
    <p>${body}<p>
    </article>`
    ).join("");

    if (capitalize(router.lastRouteResolved().params.page) === "Blog") {
      render(state.Blog)
    }

  })
  .catch(err => console.log(err));
