function deposit_calculator(input) {
    let sum = Number(input[0]);
    let depositTime = Number(input[1]);
    let annualInterestRate = Number(input[2])
    //let totalSum = sum + depositTime * ((sum * annualInterestRate) / 12);
    let calculateAmounth = sum * (annualInterestRate * 0.01);
    let oneMonthInterest = calculateAmounth / 12;
    let fullSum = sum + (depositTime * oneMonthInterest);
    console.log(fullSum);
}
deposit_calculator(["200", "3", "5.7"])