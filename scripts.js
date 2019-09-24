function greeter(question = "What is your name?") {
  return prompt(question);

  /* If answer is blank, ask again */

  if (answer === "") {
  return greeter(); // recursion

  return answer;
}
const answer = greeter();
document.querySelector("h1").textContent = answer;
