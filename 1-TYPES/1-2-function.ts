{
    // JavaScript
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript
    function add(num1: number, num2:number ): number {
        return num1 + num2
    }

    function jsFetchNum(id) {
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // Javascript => typescript
    // Optional parameter
    function printName(firstName: string, lastName?:string) {
        console.log(firstName);
        console.log(lastName)
    }
    printName('steve', 'jobs');
    printName('kim');

    // Default parameter
    function printMessage(message: string = 'defaul message') {
        console.log(message);
    }
    printMessage();

    //Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a+b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1,2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}