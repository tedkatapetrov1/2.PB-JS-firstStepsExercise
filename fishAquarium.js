// 1.	Дължина в см – цяло число в интервала [10 … 500]
// 2.	Широчина в см – цяло число в интервала [10 … 300]
// 3.	Височина в см – цяло число в интервала [10… 200]
// 4.	Процент  – реално число в интервала [0.000 … 100.000]

// V=a.b.c

function fishAquarium(input) {
    let lengthAquarium = Number(input[0]);
    let widthAquarium = Number(input[1]);
    let heightAquarium = Number(input[2]);
    let Percentage = Number(input[3]);

    let Bulk = lengthAquarium * widthAquarium * heightAquarium;
    let bulkLitters = Bulk * 0.001;

    let filling = bulkLitters * 0.17;

    let totalLitters = bulkLitters - filling;

    console.log(totalLitters);
}

fishAquarium(["85", "75", "47", "17"])