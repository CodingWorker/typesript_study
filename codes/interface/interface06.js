var a = [1, 2, 4];
var ro = a; //浅复制，只复制值
console.log(a[0]);
a.push(12);
a.length = 12;
console.log(a);
console.log(ro[0]);
