{
    const obj = {
        name: 'kim',
    };

    obj.name // kim
    obj['name'] // kim

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name']; // string type
    const text: Name = 'hello';

    type Gender = Animal['gender'];
    
    type Keys = keyof Animal; // 'name' | 'age' | 'gendder'
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    }

    const person: Person = {
        name: 'kim',
        gender: 'female'
    };
}