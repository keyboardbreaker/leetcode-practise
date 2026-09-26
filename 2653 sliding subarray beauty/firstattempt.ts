const getSubarrayBeauty = (nums: number[], windowSize: number, x: number): number[] =>{
    let rtnArray = []
    for(let i = 0; i <= nums.length - windowSize; i++) {
        let arr = [];
        for(let j = 0; j < windowSize; j++) {
            arr.push(nums[i+j]);
        }
        let sorted = arr.sort((a, b) => a - b) //smallest to biggest
        let xSmallestIndex = x - 1;
        if(sorted[xSmallestIndex] < 0) {
            rtnArray.push(sorted[xSmallestIndex]);
        } else{
            rtnArray.push(0);
        }
    }
    return rtnArray;
};