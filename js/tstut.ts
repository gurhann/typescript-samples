var myName: string  = "Gurhan";
var myAge: number = 23;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;

document.getElementById("tsStuff").innerHTML = "My name is" + myName ;


document.write("myname is a " + typeof(myName) + "<br />");
document.write("myAge is a " + typeof(myAge) + "<br />");
document.write("canVote is a " + typeof(canVote) + "<br />");
document.write("anything is a " + typeof(anything) + "<br />");
 
var strToNum: number = parseInt("5");
var numToStr: number = 5;

document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />");
const PI = 3.14159;