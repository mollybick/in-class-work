import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import axios from "axios";

import { capitalize } from "lodash";

import { auth, db } from "./firebase";

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

// Gallery
db.collection("pictures")
  .get()
  .then(querySnapshots => {

    // Let's make sure to update instead of overwriting our markup
    state.Gallery.main +=
      `<div class="gallery">` +
      querySnapshots.docs
        .map(doc => {
          // Combine `const` with destructuring to create 3 variables from the keys in our object literal
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

      const imgURL = document.querySelector("#imgURL");
      const caption = document.querySelector("#caption");
      const credit = document.querySelector("#credit");

      document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();

        db.collection("pictures")
          .add({
            imgURL: imgURL.value,
            caption: caption.value,
            credit: credit.value
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      });
    }
  })
  .catch(err => console.error("Error loading pics", err));


  // Admin

  // render(state.Admin);

// Admin
// TODO: Rather than grabbing each element manually, consider using (`event.target.elements`) on the `submit` event.
// Are we on Admin page?
if (
  router.lastRouteResolved().params &&
  capitalize(router.lastRouteResolved().params.page) === "Admin"
) {
  // Are we logged in?
  auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      // We are logged in!
      console.log("you are logged in!");
      state.Admin.main = `<button type="button">Log out!</button>`;

      render(state.Admin);

      document.querySelector("button").addEventListener("click", () => {
        auth
          .signOut()
          .then(() => {
            state.Admin.main = `
            <form>
              <input type="email" />
              <input type="password" />
              <input type="submit" value="Log in!" />
            </form>
          `;

          render(state.Admin);
          })
          .catch(err => console.log("Error signing out", err.message));
      });
    } else {
      const email = document.querySelector('[type="email"]');
      const password = document.querySelector('[type="password"]');

      document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();

        auth
          .signInWithEmailAndPassword(email.value, password.value)
          .catch(err => console.error("Got an error", err.message));
      });
    }
  });
}

