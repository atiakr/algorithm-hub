// https://school.programmers.co.kr/learn/courses/30/lessons/12914


// 효진이는 한번에 1칸 또는 2칸을 뛸 수 있음
// 멀리뛰기에 사용될 칸 수 n 이 주어질 때
// 효진이가 끝에 도달하는 방법이 몇가지인지 알아내 그것을 1234567로 나눈 나머지를 리턴하는 함수
const solution = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return solution(n - 1) + solution(n - 2);
}


const solution2 = (n) => {
    if (n < 3) return n;

    const _solutionNumberList = new Array(n).fill(0);
    _solutionNumberList[0] = 1;
    _solutionNumberList[1] = 2; 
    for (let i = 2; i <= n; i++) {
        _solutionNumberList[i] = (_solutionNumberList[i-1] + _solutionNumberList[i-2]) % 1234567;
        // 자바스크립트의 정수계산 가능범위는 정해져있다.
    }

    return _solutionNumberList[n] % 1234567;
}