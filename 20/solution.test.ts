import isValid from "./solution";


test("should have matching parenthesis: ", () => {
    expect(isValid("()")).toEqual(true);
});

test("should have matching parenthesis: ", () => {
    expect(isValid("()[]{}")).toEqual(true);
});

test("should have not have matching parenthesis: ", () => {
    expect(isValid("(]")).toEqual(false);
});

test("should have matching parenthesis: ", () => {
    expect(isValid("([])")).toEqual(true);
});