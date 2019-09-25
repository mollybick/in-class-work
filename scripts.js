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

use innerhtml