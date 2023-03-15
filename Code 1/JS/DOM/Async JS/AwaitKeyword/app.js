// 281 The Await Keyword


// it allows us to write a asynchoronus code that it looks like is synchronouse

// we can only use the await keyword inside of functions declared with async.
// await will pause the execution of the function, waiting for a promise to be resolved

const delayledColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


async function rainbow() {
    // it's goint o wait for a promise to be resolved
    // await gets replaced with .then
    // each line will only run when the promise before it runs 
    await delayledColorChange('red', 1000)
    await delayledColorChange('orange', 1000)
    await delayledColorChange('blue', 1000)
    await delayledColorChange('yellow', 1000)
    await delayledColorChange('pink', 1000)
    await delayledColorChange('purple', 1000)
    await delayledColorChange('green', 1000)
    return "ALL DONE"
}

rainbow().then(() => console.log("END OF RAINBOW"))

//                  or

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW")
}


// 282.

// what happens when a promise is rejected that we are awaiting.

try {
    sdfsdf.log('sdf')
} catch (e) {
    console.log('its okay')
}

// "try" will throw an error
// and catch handles the error


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('connection timeout :(')
            } else {
                resolve(`here is your fake data from ${url}`)
            }
        }, delay)

    })
}



async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}