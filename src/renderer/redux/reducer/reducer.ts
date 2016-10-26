import { combineReducers } from 'redux'
import Actions = require('../actions')
import DomainProject = require('../../../domain/project')
import objectAssign = require('object-assign')

const initialProjects = {
    projectList: [
        {
            id: 0,
            name: "First Project",
            rootTask: {
                id: 0,
                name: "task1",
                subTasks: [{
                    id: 4,
                    name: "subTask1"
                }]
            }
        },
        {
            id: 1,
            name: "Second Project",
            rootTask: {
                id: 1,
                name: "task2"
            }
        },
        {
            id: 2,
            name: "Third Project",
            rootTask: {
                id: 2,
                name: "task3"
            }
        },
        {
            id: 3,
            name: "Fourth Project",
            rootTask: {
                id: 3,
                name: "task4"
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
                selectedProjectId = filteredProjectList[0].id
            }
            return objectAssign({}, s, {
                projectList: filteredProjectList,
                selectedProjectId: selectedProjectId
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
