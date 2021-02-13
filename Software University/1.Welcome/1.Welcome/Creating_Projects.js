function creatingProjects(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let Hours = (projects * 3);
    console.log("The architect " + name + " will need " + Hours + " hours to complete " + projects + " project/s.")
}
creatingProjects(["Mark", 3])