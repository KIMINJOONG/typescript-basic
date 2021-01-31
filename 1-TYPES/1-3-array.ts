{
    // Array
    const fruits: string[] = ['사과', '바나나'];
    const scores: Array<number> = [1, 2, 3];

    // function printArray(fruits: readonly Array<string>) {} 에러 발생
    function printArray(fruits: readonly string[]) {

    }

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    const [name, age] = student;
}