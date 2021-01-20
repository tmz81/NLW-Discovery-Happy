const options = {
    dragging: false,
    toucchZoom: false,
    dubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//Create map
const map = L.map('mapid', options).setView([-8.0629497, -34.8735617], 16)

//Create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//Create and add marker
L.marker([-8.0629497, -34.8735617], { icon })
.addTo(map)


// image gallery

function selectImage(event) {
  const button = event.currentTarget
  
  // remover todas as clases .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  // selecionar a image clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizar o container de image
  imageContainer.src = image.src

  // adicionar a class .active para este botão que foi clicado
  button.classList.add('active')

}
