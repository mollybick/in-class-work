function greeter(question = "What is your name?") {
  return prompt(question);

  /* If answer is blank, ask again */

  if (answer === "") {
    greeter(); // recursion

  return answer;
}

// TODO: resolve issue where h1 is not updated if user gives blank answer
const answer = greeter();
document.querySelector("h1").textContent = answer;
