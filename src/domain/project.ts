import Task = require('./task')

export interface Project {
    id: number;
    name: string;
    tasks?: Task.Task[];
}
