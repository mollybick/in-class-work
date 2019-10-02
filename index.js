// Below is an example of object destructuring

import { Header, Nav, Main, Footer } from "./components";

const state = {
  home: {
    heading: "Home Page"
  },

  About: {
    heading: "About Page"
  }
};

//The parameter st represents a piece of state.

function render(st = state.home) {
  document.querySelector("#root").innerHTML = `
${Header(st.heading)}
${Nav()}
${Main()}
${Footer()}
`;
}

render();

const links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault();
  });
}
