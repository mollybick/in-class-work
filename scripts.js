function greeter(question = "What is your name?") {
  return prompt(question);
}

const answer = greeter();
document.querySelector("h1").textContent = answer

