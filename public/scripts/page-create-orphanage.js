//Create map
const map = L.map('mapid').setView([-8.0629497, -34.8735617], 16);

//Create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

let marker;

//Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover last marker
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// upload photos field
function addPhotoField() {
   // get #images
   const container = document.querySelector('#images')
   // get .new-upload
   const fieldsContainer = document.querySelectorAll('.new-upload')
   // clone last images
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
   // check empty field
   const input = newFieldContainer.children[0]
   if(input.value == "") {
     return
   }
   // clear field
   input.value = ""
   // add clone to container
   container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')
  if(fieldsContainer.length <= 2) {
    // clear value input
    span.parentNode.children[0].value = ""
    return
  }

  span.parentNode.remove()
  
}


// Active selection switch
function toggleSelect(event) {
  // remove class .active if exists
  document.querySelectorAll('.button-select button')
  .forEach((button) => button.classList.remove('active'))

  // add class .active
  const button = event.currentTarget
  button.classList.add('active')
  
  // get selected button
  const input = document.querySelector('[name="open-on-weekends"]')

  // check value
  input.value = button.dataset.value
}

function validate(event) {
  // validate se lat and lng estão preenchidos
  const needsLatAndLang = false;
  if(needsLatAndLang){
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  }
}