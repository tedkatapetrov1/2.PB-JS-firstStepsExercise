// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]


function repainting (input) {
    let neededNylon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededThinner = Number(input[2]);
    let neededHoursForWork = Number(input[3]);

    let Nylon = (neededNylon * 1.50) + (2 * 1.50);

    let paint = neededPaint * 14.50;
    let morePaint = paint * 0.10;
    let totalPaint = paint + morePaint;

    let Thinner = neededThinner * 5;
    let totalRepairSum = Nylon + totalPaint + Thinner + 0.40;

    let oneHourForWorker = totalRepairSum * 0.30;

    let workersHour = neededHoursForWork * oneHourForWorker;

    let finalSum = totalRepairSum + workersHour;


    console.log(finalSum);

}

repainting(["10", "11", "4", "8"]);