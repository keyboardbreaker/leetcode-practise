export default function findMaxAverage(nums: number[], windowLength: number): number {
    let windowTotal = 0;
    for(let i = 0; i < windowLength; i++) {
        windowTotal += nums[i];
    }
    let maxAverage = windowTotal / windowLength;

    for(let i = windowLength; i < nums.length; i++) {
        //nums[4] - nums[0] = newNum - oldNum -> shifted one right.
        windowTotal += nums[i] - nums[i - windowLength];
        let currentAverage = windowTotal / windowLength;

        maxAverage = Math.max(currentAverage, maxAverage);
    }

    return maxAverage;
}