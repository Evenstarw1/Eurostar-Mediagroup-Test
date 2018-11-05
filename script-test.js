function chocolateBar (s, d, m) {    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
            result++;
        }
    }
    
    return result;
}
