import mergeAlternately from "./solution";

test("should return apbqcr: ", () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
});

test("unequal lengths should return apbqrs: ", () => {
    expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
});

test("unequal lengths should return apbqcd: ", () => {
    expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
});