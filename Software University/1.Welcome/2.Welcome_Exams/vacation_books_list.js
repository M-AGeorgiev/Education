function bookList(input) {
    let bookPages = input[0];
    let pagesPerHour = input[1];
    let daysLeft = input[2];
    let requiredTime = bookPages / pagesPerHour;
    let hoursPerDay = requiredTime / daysLeft;
    console.log(hoursPerDay);
}
bookList(["212", "20", "2"])