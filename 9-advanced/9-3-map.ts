{
    type Video = {
        title: string;
        author: string;
        description: string;
    };

    type Optional<T> = {
        [P in keyof T]?: T[P]; // for ... in : object에 있는 모든 key들을 도는 연산자
    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]; 
    };

    type VideoOptional = Optional<Video>;

    type Animal = {
        name: string;
        age: number;
    };

    const animal: Optional<Animal> = {
        name: 'dog',
    }

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'kim',
        description: 'content',
    };


    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     description?: string;
    // };

    // type VideoReadOnly = {
    //     readonly title: string;
    //     readonly author: string;
    //     readonly description: string;
    // };

    type Nullable<T> = { [P in keyof T]: T[P] | null};

    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null,
        description: null,
    }
}