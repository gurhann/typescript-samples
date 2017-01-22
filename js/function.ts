var getSum = function(num1: number, num2: number) : number {
    return num1 + num2;
}

var total: number = getSum(5,2);

document.write("5+2=" + total + "<br />");

var getDiff = function(num1: number, num2: number, num3?:number) : number {
    if(typeof num3 !== 'undefined') {
        return num1- num2- num3;
    } 
    return num1-num2;
}

var diff1: number = getDiff(5,2);
document.write("5-2=" + diff1 + "<br />");

var diff2: number = getDiff(5,2,1);
document.write("5-2-1=" + diff2 + "<br />");


var sumAll = function (...nums: number[]): void {
    var sum = nums.reduce((a,b) => a+b ,0);
    document.write("Sum:" +sum  + "<br />" );
}
sumAll(1,2,3,4,5,6);

var addOne = (x) => x+ 1;

document.write("1+1 = " + addOne(1));
