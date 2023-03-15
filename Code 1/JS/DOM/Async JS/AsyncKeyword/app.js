// 280. Async keyword

// a newer and clearner syntax for working iwth async code!
// syntax "makeup" for promises


// Async functions always return a promise.
// if the function returns a value, the promise will be resoved with that value.
// if the function thorws a exception, the promise will be rejected 
// -----------------------------------------------------------------------------------

// automatically returns a promise!!!
//  async function hello() 
// }


// return a resolved

// const sing = async () => {
//     return 'LA LA LA LA'
// }


// sing().then(() => {
//     console.log("PROMISE RESOLVED WITH:", data)
// })



// return a rejection
// const sing = async () => {
//     throw new Error("UH OH")
//     return 'LA LA LA LA'
// }



// const sing = async () => {
//     throw "OH NO, PROBLEM"
//     return 'LA LA LA LA LA'
// }


// sing()
//     .then(date => {
//         console.log("PROMISE RESOLVED WITH:", data)
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED")
//         console.log(err)
//     })

// ---------------------------------------------------
// EXAMPLE

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'INVALID PASSWORD'
}

login('asdsdfsdf')
    .then(msg => {
        console.log("LOGGED IN")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })