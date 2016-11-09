export interface Action<Payload> {
    type: string,
    payload?: Payload,
}

type HandlerMapWithState<T> = {
    [type: string]: { (action: Action<any>): (state: T) => T }
}

export function createReducer<T>(defaultState: T, handlers: HandlerMapWithState<T>){
    return (state: T = defaultState, action: Action<any>): T => {
        const handler = handlers[action.type] || handlers[DEFAULT];
        return handler ? handler(action)(state) : state;
    };
}

export const DEFAULT = "DEFAULT";

export const CHANGE_PROJECT = "CHANGE_PROJECT";
export type  CHANGE_PROJECT = Action<number>;
export const changeProject = (projectId: number): CHANGE_PROJECT => {
    return {
        type: CHANGE_PROJECT,
        payload: projectId
    }
}

export const ADD_PROJECT = "ADD_PROJECT";
export type  ADD_PROJECT = Action<string>;
export const addProject = (projectName: string): ADD_PROJECT => {
    return {
        type: ADD_PROJECT,
        payload: projectName
    }
}

export const DELETE_PROJECT = "DELETE_PROJECT";
export type DELETE_PROJECT = Action<number>;
export const deleteProject = (projectId: number): DELETE_PROJECT => {
    return {
        type: DELETE_PROJECT,
        payload: projectId
    }
}

export const TOGGLE_TASK_ADDER = "TOGGLE_TASK_ADDER";
export type TOGGLE_TASK_ADDER = Action<number>;
export const toggleTaskAdder = (taskId: number): TOGGLE_TASK_ADDER => {
    return {
        type: TOGGLE_TASK_ADDER,
        payload: taskId
    }
}

export const ADD_TASK = "ADD_TASK";
export type ADD_TASK = Action<{parentTaskId: number, addedTaskName: string}>;
export const addTask = (parentTaskId: number, addedTaskName: string): ADD_TASK => {
    return {
        type: ADD_TASK,
        payload: {
            parentTaskId: parentTaskId,
            addedTaskName: addedTaskName
        }
    }
}

export const DELETE_TASK = "DELETE_TASK";
export type DELETE_TASK = Action<number>;
export const deleteTask = (taskId: number): DELETE_TASK => {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}

export const EDIT_TASK = "EDIT_TASK";
export type EDIT_TASK = Action<{taskId: number, taskName: string}>;
export const editTask = (taskId: number, taskName: string): EDIT_TASK => {
    return {
        type: EDIT_TASK,
        payload: {
            taskId: taskId,
            taskName: taskName
        }
    }
}