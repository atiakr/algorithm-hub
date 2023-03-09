// https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 내가 푼 방식
const solution = (s) => {
    const _alphabetList = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    // 1. 값들을 전부 문자열 형태로 변환
    for (let _key in _alphabetList) {
        s = s
            .replaceAll(_key, _alphabetList[_key])
            .replaceAll(_alphabetList[_key], _key);
    }

    // 여기서 Object.entries 와 구조분해할당을 사용하면 더 간결하게 표현할 수 있음.
    // for (let [key, value] of Object.entries(_alphabetList))

    return Number(s);
};

// 정석적인 솔루션
function solution(s) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
