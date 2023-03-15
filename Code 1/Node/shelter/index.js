
// index.js is like an entry point, it's an main file for this directory
// so when i require an entire directory, node is going to look for an index file and whatever that file exports is what the directory will export


const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')


const allCats = [blue, sadie, janet]
// console.log(allCats);

module.exports = allCats;