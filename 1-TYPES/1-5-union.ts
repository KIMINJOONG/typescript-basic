{
    // Union Types: OR
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;
    

    // function login -> success, fail
    type SuccessState =  {
        response : {
            body: string;
        };
    };
    type FailState =  {
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: 'logged in!',
            }
        }
    }

    // printLoginState(state)
    // success -> 성공과함께 body 출력
    // fail -> 실패, 이유
    function printLoginState(state: LoginState) {
        if('response' in state) {
            console.log(`성공 ${state.response.body}`);
        } else {
            console.log(`실패 ${state.reason}`);
        }
    }
}