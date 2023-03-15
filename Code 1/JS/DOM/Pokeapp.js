//https://raw.githubusercontent.com/PokeAPI/Sprites/master/sprites/pokemon/1.png



const container = document.querySelector('#container');
// base of all the pokemon in this URL
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/Sprites/master/sprites/pokemon/';

// we make a loop with 'for' because we are working with numbers
// newImg and newImg.src is going to create everytime depending on the loop
// last, we are going to append it in DOM
for (let i = 1; i < 152; i++) {
    const pokemon = document.createElement('div');
    // div have a class name pokemon
    pokemon.classList.add('pokemon')
    const label = document.createElement('span')

    // number sign infront of the pokemon
    label.innerText = `#${i}`;

    // all the pokemon imgs from src
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}


