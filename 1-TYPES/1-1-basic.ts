{
    // number
    const num: number = -6;

    // string
    const str: string = 'hello';

    // boolean
    const bool:boolean = true;

    // undefined
    let age: number | undefined
    age = 1;
    age = undefined;

    function find() : number | undefined {
        return 1;
    }
 
    // null
    let person: null // x
    let person2: string | null;

    // unknown
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any
    let anything: any = 0;
    anything = 0;
    anything = 'hello';
    
    // void
    function print(): void {
        console.log('hello');
        return;
    }

    let unusable: void = undefined;

    // never
    function throwError(message : string) : never {
        // messageg -> server (log)
        throw new Error(message);
        while(true) {}
    }

    // object
    let obj:object;
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject([1,2,3]);
    acceptSomeObject({name : 'kim'});
    acceptSomeObject({ animal: 'dog'});

}