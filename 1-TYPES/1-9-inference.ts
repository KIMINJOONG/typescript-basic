{
    // Type Inference
    let text = 'hello';
    // text = 1;
    function print(message = 'hello') {
        console.log(message);
    }
    print('hi');
    // print(5);   
    function add(x: number, y:number) {
        return x + y;
    }

    const result = add(1, 3);
}