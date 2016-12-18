function f03(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    return a;
}
console.log(f03(true));
