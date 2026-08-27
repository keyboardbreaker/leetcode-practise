import longestCommonPrefix from "./solution";

test("should have longestCommonPrefix of 'fl': ", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
});

test("should have longestCommonPrefix of '': ", () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
});