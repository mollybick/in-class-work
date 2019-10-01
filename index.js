// Below is an example of object destructuring

import { Header, Nav, Main, Footer } from "./components";

const state = {
  Home: {
    heading: 'Home Page'
},

About {
  heading: 'About Page'
}
};

document.querySelector("#root").innerHTML = `
${Header()}
${Nav()}
${Main()}
${Footer()}
`;
