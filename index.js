// Below is an example of object destructuring

import { Header, Nav, Main, Footer } from "./components";

const state = {
  home: {
    heading: "Home Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },

  about: {
    heading: "About Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },

  contact: {
    heading: "Contact Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },

  blog: {
    heading: "Blog page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  },

  gallery: {
    heading: "Gallery page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
  }
};

//The parameter st represents a piece of state.

function render(st = state.home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer(st)}
`;
}

render();

const links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault();

    render(state[event.target.textContent.toLowerCase()]);
  });
}
