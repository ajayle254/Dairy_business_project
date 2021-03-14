var sheds = [
    {
        name: "cowShed A",
        numberOfCows: 15,
        averageProduction: 34
    },
    {
        name: "cowShed B",
        numberOfCows: 11,
        averageProduction: 28
    },
    {
        name: "cowShed C",
        numberOfCows: 18,
        averageProduction: 27

    },
    {
        name: "cowShed D",
        numberOfCows: 11,
        averageProduction: 52
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
    };