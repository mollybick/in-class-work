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

const aboutLink = document.querySelector("#about");

aboutLink.addEventListener("click", function(event) {
  event.preventDefault();

  render(state[event.target.textContent]);
})
