function isPalindrome(x: number): boolean {
    if(!Number.isInteger(x)) return false;
    const str = x.toString();
    
    if(str[0] === "-") return false;
    let i = 0;

    while(i < Math.ceil(str.length / 2)){
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        } else {
            i++;
        }
    }
    return true;
};

export default isPalindrome;