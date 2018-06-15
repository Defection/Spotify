var decodeString = function(s) {
    var output = "";
    var subStr = "";
    var num = 0;
    var openBraces = 0;
    for (var i = 0; i < s.length; i++) {
        var strVal = s[i];
        // console.log(num)
        if (openBraces >= 1) {
            subStr += strVal;
        }
        if (strVal === "[") {
            openBraces++;
        } else if (strVal === "]") {
            openBraces--;
            if (openBraces === 0) {
                for (var j = 0; j < num; j++) {
                    output += decodeString(subStr);
                }
                num = 0;
                subStr = "";
            }
        } else {
            if (openBraces === 0) {
                if (parseInt(strVal) >= 0) {
                    num += strVal;
                } else {
                    output += strVal;
                }
            }
        }
    }
    return output;
};

console.log(decodeString("4[ab]")); //"abababab"
console.log(decodeString("2[b3[a]]")); //"baaabaaa"
