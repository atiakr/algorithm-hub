// https://school.programmers.co.kr/learn/courses/30/lessons/42840

const solution = (answers) => {
    const _supoja1 = [1, 2, 3, 4, 5];
    const _supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const _supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scoreCount = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        if (_supoja1[i % 5] === answers[i]) {
            scoreCount[0]++;
        }

        if (_supoja2[i % 8] === answers[i]) {
            scoreCount[1]++;
        }

        if (_supoja3[i % 10] === answers[i]) {
            scoreCount[2]++;
        }
    }

    scoreCount.sort((a, b) => b - a);
    return scoreCount
        .filter((el) => el === scoreCount[0])
        .map((_, idx) => idx + 1);
};

const solution2 = (answers) => {
    // 수포자들의 반복되는 규칙의 수를 배열로 저장
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전탐색)
    let s1 = answers.filter((a, i) => a === p1[i % 5]).length;
    let s2 = answers.filter((a, i) => a === p2[i % 8]).length;
    let s3 = answers.filter((a, i) => a === p3[i % 10]).length;

    // 세 사람의 점수 중 최대값 구하기
    let max = Math.max(s1, s2, s3);

    // 최대값과 일치한 점수를 가지면 answer에 저장
    if (s1 === max) answer.push(1);
    if (s2 === max) answer.push(2);
    if (s3 === max) answer.push(3);

    return answer;
};
