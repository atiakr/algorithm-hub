const solution = (a, b, n) => {
    let _totalCola = 0;
    while (n > a - 1) {
        const _getCola = Math.floor(n / a) * b;
        _totalCola += _getCola;
        n = Math.floor(n / a) * b + (n % a);
    }
    return _totalCola;
};
