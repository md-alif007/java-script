const heights = [66, 67, 34, 68, 23, 78, 90, 46];

function getMax(numbers) {
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

const max = getMax(heights);
console.log(max);