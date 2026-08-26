import gcdOfStrings from "./solution";

test("should have common divisor of ABC: ", () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toEqual("ABC");
});

test("should have common divisor of AB: ", () => {
    expect(gcdOfStrings("ABABAB", "ABAB")).toEqual("AB");
});

test("should have common divisor of '': ", () => {
    expect(gcdOfStrings("LEET", "CODE")).toEqual("");
});

test("should have common divisor of '': ", () => {
    expect(gcdOfStrings("AAAAAB", "AAA")).toEqual("");
});