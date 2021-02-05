{
    // Type Assertion
    function jsStrFunc() :any {
        return 'hello';
    }
    const result = jsStrFunc();
    (result as string).length;
    (<string>result).length;

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(3);

    const button = document.querySelector('class');
}