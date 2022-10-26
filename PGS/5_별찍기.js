/**
문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.
*/

// 프로그래머스에서 측정한 속도값과 구글크롬에서 console.time, console.timeEnd 로 측정한
// 여러가지 풀이법들의 속도가 달라서 뭐가 맞는건지 솔직히 모르겠음.
// 프로그래머스에서는 내가 푼 방법이 가장 빠르다고 나왔고
// 구글크롬 콘솔에서는 동일한 연산을 줄이는 방식이 더 빠르게 나왔음.

// 내가 푼 방법
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    let _squareString = "";
    for (let i = 0; i < b; i++) {
        if (i >= 1) _squareString += "\n";
        _squareString += "*".repeat(a);
    }
    console.log(_squareString);
});

// repeat 을 두번 이용하여 한줄로 나타낸 방법
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    console.log(`${"*".repeat(a)}\n`.repeat(b));
});

// 내가 푼 방법에서 동일한 연산을 줄여서 사용한 방법
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    let _squareString = "";
    const _lineText = "*".repeat(a) + "\n";
    for (let i = 0; i < b; i++) {
        _squareString += _lineText;
    }
    console.log(_squareString);
});
