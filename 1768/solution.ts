function mergeAlternately(word1: string, word2: string): string {
    const arr1 = word1.split('');
    const arr2 = word2.split('');

    let longest = word1.length <= word2.length ? word2.length : word1.length;
    
    let rtnArray = [];
    for(let i = 0; i < longest; i++) {
        if(arr1[i]!== undefined) {
            rtnArray.push(arr1[i])
        }
        if(arr2[i]!== undefined) {
            rtnArray.push(arr2[i])
        }
    }

    return rtnArray.join('');
};
export default mergeAlternately;