function housePainting(args) {
    const sideWall = args[0] * args[1];
    const window = 1.5 * 1.5;
    const bothWalls = (2 * sideWall) - (2 * window);
    const backWall = args[0] * args[0];
    const entrance = 1.2 * 2;
    const backAndFrontWall = 2 * backWall - entrance;
    const greenDye = (bothWalls + backAndFrontWall) / 3.4;
    // walls ^
    const bothRectangelsOnTheRoof = 2 * sideWall;
    const bothTriangles = 2 * ((args[0] * args[2]) / 2);
    const redDye = (bothRectangelsOnTheRoof + bothTriangles) / 4.3;
    // roof ^
    console.log(greenDye.toFixed(2));
    console.log(redDye.toFixed(2));
}
housePainting([10.25, 15.45, 8.88])




    // x = args[0];
    // y = args[1];
    // h = args[2];
