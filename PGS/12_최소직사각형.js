/**
link: https://school.programmers.co.kr/learn/courses/30/lessons/86491
*/

// 일단 한번에 풀기 실패함.
const solution = (sizes) => {
    // sizes 는 모든 명함의 가로,세로 길이를 나타내는 2차원 배열
    // 모든 명함을 수납할수 있는 지갑의 최소크기를 리턴하시오.

    return sizes.reduce((acc, cur) => {
        const _prevSize = acc[0] * acc[1];
        const _nextSize = cur[0] * cur[1];
        return _prevSize > _nextSize ? _prevSize : _nextSize;
    });
};

const solution = (sizes) => {
    sizes.forEach((el) => el.sort((a, b) => a - b));
    const _width = sizes.map((el) => el[0]);
    const _height = sizes.map((el) => el[1]);
    return Math.max(..._width) * Math.max(..._height);
};
