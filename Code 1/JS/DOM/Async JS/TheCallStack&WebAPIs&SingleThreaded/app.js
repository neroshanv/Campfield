// Call Stack

// - The mechanism the JS interpreter uses to keep track of it's place in a script that calls mutiple functions.
// - how JS 'knows' what function is currently being run and what functions are called from within that function, etc.


// how JS knows where it is like a glossary or appendix

// how it works:
// - when a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
// - any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// - when the current function is finished, the interpreter takes it off the stack and resumes execution hwere it left off in the last code listing



const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

// we can use google chrome in "source" section to pause and debug code
// we can see which line of code runs first and debug the situation whenever we come across an issue

// loupe is another way you can debug code <--------------------------
// NOTE: it does not like arrow function or latin const




// 274 WebAPIs & Single Threaded

// -basically it means at any given point in time, that single JS thread is running at most one line of JS code.
// 