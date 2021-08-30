export default function log(msg) {
  if (msg) {
    debugContainer.innerHTML += `<p>${msg}</p>`;
  } else {
    debugContainer.innerHTML = "";
  }
}
