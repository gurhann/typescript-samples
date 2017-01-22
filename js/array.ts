var employees: String [] = ["Ahmet", "Mehmet", "Mert"];

document.write(employees.toString() + "<br />");

var superman: SuperHero = {
    realName: "Clark Kent",
    supername: "Superman"
};

var superHeroes: SuperHero [] = [];
superHeroes.push({
    realName: "Bruce Wayne",
    supername: "Batman"
});
document.write(superHeroes[0].realName + " is " + superHeroes[0].supername + "<br />");
