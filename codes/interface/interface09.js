function createSequare(config) {
    var newSequare = { color: "white", area: 100 };
    if (config.color) {
        newSequare.color = config.color;
    }
    if (config.width) {
        newSequare.area = config.width;
    }
    return newSequare;
}
var mySequare = createSequare({ colour: "black" }); //接口声明了字符串索引签名
