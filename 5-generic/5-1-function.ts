{
    function checkNullBad(arg: number| null): number {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    function checkNullAnyBad(arg: any| null): any {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    function checkNotNull<T>(arg: T | null ): T {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    const number: number = checkNotNull(123);
    const bool: boolean = checkNotNull(true);
    const string: string = checkNotNull('hey');
}