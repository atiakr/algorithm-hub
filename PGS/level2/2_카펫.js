const solution = (brown, yellow) => {
    // 노란색 격자가 소수인경우 [yellow + 2, 3];
    // 2 개인경우 [4, 3]
    // 4 개인경우 (4, 12) => [6, 3] or (4, 14) => [4, 4]
    const isPrime = (num) => {
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(n); i+= 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    if (isPrime(yellow)) return [yellow + 2, 3];
    
    // 가로의 길이는 나눈 값 + 2, 세로의 길이도 나눈 값 + 2
    // brown 의 총합은 
}