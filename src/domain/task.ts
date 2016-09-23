export interface Task {
    id: number;
    name: string;
    subTasks?: Task[]; 
}
