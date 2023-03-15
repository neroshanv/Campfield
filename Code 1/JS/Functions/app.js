// // function singsong() {
// // console.log('<3')
// // }



// // ARGUMENTS EXAMPLE

// // function greet(firstName) {
// // console.log(`firstName is :${firstName}`)
// // }


// // RANT Exercise

// // function rant(message) {
// // console.log(`${message.toUpperCase()}`);
// // console.log(`${message.toUpperCase()}`);
// // console.log(`${message.toUpperCase()}`);
// // }


// // Multiple Arguments
// // firstName, lastName are defined as parameters
// function greet(firstName, lastName) {
//     console.log(`hey there, ${firstName} ${lastName[0]}.`)
// }



// // numTimes is how many times we want str to repeat
// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
// }


// function isSnakeEyes(x, y) {
//     let isSnakeEyes = '';
//     if (x === 1 && y === 1) {
//         console.log("Snake Eyes!")
//     }
//     else {
//         console.log("Not Snake Eyes");
//     }
// }


// function lastElement(x) {
//     if (x >= length - 1) {
//         return lastElement.length - 1;
//     }
//     else {
//         return null;
//     }
// }


// // 213. Function Expressions

// // This is a function expression 
// // square in the name of the variable but function doesn't have a name
// // so technically functions  are objects. function have the option of having a name, an name that's actually attached to it.

// const square = function (num) {
//     return num * num;
// }

// square(7);

// // -------------------------------

// // in this case, we're making a function with the name of ADD
// const add = function (x, y) {
//     return x + y;
// }

// // 214. Higher Order Function

// //Higher Order Functions

// // Functions that operate on/with other functions.
// // They can:
// // - accept other functions as arguments
// // - return a function


// // example

// function callTwice(func) {
//  func();
//  func();
// }

// function laugh() {
//      console.log("HAHAHAHAHA");
// }

// // pass a function as an arg
// callTwice(laugh)
// // "HAHAHAHAHA"
// // "HAHAHAHAHA"


// // Another ex

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i <10; i++) {
//         f()
//     } 
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// 215. Returning Functions

//ex

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS")
        }
    } else {
        return function () {
            alert(" YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            alert(" YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            alert(" YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            alert(" YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            alert(" YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            alert(" YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
        }
    }
}

// 216. Defining Methods

// we can add functions as properties on objects. 
// we call them METHODS!!

// ex.

const math = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    divide: function (x) {
        return x * x;
    }
};

// what is the difference between a method and a function?
// a method is simply a function that has been placed as a property on an object.

// basically, if we access a function by using a dot in front of it's name, 
// like "hello".toUpperCase()
// it's a method. but it's also a function
// so every method is a function, BUT not every function is a method


// ex.

const myMath = {
    PI: 3.141459,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        // num to the power of 3
        return num ** 3;
    }
}

// myMath.PI output: 3.14159
// myMath.square(2) output: 4
// myMath.cube(2) output: 8



// ------Shortcut------

// we do this so often that there's a new shortcut way of adding methods.

const Math = {
    blah: 'hi!',
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
}

// math.add(50, 60) output: 110


//217. The Mysterious Keyword 'this'


// 'this' in methods
// use the keyword 'this' to access other properties on the same object

// ex,

const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`
    }
}


// person.fullname(); output: "Robert Herjavac"
// person.last = "Plant";
// person.fullName(); output: "Robert Plant"

// KEEP IN MIND: The value of 'this' depnds on the invocation context of the function it is used in.
// meaning the value of 'this' actually can change, and it depends on how we actually call the function.


// 221. forEach

// accepts a callback function.
// call the function once per element in the array


const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n * n)
    // prints: 81, 64, 49, 36, 25, 16, 9, 4, 1

});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
        // prints: 8, 6, 4, 2
    }
})

// basically what it does is it allows us to run a function, run some code once per item in some array.
// so whatever function we pass in that function will be called once per item where each items will be passed
// forEach is not used often



// 222. map method


// creates a new array with the results of calling a callback on every element in the array

// similiar to forEach in the sense that it accepts a callback function and it runs that function
// once per element in the array


// what's very different is that it then generates a new array using the result, using the return value of that callback.
// so it's a way to map an array from one state to another.


// ex.

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
    return t.toUpperCase()
})

texts; //["rolf", "lol", "omg", "ttyl"]
caps; //["ROFL", "LOL", "OMG", "TTYL"]


// text array with some lowercase strings and then i'm calling text map.
// we pass in our callback function and i'm using (t) as a parameter here return t.toUpperCase
// so whatever that return value is, coming back from this callback function map is going to take that
// and add it into a new array that it creates and it returns and i can save it under the variable caps.

// ex

const numbers = [1, 2, 3, 4, 5, 6];

const doubles = numbers.map(function (num) {
    return num * 2;
})

// new array called doubles
// prints: [2,4,6,7,10,12]


// 226. setTimeout and setInterval

// ex.

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);


// Stop interval:
// clearInterval(id) in console


// 227. The filter Method

// Creates a new array with all elements that pass the test implemented by the provided function.

// filter is used when we have some array of elements where we want to filter out or make a subset in a new array.

// Sounds like changing the original array but we're not ailtering it in any way,
// for ex, i have this array of numbers

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
    return n % 2 === 1;
    // our callback returns true or false
    // if it returns true, n is added to the filtered array
})
// output: [9, 7, 5, 3, 1]

//otherwise it will be ignored




// Filter Exercise
// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]


// Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

function validUserNames(usernames) {
    // your code here
}


// or if you want to get fancy with an arrow function:

const validUserNames = usernames => // your code here;



    // Answer

    function validUserNames(usernames) {
        return usernames.filter(names => names.length < 10);
    }

















