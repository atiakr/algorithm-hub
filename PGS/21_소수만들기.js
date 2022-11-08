// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const isPrime = (number) => {
    if (number === 1) return true;
    if (number === 2) return false;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
};

const solution = (nums) => {
    let result = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isPrime(i + j + k)) {
                    result++;
                }
            }
        }
    }
    return result;
};
