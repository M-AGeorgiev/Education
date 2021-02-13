function concatenateData(input) {
    let FirstName = input[0];
    let secondName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    let fullname = FirstName + secondName;
    console.log("You are " + FirstName + " " + secondName + "," + " a " + age + "-years old person from " + city + ".");
}