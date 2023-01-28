// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]

function suppliesForSchool(input) {
    let numPacksPencils = Number(input[0]);
    let numPacksMarkers = Number(input[1]);
    let litersNeededForOneDesk = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let sum = (numPacksPencils * 5.80) + (numPacksMarkers * 7.20) + (litersNeededForOneDesk * 1.20);
    let discount = sum * 0.25;
    let totalSum = sum - discount;
    console.log(totalSum);
}

suppliesForSchool(["2", "3", "4", "25"])