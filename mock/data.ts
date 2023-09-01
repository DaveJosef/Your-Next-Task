
interface Task {
    name: string,
    done: boolean,
}

export const mock: Array<Task> = new Array(5).fill(1).map((_, index) => { return { name: `Task ${index}`, done: false}});
