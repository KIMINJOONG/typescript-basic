/**
 * Let's make a game 🕹
 */
'up' | 'down' | 'left' | 'right';
var position = {
    x: 0,
    y: 0
};
function move(command) {
    switch (command) {
        case 'up':
            position.x = 0;
            position.y = 1;
            break;
        case 'down':
            position.x = 0;
            position.y = 0;
            break;
        case 'left':
            position.x = -1;
            position.y = 0;
            break;
        case 'right':
            position.x = 0;
            position.y = 0;
            break;
        default:
            throw new Error('해당 command가 존재하지않습니다.');
    }
    ;
}
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
