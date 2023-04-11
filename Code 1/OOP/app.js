// This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"


function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        // this; is refered to const color = {};
        const { r, g, b } = this;
        return `rbg(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return {
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        };
    };
    return color;
}

