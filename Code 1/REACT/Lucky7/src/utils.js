// Gets random integar: [1..6]

function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

// Get n rolls => [num, ...]

// return an array of n rolls long
// it calls d6 function 3 times or 3 times and it makes an array
function getRolls(n) {
    return Array.from({ length: n }, () => d6());
}

// Get sum of nums

function sum(nums) {
    return nums.reduce((prev, cur) => prev + cur, 0)
}