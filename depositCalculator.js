// // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

// 1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
// 2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
// 3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]


function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositLengthMonths = Number(input[1]);
    let yearlyPercent = Number(input[2]);

    let yearlyDecimal = yearlyPercent / 100;

    let totalSum = depositedSum + depositLengthMonths * ((depositedSum * yearlyDecimal) / 12);

    console.log(totalSum);

}

depositCalculator(["200", "3", "5.7"])