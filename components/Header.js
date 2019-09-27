export default function(heading = "Molly Bick Practice Project") {
  return `<header>
<figure>
  <img
  src="https://picsum.photos/id/340/200/300"
  srcset="
      https://picsum.photos/200,
      https://picsum.photos/300 1.5x,
      https://picsum.photos/400 2x,
      https://picsum.photos/600 3x
    "
    src="https://picsum.photos/600" alt="Image"
  />
  </figure>
  <h1>${heading}</h1>
</header>`;
}
