import Task = require('./task')

export interface Project {
    id: number;
    name: string;
    rootTask: Task.Task;
}
