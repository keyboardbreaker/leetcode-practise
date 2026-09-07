const findMaxAverage = (arr: number[], windowLength: number): number => {
    let windowSum = 0;

    for(let i = 0; i < windowLength; i++) {
        windowSum += arr[i];
    }
    let maxAverage = windowSum / windowLength;
     
    for(let i = windowLength; i < arr.length; i++) {
        windowSum += arr[i] - arr[i-windowLength];
        let currentAverage = windowSum / windowLength;

        maxAverage = Math.max(currentAverage, maxAverage);
    }

    return maxAverage;
}

export default findMaxAverage;
