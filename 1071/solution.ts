//greatest common divisor of strings
function gcdOfStrings(str1: string, str2: string): string {
    if(str1 + str2 !== str2 + str1) {
        return "";
    }

    const longerStr = str1.length <= str2.length ? str2 : str1;
    const shorterStr = str1.length <= str2.length ? str1 : str2;
    
    //find prefix
    let prefix = shorterStr;
    while(prefix !== "") {
        if(longerStr.length % prefix.length === 0 &&
            shorterStr.length % prefix.length === 0 &&
            prefixRepeats(prefix, longerStr) &&
            prefixRepeats(prefix, shorterStr)
        ) {
            return prefix;
        } else {
            //make prefix smaller
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return "";
};

function prefixRepeats(prefix: string, candidateStr: string): boolean {
    let repeats = candidateStr.length / prefix.length;
    let rebuild = "";
    for(let i = 0; i < repeats; i++) {
        rebuild += prefix;
    }

    return rebuild === candidateStr;
}

export default gcdOfStrings;