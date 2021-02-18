interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

interface List {
    head: string | null;
    node: string | null;
}

class ListImplement implements List {
    head: string | null;
    node: string | null;
    constructor(head: string, node: string) {
        this.head = head;
        this.node = node;
    }
}

class StackImplement implements Stack {
    constructor(private list: List) {}
    size: number;
    push(value: string): void {
        this.list.head = 
        this.list.node = value;
    }
    pop(): string {
        throw new Error("Method not implemented.");
    }

}