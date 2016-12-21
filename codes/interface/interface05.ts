interface Point{
    readonly x:number;   //只读属性
    readonly y:number;   //只读属性
}

let p1:Point={x:10,y:10};
p1.x=5;   //编译时会出错，readonly在定义后不能修改
