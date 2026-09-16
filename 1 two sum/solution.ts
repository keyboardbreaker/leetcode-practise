function twoSum(nums: number[], target: number) {
    let numMap = new Map<number,number>();
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        //if yes → you already saw the matching number
        //return [indexOfComplement, i]
        if(numMap.has(compliment)) {
            return [numMap.get(compliment), i]
        } else {
            numMap.set(nums[i], i);
        }
    }
};

export default twoSum;