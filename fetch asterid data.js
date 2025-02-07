function analyzeAsteroidData(asteroidData) {
    let asteroidDiameters = [];

    for (const date in asteroidData) {
        const asteroids = asteroidData[date];

        asteroids.forEach(asteroid => {
            const maxDiameter = asteroid.estimated_diameter.kilometers.estimated_diameter_max;
            asteroidDiameters.push(maxDiameter);
        });
    }

    const totalAsteroids = asteroidDiameters.length;
    let averageDiameter = 0;

    if (totalAsteroids > 0) {
        const sumDiameters = asteroidDiameters.reduce((sum, diameter) => sum + diameter, 0);
        averageDiameter = sumDiameters / totalAsteroids;
    }

    console.log("Total asteroids found:", totalAsteroids);
    console.log("Average asteroid diameter:", averageDiameter.toFixed(3));
}
