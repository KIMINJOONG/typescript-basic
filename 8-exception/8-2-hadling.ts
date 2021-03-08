{
    class TimeoutError extends Error {}
    class OfflineError extends Error {}

    type NetWorkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    };

    type SuccessState = {
        result: 'success';
    };

    type ResultState = SuccessState | NetWorkErrorState;

    class NetworkClient {
        tryConnect(): ResultState {}
    }

    class UserService {
        constructor(private client: NetworkClient){}

        login() {
            this.client.tryConnect();
            // login...
        }
    }

    class App {
        constructor(private userSerivce: UserService) {}

        run() {
            try{
                this.userSerivce.login();
            }catch(error) {
                //show dialog to user
            }
            
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}