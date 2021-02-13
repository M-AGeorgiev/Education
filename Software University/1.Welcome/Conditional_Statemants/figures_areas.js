function figuresAreas(args) {
    const figure = args[0];
    const num1 = args[1];
    const num2 = args[2];
    if (figure == "square") {
        var answer = num1 * num1
        console.log(answer.toFixed(3));
    } else if (figure == "rectangle") {
        var answer = num1 * num2;
        console.log(answer.toFixed(3));
    } else if (figure == "circle") {
        var answer = Math.PI * (num1 * num1);
        console.log(answer.toFixed(3));
    } else if (figure == "triangle") {
        var answer = (num1 / 2) * num2;
        console.log(answer.toFixed(3));
    } else {
        undefined;
    }
}
figuresAreas(["triangle", 4.5, 20])