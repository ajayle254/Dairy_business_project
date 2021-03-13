var sheds = [
    {
        name: "Shed A",
        numberOfCows: 34,
        averageProduction: 15
    },
    {
        name: "Shed B",
        numberOfCows: 11,
        averageProduction: 28
    },
    {
        name: "Shed C",
        numberOfCows: 27,
        averageProduction: 18

    },
    {
        name: "Shed D",
        numberOfCows: 52,
        averageProduction: 11
    }
];
var numberOfSheds = sheds.length;
var months = {January: 31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31};
function totalProduction(verbose){
total_production = 0;
index = 0;
while(index < numberOfSheds){
    total_production += sheds[index].numberOfCows * sheds[index].averageProd;
    shed_production = sheds[index].numberOfCows * sheds[index].averageProd;
    if (verbose === true){

    }