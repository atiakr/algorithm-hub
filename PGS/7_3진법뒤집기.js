/**
문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.
*/

// parseInt 와 toString, reverse 를 배웠다.
// 0.04
const solution = (n) => {
    return parseInt(n.toString(3).split("").reverse().join(""), 3);
};

// 화살표 함수는 함수 리터럴 표기법에서 사용가능한 this, arguments, super, new.target 바인딩을 갖지 않습니다. 한마디로 기능이 생략되어있습니다. 또한 non-constructor로서 생성자 함수로 사용 불가능합니다. 저는 간결한 화살표 함수 사용하는것을 선호합니다:)
