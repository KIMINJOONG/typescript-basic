{
    type ToDo = {
        title: string;
        description: string;
    }

    function display(todo: Readonly<ToDo>) {
        // todo.title = 'jaja';
    }

    type Readonly<ToDo> = {
        readonly title: string;
        readonly description: string;
    };
}