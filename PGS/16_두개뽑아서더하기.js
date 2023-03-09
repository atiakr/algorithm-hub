// https://school.programmers.co.kr/learn/courses/30/lessons/68644

const solution = (numbers) => {
    const _result = [];
    for (let i = 0; i < numbers.length; i++) {
        let _currentIndex = i + 1;
        const _originNumber = Number(numbers[i]);
        while (_currentIndex < numbers.length) {
            const _resultNumber =
                Number(numbers[_currentIndex]) + _originNumber;
            if (_result.indexOf(_resultNumber) === -1) {
                _result.push(_resultNumber);
            }
            _currentIndex++;
        }
    }
    _result.sort((a, b) => a - b);
    return _result;
};

// Set 을 사용한 풀이 방법

function solution(numbers) {
    const temp = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }

    const answer = [...new Set(temp)];

    return answer.sort((a, b) => a - b);
}
