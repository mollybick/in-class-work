export default function(year = 2019) {
  return `
<footer>
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./about/">About</a></li>
            <li><a href="./contact/">Contact</a></li>
            <li><a href="./gallery/">Gallery</a></li>
            <li><a href="./blog/">Blog</a></li>
        </ul>
        <p>&copy; ${year} Molly Bick &bullet; No rights reserved!</p>
      </footer>`;
}
