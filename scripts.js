function greeter(question = "What is your name?") {
let answer = prompt(question);

  /* If answer is blank, ask again */

  if (answer === "") {
    return greeter();
  }

  return answer;
}
// const answer = greeter();

document.querySelector("#root").innerHTML = `<p>${greeter()}</p>`

const hamburger = document.querySelector(".fa-hamburger");
const hiddenUL = document.querySelector("ul");
