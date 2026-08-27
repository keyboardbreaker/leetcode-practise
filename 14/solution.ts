function longestCommonPrefix(strs: string[]): string {
    //get shortest string to be longest prefix
    let shortestStr = strs[0];
    for(let str of strs) {
        if(str.length < shortestStr.length) {
            shortestStr = str;
        }
    }

    //scan from left to right the characters exist in the other strings
    let prefix = shortestStr;
    //O(n x m) complexity
    while(prefix !== "") {
        let prefixExist = true;
        for(let i = 0; i < strs.length; i++) {
            if(strs[i].startsWith(prefix)) {
                continue;
            } else {
                prefixExist = false;
                prefix = prefix.substring(0, prefix.length - 1);
                break;
            }
        }
        if(prefixExist) {
            break;
        }
    }
    return prefix;
};

export default longestCommonPrefix;