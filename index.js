import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import axios from "axios";

import { capitalize } from "lodash";

import { db } from "./firebase";

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
    state.Blog.main = response.data
      .map(
        ({ title, body }) => `
    <article>
    <h2>${title}<h2>
    <p>${body}<p>
    </article>`
      )
      .join("");

    if (capitalize(router.lastRouteResolved().params.page) === "Blog") {
      render(state.Blog);
    }
  })
  .catch(err => console.log(err));

//Gallery

db.collection("Pictures")
  .get()

  /**
   * Developer's Note: There is no straightforward way to get data back as an Array,
   * so 'superpowers' are useless.😞
   */
  .then(querySnapshots => {
    state.Gallery.main =
      `<div class="gallery">` +
      querySnapshots.docs
        .map(doc => {
          const { caption, credit, imgURL } = doc.data();

          return `
        <figure>
          <img src="${imgURL}" alt="">
          <figcaption>${caption} - ${credit}</figcaption>
        </figure>
      `;
        })
        .join(" ") +
      `</div>`;

    if (
      router.lastRouteResolved().params &&
      capitalize(router.lastRouteResolved().params.page) === "Gallery"
    ) {
      render(state.Gallery);
    }
  })
  .catch(err => console.error("Error loading pics", err));
