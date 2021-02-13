function circleArea(args) {
    const area = Math.PI * (args[0] * args[0]);
    console.log(area.toFixed(2));
    const perimeter = 2 * Math.PI * args[0];
    console.log(perimeter.toFixed(2));
}


circleArea([3])