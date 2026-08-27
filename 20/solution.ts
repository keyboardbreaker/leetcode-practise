function isValid(s: string): boolean {
    let stack = [];
    let charMap = new Map<string,string>();
    charMap.set("}", "{");
    charMap.set(")", "(");
    charMap.set("]", "[");

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if(stack.length === 0 ) {
                return false;
            }
            if(charMap.get(s[i]) === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

export default isValid;