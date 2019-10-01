export default function() {
  return `
<nav>
            <span class="fas fa-hamburger is-hidden--desktop"></span>
              <ul class="is-hidden--tablet is-shown--desktop">
                <li><a href="./">Home</a></li>
                <li><a href="./about/" id="about" >About</a></li>
                <li><a href="./contact/">Contact</a></li>
                <li><a href="./gallery/">Gallery</a></li>
                <li><a href="./blog/">Blog</a></li>
              </ul>
            </nav>`;
}
