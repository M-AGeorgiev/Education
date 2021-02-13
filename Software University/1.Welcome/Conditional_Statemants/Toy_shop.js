function toyShop(args) {
    const sum = (args[1] * 2.60) + (args[2] * 3) + (args[3] * 4.10) + (args[4] * 8.20) + (args[5] * 2);
    // whole money ^
    const toys = args[1] + args[2] + args[3] + args[4] + args[5];
    // toys amount ^
    const discount = sum * .25;
    const finalPrice = sum - discount;
    const rent = finalPrice * .10;
    const earnings = finalPrice - rent;
    if (toys > 50) {

        if (earnings > args[0]) {
            const moneyForVac = earnings - args[0];
            console.log(`Yes! ${moneyForVac.toFixed(2)} lv left.`);
        }
    }
    if (toys < 50) {
        const finalPrice = sum;
        const rent = finalPrice * .10;
        const earnings = finalPrice - rent;
        if (earnings < args[0]) {
            const neededMoney = args[0] - earnings;
            console.log(`Not enough money! ${neededMoney.toFixed(2)} ls needed.`);
        }
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])




// ⦁	Цена на екскурзията - реално число в интервала[1.00 … 10000.00] 0
// ⦁	Брой пъзели - цяло число в интервала[0… 1000] 1
// ⦁	Брой говорещи кукли - цяло число в интервала[0 … 1000] 2
// ⦁	Брой плюшени мечета - цяло число в интервала[0 … 1000] 3
// ⦁	Брой миньони - цяло число в интервала[0 … 1000] 4 
// ⦁	Брой камиончета - цяло число в интервала[0 … 1000] 5
// ⦁	Пъзел - 2.60 лв.
// ⦁	Говореща кукла - 3 лв.
// ⦁	Плюшено мече - 4.10 лв.
// ⦁	Миньон - 8.20 лв.
// ⦁	Камионче - 2 лв.
