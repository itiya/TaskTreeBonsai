export interface Task {
    id: number;
    name: string;
    isTaskAdderVisible: boolean;
    subTasks: Task[]; 
}
