// const navColor = new Color('carrot', [230, 126, 34]);
// const logoColor = new COlor('emerald', [46, 204, 113]);



// 300. Factory Function



// i want to make an object that can convert back and forth from RGB to HEX without having to pass in numbers each time.


// converts RGV colors to HEX colors
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
    return `rgb${r}, ${g}, ${b}`
}

// if you enter this in console, it will give back the hex color version
// hex(255, 100, 25);

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb${r}, ${g}, ${b}`;
    };
    color.hex = function () {
        // this; is referred to color object
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeCOlor(35, 255, 150);
