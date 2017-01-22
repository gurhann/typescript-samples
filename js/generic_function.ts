function GetType<T>(val: T) : string {
    return typeof(val);
}

var aStr = "A String";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");