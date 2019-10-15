export default {
  heading: "Contact Page",
  main: `<form action="#" method="POST" data-netlify="true">
  <div class="flex-container--desktop flex-row--desktop">
    <div>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" class="is-error">
  </div>

  <div>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" class="is-error">
  </div>

  <div>
    <label for="fone">Phone:</label>
    <input type="tel" name="fone" id="fone" class= "is-error">
  </div>
</div>
  <div>
    <label for="msg">Enter your message:</label>
    <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
  </div>


  <input type="submit" value="Submit">`
}
