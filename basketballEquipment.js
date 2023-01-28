// •	Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]



// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка


function basketballEquipment (input) {
    let yearlyPriceForTraining = Number(input[0]);

    let basketballShoes = yearlyPriceForTraining * 0.40;
    let totalBasketballShoes = yearlyPriceForTraining - basketballShoes;

    let basketballOutfit = totalBasketballShoes * 0.20;
    let totalBasketballOutfit = totalBasketballShoes - basketballOutfit;

    let basketBall = totalBasketballOutfit / 4;

    let basketballAccessories = basketBall / 5;

    let totalSumForTraining = totalBasketballShoes + totalBasketballOutfit + basketBall + basketballAccessories + yearlyPriceForTraining;

    console.log(totalSumForTraining);

}

basketballEquipment(["365"])