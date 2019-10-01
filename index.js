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

document.querySelector("#root").innerHTML = `
${Header(state.home.header)}
${Nav()}
${Main()}
${Footer()}
`;

const aboutLink = document.querySelector('#about');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  const aboutText = event.target.textContent;
  console.log('about text is:', aboutText);
  console.log(state[aboutText]);
});
