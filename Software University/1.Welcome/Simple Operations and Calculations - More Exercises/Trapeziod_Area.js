function trapeziod_area(args) {
    const b1 = args[0];
    const b2 = args[1];
    const h = args[2];
    const area = (b1 + b2) * h / 2;
    console.log(area.toFixed(2));
}


trapeziod_area([8, 13, 7]);