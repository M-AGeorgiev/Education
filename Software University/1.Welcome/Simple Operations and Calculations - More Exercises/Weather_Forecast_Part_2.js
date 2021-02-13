function weatherForecastPart2(args) {
    if (args[0] >= 26 && args[0] <= 35) {
        console.log("Hot");
    } else if (args[0] >= 20.1 && args[0] <= 25.9) {
        console.log("Warm");
    } else if (args[0] >= 15 && args[0] <= 20) {
        console.log("Mild");
    } else if (args[0] >= 12 && args[0] <= 14.9) {
        console.log("Cool");
    } else if (args[0] >= 5 && args[0] <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}


weatherForecastPart2([2])