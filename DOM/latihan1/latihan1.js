//https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/1.png

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/'

const container = document.querySelector('.container')

for(let i =0; i < 1025; i++){
    const imgWrapper = document.createElement('div') 
    imgWrapper.classList.add('img-wrapper')
    
    const img = document.createElement('img')
    img.setAttribute('src', `${imgUrl}${i}.png`)
    
    const idPokemon = document.createElement('p')
    idPokemon.innerHTML = `#${i}`
    
    container.append(imgWrapper)
    imgWrapper.append(img)
    imgWrapper.append(idPokemon)
    
}

container.style.display = 'flex'
container.style.gap = '20px'
container.style.justifyContent = 'start'
container.style.alignItems = 'center'
container.style.flexWrap = 'wrap'
const idPokemon = document.createElement('p')
