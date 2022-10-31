let isIngnite = true
function changeCard(event) {
  const card = event.currentTarget
  const backgroundImage = isIngnite
   ? "url(./bg-explorer.svg)"
   : "url(./bg-ignite.svg)"
  isIngnite = !isIngnite
  card.style.backgroundImage = backgroundImage
}