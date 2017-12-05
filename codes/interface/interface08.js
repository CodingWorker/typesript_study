function createSequare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
// let mySquare01=createSequare({width:12,colour:"black"});   //这样写反而出错，可选参数并不会忽略这个
var mySquare02 = createSequare({ width: 12, colour: "black" }); //加上类型声明就不会出错了
console.log(mySquare02);
