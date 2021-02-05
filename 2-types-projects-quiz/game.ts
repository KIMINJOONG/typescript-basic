/**
 * Let's make a game 🕹
 */

type Move = 'up' | 'down' | 'left' | 'right';

type Position = {
    x: number,
    y: number,
};

const position: Position = {
    x: 0,
    y: 0,
}


function move(command:Move): void  {
    switch(command) {
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
    };
}

function teacherMove(direction: 'up' | 'down' | 'left' | 'right') {
    switch (direction) {
        case 'up':
            position.y += 1;
            break;
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case 'right':
            position.x += 1;
            break;
        default:
            throw new Error(`unknown direction : ${direction}`);
    }
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
