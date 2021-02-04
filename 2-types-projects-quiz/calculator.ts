/**
 * Let's make a calculator 🧮
 */
type Division = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(division: Division, ...number: number[]) {
    if(division === 'add') {
        return number.reduce((acc:number, cur: number) => (
            acc + cur
        ));
    } else if(division === 'substract') {
        return number.reduce((acc:number, cur: number) => (
            acc - cur
        ));
    } else if(division === 'multiply') {
        return number.reduce((acc:number, cur: number) => (
            acc * cur
        ));
    } else if(division === 'divide') {
        return number.reduce((acc:number, cur: number) => (
            acc / cur
        ));
    } else if(division === 'remainder') {
        return number.reduce((acc:number, cur: number) => (
            acc % cur
        ));
    }
}

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function teacherCaculate(command: Command, a: number, b:number) {

    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown commad');
    }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
