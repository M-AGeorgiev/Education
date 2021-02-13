function match_tickets(args) {

    const budget = args[0];
    const category = args[1];
    const peopleAmount = args[2];
    if (category == "VIP") {
        const ticketPrice = 499.99;
        if (peopleAmount > 0 && peopleAmount <= 4) {
            const transport = budget * .75;
            const moneyLeft = budget - transport;
            const ticketsCost = category * peopleAmount;
            if (ticketsCost > moneyLeft) {
                const moneyNeeded = ticketsCost - moneyLeft;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            } else if (ticketsCost < moneyLeft) {
                const bucksLeftedWith = moneyLeft - ticketsCost;
                console.log(`Yes! You have ${bucksLeftedWith.toFixed(2)} leva left.`);
            } else if (peopleAmount >= 5 && peopleAmount <= 9) {
                const transport = budget * .60;
                const moneyLeft = budget - transport;
                const ticketsCost = category * peopleAmount;
            } if (ticketsCost > moneyLeft) {
                const moneyNeeded = ticketsCost - moneyLeft;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            } else if (ticketsCost < moneyLeft) {
                const bucksLeftedWith = moneyLeft - ticketsCost;
                console.log(`Yes! You have ${bucksLeftedWith.toFixed(2)} leva left.`);
            } else if (peopleAmount >= 10 && peopleAmount <= 24) {
                const transport = budget * .50;
                const moneyLeft = budget - transport;
                const ticketsCost = category * peopleAmount;
            } if (ticketsCost > moneyLeft) {
                const moneyNeeded = ticketsCost - moneyLeft;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            } else if (ticketsCost < moneyLeft) {
                const bucksLeftedWith = moneyLeft - ticketsCost;
                console.log(`Yes! You have ${bucksLeftedWith.toFixed(2)} leva left.`);
            } else if (peopleAmount >= 25 && peopleAmount <= 49) {
                const transport = budget * .40;
                const moneyLeft = budget - transport;
                const ticketsCost = category * peopleAmount;
            } if (ticketsCost > moneyLeft) {
                const moneyNeeded = ticketsCost - moneyLeft;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            } else if (ticketsCost < moneyLeft) {
                const bucksLeftedWith = moneyLeft - ticketsCost;
                console.log(`Yes! You have ${bucksLeftedWith.toFixed(2)} leva left.`);
            } else if (peopleAmount >= 50) {
                const transport = budget * .25;
                const moneyLeft = budget - transport;
                const ticketsCost = category * peopleAmount;
            } if (ticketsCost > moneyLeft) {
                const moneyNeeded = ticketsCost - moneyLeft;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            } else if (ticketsCost < moneyLeft) {
                const bucksLeftedWith = moneyLeft - ticketsCost;
                console.log(`Yes! You have ${bucksLeftedWith.toFixed(2)} leva left.`);
            }
            /*
            const moneyLeft = budget - transport;
            const ticketsCost = category * peopleAmount;
            if (ticketsCost > moneyLeft){
            const moneyNeeded = ticketsCost - moneyLeft;
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            } else if (ticketsCost < moneyLeft) {
            const bucksLeftedWith = moneyLeft - ticketsCost;
            console.log(`Yes! You have ${bucksLeftedWith.toFixed(2)} leva left.`);
            }
            
            
            
            
            */


        }
    }
}
match_tickets([1000,
    "Normal",
    1])