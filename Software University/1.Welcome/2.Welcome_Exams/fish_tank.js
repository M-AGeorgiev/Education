function fish_tank(input) {
    let Length = Number(input[0]);
    let weight = Number(input[1]);
    let height = Number(input[2]);
    let percents = Number(input[3]) * .01;

    let litersRequeired = (Length * weight * height) * 0.001;
    let finalRequeirment = litersRequeired * (1 - percents);
    console.log(finalRequeirment);
}

//248.68875
fish_tank(["85", "75", "47", "17"]);

