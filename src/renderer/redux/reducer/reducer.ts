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
                    id: 6,
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
    nextTaskId: 4
}

function slogan(state: string = "Prove Your Faith", action: Actions.Action<any>) {
    switch (action.type) {
        default:
            return state;
    }
}

function toggleVisible(rootTask: DomainTask.Task, taskId: number): DomainTask.Task {
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
        }

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
