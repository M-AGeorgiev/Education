function veggies_shop(args) {
    const veggiesPrice = args[0] * args[2];
    // console.log(veggiesPrice);
    const fruitsPrice = args[1] * args[3];
    // console.log(fruitsPrice);
    const wholeAmount = veggiesPrice + fruitsPrice;
    const inEUR = wholeAmount / 1.94;
    console.log(inEUR.toFixed(2));
}
veggies_shop([0.194, 19.4, 10, 10]);