import twoSum from "./solution";

test("should return indexes of numbers return sum of target': ", () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
});

test("should return indexes of numbers return sum of target': ", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});

test("should return indexes of numbers return sum of target': ", () => {
    expect(twoSum([3, 3], 6)).toEqual([0,1]);
});