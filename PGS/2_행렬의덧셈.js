// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 코드도 간결하고 더 빨랐음.
function bestSolution(arr1, arr2) {
    return arr1.map((el, i) => el.map((e, j) => e + arr2[i][j]));
}

// 내가 푼 코드
function solution(arr1, arr2) {
    const _result = [];
    for (let i = 0; i < arr1.length; i++) {
        _result[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            _result[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return _result;
}
