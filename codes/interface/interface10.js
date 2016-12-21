function createSequare10(config) {
    var newSequare = { color: "white", area: 100 };
    if (config.color) {
        newSequare.color = config.color;
    }
    if (config.width) {
        newSequare.area = config.width;
    }
    return newSequare;
}
// let mySequare10=createSequare10({colour:"black"} as SequareConfig);   //第二种方法
var squareOptions = { colour: "black" };
var mySequare10 = createSequare10(squareOptions); //将参数放在外边就不会有属性、类型检查
console.log(mySequare10);
