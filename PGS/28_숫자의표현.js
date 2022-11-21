// https://school.programmers.co.kr/learn/courses/30/lessons/12924

const solution = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        let _sum = i;
        let _counter = 0;
        while (_sum < n) {
            _counter++;
            _sum += i + _counter;
        }
        if (_sum === n) result++;
    }
    return result;
};
