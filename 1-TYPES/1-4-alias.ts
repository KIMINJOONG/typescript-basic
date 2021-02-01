{
    // Type Aliases
    type Text = string;
    const name: Text = 'kim';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    }
    const student: Student = {
        name: 'kim',
        age: 26,
    }

    // String Literal Types
    type Name = 'name';
    let kimName: Name;
    kimName = 'name';
    type JSON = 'json';
    const json :JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;
}