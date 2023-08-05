document.addEventListener('DOMContentLoaded', () => {
    const random getRandomInt(1,151)
    fetchdata (random)
}) 
const getRandomIntInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const fetchdata = async (id) => {
    try {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json () 
    console.log (data)
    pintarcard(data)
    } catch(error) {
        console.log(error)
    } 
} 

const pintarcard = (pokemon) => {
    console.log(data)
    const flex = document.querySelector('#flex')
    const template = document.querySelector('#template-card').textContent
    const clone = template cloneNode (true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('#.card-body-img').setAttribute('src','estatico')
    fragment.appendChild(clone)
    flex.appendChild(fragment)
}
