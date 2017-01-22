class GenericNumber<T>{
    add: (val1: T, val2: T)  => T;
}

var aNumber = new GenericNumber<number>();

aNumber.add = function(x, y) {return x+y};

document.write("5 + 4 =" + aNumber.add(5,4)+"<br />");

var aStrnNum = new GenericNumber<string>();

aStrnNum.add = function(x, y) {return String(Number(x) + Number(y));};

document.write("5 + 4 =" + aStrnNum.add("5","4")+"<br />");