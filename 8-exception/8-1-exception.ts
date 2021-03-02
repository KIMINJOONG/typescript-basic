// Java: Exception
// Javascript: Error
// const array =  new Array(10000000000000);

// Error(Excepiton) Handling: try->catch->finally

function readFile(fileName: string): string {
    if(fileName === 'not exist!') {
        throw new Error(`file not exist! ${fileName}`);
    } 

    return 'file contents';
}

function closeFile(fileName: string) {

}

const fileName = 'file';

try {
    console.log(readFile(fileName));
}catch(error) {
    console.log(`catched!!`)
}finally{
    closeFile(fileName);
}

