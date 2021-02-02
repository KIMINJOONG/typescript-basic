{
    type SuccessState =  {
        result: 'success';
        response : {
            body: string;
        };
    };
    type FailState =  {
        result: 'fail';
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(id: string, password: string): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        }
    }

    // printLoginState(state)
    // success -> 성공과함께 body 출력
    // fail -> 실패, 이유
    function printLoginState(state: LoginState) {
        if(state.result === 'success') {
            console.log(`성공 ${state.response.body}`);
        } else {
            console.log(`실패 ${state.reason}`);
        }
    }
}