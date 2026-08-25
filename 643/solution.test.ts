import findMaxAverage from "./solution";

test("should return 12.75000: ", () => {
    expect(findMaxAverage([1,12,-5,-6,50,3], 4)).toEqual(12.75000);
});

test("should return 5: ", () => {
    expect(findMaxAverage([5], 1)).toEqual(5);
});