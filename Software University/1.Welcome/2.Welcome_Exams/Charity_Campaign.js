function charity(input) {

    const cakes = input[2] * 45;
    const waffles = input[3] * 5.80;
    const pancakes = input[4] * 3.20;
    // made by one baker ^
    const dailyCost = (waffles + cakes + pancakes) * input[1];

    const wholeMoney = dailyCost * input[0];
    const wholeAmount = wholeMoney - (wholeMoney / 8);
    console.log(wholeAmount);
    // expenses included ^
}
charity(["23", "8", "14", "30", "16"]);