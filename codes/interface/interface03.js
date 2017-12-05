function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var otherSquare = createSquare({});
console.log(mySquare);
console.log(otherSquare);
