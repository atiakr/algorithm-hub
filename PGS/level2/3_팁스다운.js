// https://school.programmers.co.kr/learn/courses/30/lessons/12973

// stack 을 이용한 풀이방법
const bestSolution = (lowerCaseWord) => {
  const stack = [];
  for (let i = 0; i < lowerCaseWord.length; i++) {
    const alphabet = lowerCaseWord[i];

    if (stack.length === 0 || stack[stack.length - 1] !== alphabet) {
      stack.push(alphabet);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
};
