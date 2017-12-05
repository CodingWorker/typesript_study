interface LabelledValue{
    label:string;
}

function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}

//此传入的实参并不需要继承或者实现 形参的类型接口，只需要在shape中满足即可（这里只需要是一个对象
//并且含有label属性
let myObj={size:10,label:"size 10 Object"};

printLabel(myObj);