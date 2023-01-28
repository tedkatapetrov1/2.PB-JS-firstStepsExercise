// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]

function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegMenus = Number(input[2]);

    let totalChicken = chickenMenus * 10.35;
    let totalFish = fishMenus * 12.40;
    let totalVeg = vegMenus * 8.15;

    let sum = totalChicken + totalFish + totalVeg;
    let dessert = sum * 0.20;
    let totalSum = sum + dessert + 2.50;

    console.log(totalSum);

}

foodDelivery(["2", "4", "3"])