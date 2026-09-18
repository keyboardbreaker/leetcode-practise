import isPalindrome from "./solution";

test("should have show 121 is a palindrome: ", () => {
    expect(isPalindrome(121)).toEqual(true);
});

test("should have show -121 is not a palindrome: ", () => {
    expect(isPalindrome(-121)).toEqual(false);
});

test("should have show 10 is not a palindrome: ", () => {
    expect(isPalindrome(10)).toEqual(false);
});