'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(division) {
    var number = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        number[_i - 1] = arguments[_i];
    }
    if (division === 'add') {
        return number.reduce(function (acc, cur) { return (acc + cur); });
    }
    else if (division === 'substract') {
        return number.reduce(function (acc, cur) { return (acc - cur); });
    }
    else if (division === 'multiply') {
        return number.reduce(function (acc, cur) { return (acc * cur); });
    }
    else if (division === 'divide') {
        return number.reduce(function (acc, cur) { return (acc / cur); });
    }
    else if (division === 'remainder') {
        return number.reduce(function (acc, cur) { return (acc % cur); });
    }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
