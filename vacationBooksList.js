// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

function vacationBooksList(input) {
    let currBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysForRead = Number(input[2]);

    let hourlyPages = currBookPages / pagesPerHour;
    let totalSum = hourlyPages / daysForRead;
    console.log(totalSum);

}

vacationBooksList(["212", "20", "2"]);