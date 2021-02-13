function birthday(input) {
    let rent = Number(input[0]);
    let cake = (rent / 100) * 20;
    let drinks = cake - ((cake / 100) * 45);
    let animator = rent / 3;
    let fullPayment = rent + cake + drinks + animator;
    console.log(fullPayment);
}
birthday(["2250"])