import { Task } from "@/types/task";

export const mock: Array<Task> = new Array(5).fill(1).map((_, index) => { return { name: `Task ${index}`, done: false}});
