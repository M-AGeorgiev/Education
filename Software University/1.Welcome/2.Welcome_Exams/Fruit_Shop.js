function FruitShop(input) {
    let strawberryPrice = Number(input[0]);
    let bananasKG = Number(input[1]);
    let orangesKG = Number(input[2]);
    let berriesKG = Number(input[3]);
    let strawberryKG = Number(input[4]);

    let berriesPrice = strawberryPrice / 2;
    let orangesPrice = berriesPrice - (0.4 * berriesPrice);
    let bananasPrice = berriesPrice - (0.8 * berriesPrice);

    let berrieSum = berriesKG * berriesPrice;
    let orangesSum = orangesKG * orangesPrice;
    let bananasSum = bananasKG * bananasPrice;
    let sBSum = strawberryPrice * strawberryKG;

    let finalPrice = berrieSum + bananasSum + sBSum + orangesSum;
    console.log(finalPrice);
}
FruitShop(["63.5",
    "3.57",
    "6.35",
    "8.15",
    "2.5"])