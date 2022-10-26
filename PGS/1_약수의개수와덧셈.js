/*
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

// 내가 푼 방법
function solution(left, right) {
    let _result = 0;
    for (let i = left; i <= right; i++) {
        let _gcNumber = 1;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) _gcNumber++;
        }

        if (_gcNumber % 2 === 0) _result += i;
        else _result -= i;
    }
    return _result;
}

// sol2
// 숫자 n 의 제곱근이 정수이면 n 의 약수의 개수는 홀수
function soultion(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) answer -= i;
        else answer += i;
    }
    return answer;
}
