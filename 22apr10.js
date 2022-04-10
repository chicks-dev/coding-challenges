//Given an array of numbers, compute the average and compare it to a set integer


function betterThanAverage(classPoints, yourPoints) {
        const totalScore = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = totalScore / classPoints.length - 1;
        return (yourPoints >= average);
}
