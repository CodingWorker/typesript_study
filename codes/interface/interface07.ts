let a:number[]=[1,2,3];
let ro:ReadonlyArray<number>=a;   //可将一个普通数组赋值给一个只读数组

// let b:number[]=ro;                 //但是不能将一个只读数组赋值给普通数组
let c:number[]=ro as number[];     //非要如此需要加上类型转换
