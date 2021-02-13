function fishLand(args) {
    const bonitoPrice = args[2] + (args[2] * .60);
    const bonitoSum = 1.5 * bonitoPrice;
    const trachurusPrice = args[1] + (args[1] * .80);
    const trachurusSum = args[3] * trachurusPrice;
    const musselsSum = args[4] * 7.50;

    const finalSum = bonitoSum + trachurusSum + musselsSum;
    console.log(finalSum.toFixed(2));

}


fishLand([5.55, 3.57, 4.3, 3.6, 7])

    // 	Първи ред – цена на скумрията на килограм.Реално число в интервала[0.00…40.00]
    // 	Втори ред – цена на цацата на килограм.Реално число в интервала[0.00…30.00]
    // 	Трети ред – килограма паламуд.Реално число в интервала[0.00…50.00]
    // 	Четвърти ред – килограма сафрид.Реално число в интервала[0.00… 70.00]
    // 	Пети ред – килограма миди.Цяло число в интервала[0 ... 100]
    //  Trachurus - safrid
    //  bonito - palamud
    //  mussels - midi
    //  Mackerel - скумрия
    //  sprat- caca