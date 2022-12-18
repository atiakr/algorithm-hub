// https://school.programmers.co.kr/learn/courses/30/lessons/77484
// 한번에 풀었는지 여부: X
// 결국 풀었는지 여부: O
// 걸린시간: 15분

const solution = (lottos, win_nums) => {
  // lottos: 민우가 구매한 로또번호의 배열
  // win_nums: 당첨번호가 담긴 배열
  // 리턴값: 당첨가능한 최고순위, 최저순위

  let matchCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < 6; i++) {
    const _number = lottos[i];
    if (_number === 0) {
      zeroCount++;
    } else if (win_nums.indexOf(_number) !== -1) {
      matchCount++;
    }
  }

  const highestRank =
    matchCount + zeroCount >= 2 ? 7 - (matchCount + zeroCount) : 6;
  const lowestRank = matchCount >= 2 ? 7 - matchCount : 6;
  return [highestRank, lowestRank];
};

// 다른사람의 풀이
const solution = (lottos, win_nums) => {
  let matchCount = 0;
  let zeroCount = 0;

  lottos.forEach((el, idx) => {
    if (win_nums.includes(el)) matchCount++;
    else if (el === 0) zeroCount++;
  });

  const rankArray = [6, 6, 5, 4, 3, 2, 1];
  return [rankArray[matchCount + zeroCount], rankArray[matchCount]];
};
