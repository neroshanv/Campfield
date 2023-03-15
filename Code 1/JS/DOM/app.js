// 243. getElementByid

// ex

// in console:

// document
// document.getElementByid('chicken') 
// output: null   --> that means nothing was found in the DOM

// document.getElementByid('banner')
// output: <img id="banner" src="http://images"
// that's not what we wanted, it's only giving us HTML

// const banner = document.getElementByid('banner')
// so now we banner represents 
//                                  ^
//                                  |

// console.dir(banner)
// you can see it's now an object and it contains all those properties

// we're not actually selecting the text, the HTML or the CSS styles, we're selecting the DOM objects
// an object here that represented that particular iamge with the id of banner



// 244. getElementsByTagName & className


// ex.
// here we are trying to get all 'img'

// document.getElementsByTageName('img')
// const allImages = document.getElementsByTageName('img')



// we want to loop over every single element in all imgs

// in app.js:

const allImages = document.getElementsByTagName('img')

for (let img of allImages) {
    console.log(img.src)
}

// remember to add script in html file so this actually works


// HTML collection:
// element is what's inside HTML collection, an element in JS is that object that we're getting back has all these properties, that represetns a single HTML element.



// Another ex.

document.getElementsByTagName('p')
// output: HTMLCollection(2) [p, p]

document.getElementsByTagName('div')
// output: HTMLCollection(2) [div#toc, div.toctitle, toc:div#toc]


// class example

document.getElementsByClassName('square')
// output: HTMLCollection()


// for ex. change img src
const squareImages = document.getElementsByClassName('square')

for (let img of squareImages) {
    img.src = 'http://imgsrc2'
};



// 245. querySelector

// - a newer, all-in-one method to select a single element.

// ex.

document.querySelector('h1')

// or

document.querySelector('#red')

// Another ex. you can add mutiple selectors

document.querySelector{ 'img:nth-of-type(2)' }
// 1: img   2: nth-if-type(2)


// querySelectorAll

// - Same idea, but returns a collection of matching elements


// ex.

document.querySelectorAll('p')


// another ex. all wikipedia links to other pages on wikipedia

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

// code excersie 

// 1:

const doneTodos = document.querySelectorAll('done')

// 2:

const checkbox = document.querySelector('a[checkbox]')


// correct answer

const doneTodos = document.querySelectorAll('.done');

const checkbox = document.querySelector('input[type="checkbox"]');


// 246. innerHTML, textContent, & innerText ...Continuing


document.querySelector('p').innerHTML
// returns paragraph with tags included


document.querySelector('h1').innerHTML = '<i>test</i>'
// DOM recognize and it will update accordingly

document.querySelector('h1').innerHTML += '<sup>test</sup>'
// adds to exisiting



// 247.Attributes

document.querySelector('#banner').id = 'whoops'


const firstLink = document.querySelector('a')
firstLink.getAttribute('href')
//


// 278. Changing Style

// camel cased style are found

// it contains any inline styles assigned not current

h1.style.color = 'green'
// we can change current styles

h1.style.fontSize = '3em'

h1.style.border = '2px solid pink'

// inline styles are very specific, it's not ideal to use this method to change all styles in one HTML page


// Ex.
// let's select every anchor tag and give them a different color.
const allLinks = document.querySelector('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    // give a different underline color
    link.style.textDecorationColor = 'magenta';
}

// finding current style in HTML page

window.getComputedStyle(hi).color
// output: "rbg(128, 128, 0)"

window.getComputedStyle(h1).fontSize
// output: "32px"

window.getComputedStyle(h1).fontFamily
// output: "Times"

window.getComputedStyle(h1).marginLeft
// output: "0px"


// Excercise 55:

document.getElementById("container").style.textAlign = "center";

const tree = document.querySelector('img');

for (let link of tree) {
    link.style.width = "150px";
    link.style.style.borderStyle = "50%";

}

// Correct Answer from comments

const image = document.querySelector("img");
image.style.width = '150px';
image.style.borderRadius = '50%';

const container = document.querySelector('#container');
container.style.textAlign = 'center';

// 249. ClassList

// ex.

const h2 = document.querySelector('h2')

h2.getAttribute('class')
// null

h2.setAttribute('class', 'purple')
// set class name purple

h2.setAttribute('class', 'border')
// undefined means it worked

let currentClasses = h2.getAttribute('class')
// undefined means it worked

h2.setAttribute('class', `${currentClasses} purple`)
// undefined
// so that way we can have more than one class in CSS is by separating things with a space.


// we have too many classes and this is where ClassList comes in


// ClassList
// - it's an object that we can interact with to contol the classes on an element 
// - to retrieve and manipulate them.


// ex.

h2.classList.add('purple')
// i don't have to worry about what's already in class, i can simply just add purple as class

h2.classList.add('border')
// i can add border knowing it's a class or not


// ex.

// i can remove
h2.classList.remove('border')


// ex.

h2.classList.contains('border')
// false
// this is to verify if i have a border or not. true or false

h2.classList.contains('purple')
// true


// ex. 
// toggle class ON and OFF class or basically present and not present

h2.classList.toggle('purple')
// false
h2.classList.toggle('purple')
// true
h2.classList.toggle('purple')
// false
h2.classList.toggle('purple')
// true
h2.classList.toggle('purple')
// false



// Exercise 57


// 250. Traversing Parent/Child/Sibling


// ParentElement - traverse upwards

// in Console
const firstBold = document.querySelector('b')

firstBold
// output: <b>Silkie</b>

firstBold.parentElement
// outout: <p>...</p>

firstBold.parentElement.parentElement
// output: <body>...</body>

firstBold.parentElement.parentElement.parentElement
// returns root of HTML
// output: <html lang = "en">
//         <head>...</head>
//          <body>...</body>
//          </html>



// children - tells us how many child elements there are

const paragraph = firstBold.parentElement

paragraph.children
// output: HTMLCollection(8) [ b, b, a, a, a, a, a, a,]



// nextSibling and previousSibling
// - allow us to navigate from one element to an adjacent sibling
// - gives us the corresponding node.
// - node is a different element, node represent text in this example case. Some browser automatically make whitespace



// 251. Append & AppendChild


// creating a new element

document.createElement()

// if i want to make an img

document.createElement('img')

const newImg = document.createElement('img')
// where does this image, what's it actually display?
// what's the image source?
// tell it where to go


// pretend we have an image and add an image source

newImg.src = 'https://image'

// so now that we have an image with a source, but it's still not on the page.
// so i now need to append it to the page and there are ways of doing this.


// one way is AppendChild
// append as the last element of an element 
// so i need to select soemthing that i'm going to append my new image to.

document.body.appendChild(newImg)



// Append

// can append more than one element

// ex.

const p = document.querySelector('p')

p.append('i am new text', 'i am a newer text')



//  prepend()

// it allows us to insert something as the first child of some elements.
// as in append in the beginning

// --------------------------------- REST OF THE NOTES ARE ON THE MAC ---------------------------------------------------


// Excerise 51.

document.createElement('button')

const newButton = document.createElement('button')

newButton.innerText = Hey!

document.body.div.append(newButton,)

// correct answer

// missed the container div portion of the problem
// missed loop to 100
// need to create button inside the loop
const container = document.getElementById("container");
for (let i = 0; i < 100; i++) {
    /*First iliteration: button = a new DOM object, second iliteration:
      button = a new DOM object, etc.*/
    let button = document.createElement("button");
    container.appendChild(button);
    button.innerText = "Hey";
}




// 252. removeChild & remove

Node.removeChild()

// the way it works is that we don't actuvally remove the particular element we have selected

// for example, pretend we have an image. we have to select the parent, and then call remove child and pass in the image



// pretend we have a list, and we want to remove the first element on the list


const firstLi = document.querySelector('li')

const ul = firstLi.parentElement

ul.removeChild(firstLi)



// ChildNode.remove()
// remove is a method we call on the actual thing we want to remove.


ChildNode.remove()


// pretend we remove an image

const img = document.querySelector('img')

img.remove()
// and it's gone




// 253. Pokemon Sprites Demo


