const longestsubstring = (s) => {
    
    let left = 0, right = 0, length = 0, set = new Set();
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            right++;
            length = Math.max(length, right - left);
        } else {
            set.delete(s[left]);
            left++;
        };
    };
    return length;
};

console.log(longestsubstring("abcabcbb"));
console.log(longestsubstring("bbbbb"));
console.log(longestsubstring("pwwkew"));
console.log(longestsubstring("dvdf"));
console.log(longestsubstring("ckilbkd"));