// https://school.programmers.co.kr/learn/courses/30/lessons/70129

const solution = (x) => {
    let _convertTimeCount = 0;
    let _removedZeroCount = 0;
    while (x !== "1") {
        _convertTimeCount++;
        x = x
            .split("")
            .filter((el) => {
                if (el === "0") {
                    _removedZeroCount++;
                    return false;
                } else {
                    return true;
                }
            })
            .join("")
            .length.toString(2);
    }
    return [_convertTimeCount, _removedZeroCount];
};
