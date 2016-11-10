import { combineReducers } from 'redux'
import Actions = require('../actions')
import DomainProject = require('../../../domain/project')
import DomainTask = require('../../../domain/task')
import objectAssign = require('object-assign')

const initialProjects = {
    projectList: [
        {
            id: 0,
            name: "First Project",
            isTaskAdderVisible: false,
            rootTask: {
                id: 0,
                name: "task1",
                isTaskAdderVisible: false,
                subTasks: Array<DomainTask.Task>({
                    id: 4,
                    name: "subTask",
                    isTaskAdderVisible: false,
                    subTasks: Array<DomainTask.Task>()
                })
            }
        },
        {
            id: 1,
            name: "Second Project",
            isTaskAdderVisible: false,
            rootTask: {
                id: 1,
                name: "task2",
                isTaskAdderVisible: false,
                subTasks: Array<DomainTask.Task>()                
            }
        },
        {
            id: 2,
            name: "Third Project",
            isTaskAdderVisible: false,
            rootTask: {
                id: 2,
                name: "task3",
                isTaskAdderVisible: false,
                subTasks: Array<DomainTask.Task>()                        
            }
        },
        {
            id: 3,
            name: "Fourth Project",
            isTaskAdderVisible: false,
            rootTask: {
                id: 3,
                name: "task4",
                isTaskAdderVisible: false,
                subTasks: Array<DomainTask.Task>()            
            }
        }
    ],
    selectedProjectId: 0,
    nextProjectId: 4,
    nextTaskId: 8
}

function slogan(state: string = "Prove Your Faith", action: Actions.Action<any>) {
    switch (action.type) {
        default:
            return state;
    }
}

const toggleVisible = (rootTask: DomainTask.Task, taskId: number): DomainTask.Task => {
    var toggledVisible: boolean
    if(taskId === rootTask.id){
        toggledVisible = !rootTask.isTaskAdderVisible
    } else {
        toggledVisible = false
    }

    return objectAssign({}, rootTask, {
        isTaskAdderVisible: toggledVisible,
        subTasks: rootTask.subTasks.map((value) => {
            return toggleVisible(value, taskId)
        })
    })
}

const addTask = (rootTask: DomainTask.Task, parentTaskId: number, addTaskId: number, addTaskName: string): DomainTask.Task => {
    var subTasks = rootTask.subTasks.map((value) => {
        return addTask(value, parentTaskId, addTaskId, addTaskName)
    })
    if(rootTask.id === parentTaskId) {
        subTasks = [...subTasks, {
            id: addTaskId,
            name: addTaskName,
            isTaskAdderVisible: false,
            subTasks: []
        }]
    }
    return objectAssign({}, rootTask, {
        subTasks: subTasks
    })
}

const deleteTask = (rootTask: DomainTask.Task, deleteTaskId: number): DomainTask.Task => {
    var subTasks = rootTask.subTasks.filter((value) => value.id !== deleteTaskId).map((value) => {
        return deleteTask(value, deleteTaskId)
    })
    return objectAssign({}, rootTask, {
        subTasks: subTasks 
    })
}

const editTask = (rootTask: DomainTask.Task, editTaskId: number, editTaskText: string): DomainTask.Task => {
    var subTasks = rootTask.subTasks.map((value) => {
        return editTask(value, editTaskId, editTaskText)
    })
    var name = rootTask.name
    if (rootTask.id === editTaskId) {
        name = editTaskText
    } 
    return objectAssign({}, rootTask, {
        subTasks: subTasks,
        name: name
    })
}

const projects = Actions.createReducer(initialProjects,
    {
        CHANGE_PROJECT: (action: Actions.CHANGE_PROJECT) => s =>
            objectAssign({}, s, { selectedProjectId: action.payload }),
        ADD_PROJECT: (action: Actions.ADD_PROJECT) => s =>
            objectAssign({}, s, {
                projectList: [
                    ...s.projectList,
                    {
                        id: s.nextProjectId,
                        name: action.payload,
                        rootTask: { id: s.nextTaskId, name: action.payload }
                    }],
                nextProjectId: s.nextProjectId + 1,
                nextTaskId: s.nextTaskId + 1
            }),
        DELETE_PROJECT: (action: Actions.DELETE_PROJECT) => s => {
            let filteredProjectList = s.projectList.filter(project => project.id != action.payload)
            var selectedProjectId = s.selectedProjectId
            if(selectedProjectId === action.payload){
                let index = s.projectList.map((value, index) => value.id === action.payload ? index : 0).reduce((prev, current) => prev + current)
                if(index === 0) {
                    selectedProjectId = filteredProjectList[0].id
                } else {
                    selectedProjectId = s.projectList[index - 1].id
                }
            }
            return objectAssign({}, s, {
                projectList: filteredProjectList,
                selectedProjectId: selectedProjectId
            })
        },
        TOGGLE_TASK_ADDER: (action: Actions.TOGGLE_TASK_ADDER) => s => {
            let toggledProjectList = s.projectList.map((value, index, array) => {
                return objectAssign({}, value, {
                    rootTask: toggleVisible(value.rootTask, action.payload)
                })
            })
            return objectAssign({}, s, {
                projectList: toggledProjectList
            })
        },
        ADD_TASK: (action: Actions.ADD_TASK) => s => {
            let addedProjectList = s.projectList.map((value) => {
                return objectAssign({}, value, {
                    rootTask: addTask(value.rootTask, action.payload.parentTaskId, s.nextTaskId, action.payload.addedTaskName)
                })
            })
            return objectAssign({}, s, {
                projectList: addedProjectList,
                nextTaskId: s.nextTaskId + 1
            })
        },
        DELETE_TASK: (action: Actions.DELETE_TASK) => s => {
            let deletedProjectList = s.projectList.map((value) => {
                return objectAssign({}, value, {
                    rootTask: deleteTask(value.rootTask, action.payload)
                })
            })
            return objectAssign({}, s, {
                projectList: deletedProjectList
            })
        },
        EDIT_TASK: (action: Actions.EDIT_TASK) => s => {
            let editProjectList = s.projectList.map((value) => {
                return objectAssign({}, value, {
                    rootTask: editTask(value.rootTask, action.payload.taskId, action.payload.taskName)
                })
            })
            return objectAssign({}, s, {
                projectList: editProjectList
            })
        },
        EDIT_PROJECT: (action: Actions.EDIT_PROJECT) => s =>
            objectAssign({}, s, {
                projectList: s.projectList.map((value) => {
                    if (value.id === action.payload.projectId) {
                        return objectAssign({}, value, {
                            name: action.payload.projectName
                        })
                    } else {
                        return value
                    }
                })
            })
    }
)

export interface TaskTreeBonsaiState {
    slogan: string;
    projects: {
        projectList: DomainProject.Project[],
        nextProjectId: number,
        nextTaskId: number,
        selectedProjectId: number
    }
}

const taskTreeBonsai = combineReducers({
    slogan,
    projects
})

export default taskTreeBonsai
