class NetworkClient {
    tryConnect(): void {
        throw new Error('no network');
    }
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