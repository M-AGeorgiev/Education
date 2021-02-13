function guessThePass(args) {
    const pass = args[0];
    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
guessThePass(["s3crt!P@ssw0rd"])