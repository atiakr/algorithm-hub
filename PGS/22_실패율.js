// https://school.programmers.co.kr/learn/courses/30/lessons/42889

const solution = (N, stages) => {
    const stageFailCount = new Array(N).fill(0);
    const stageClearCount = new Array(N).fill(0);
    for (let i = 0; i < stages.length; i++) {
        const _currentStage = stages[i];

        // 스테이지 클리어 카운트를 1씩 더함
        for (let j = 0; j < _currentStage; j++) {
            stageClearCount[j]++;
            stageFailCount[j]++;
        }

        // 현재 스테이지의 클리어 카운트를 1 뺌
        stageFailCount[_currentStage - 1] -= 1;
    }

    // 성공 퍼센테이지를 낮은순서대로 정렬
    const clearPercentage = stageFailCount.map(
        (el, idx) => el / stageClearCount[idx]
    );
    return new Array(N)
        .fill()
        .map((_, idx) => idx)
        .sort((a, b) => clearPercentage[a] - clearPercentage[b])
        .map((el) => el + 1);
};
