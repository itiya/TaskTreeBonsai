import { combineReducers } from 'redux'
import Actions = require('../actions')
import DomainProject = require('../../../domain/project')
import objectAssign = require('object-assign')

const initialProjects = {
projectList: [
    {
        id: 0,
        name: "First Project",
        tasks: [{
            id: 0,
            name: "task1",
            subTasks: [{
                id: 4,
                name: "subTask1"
            }]
        }]
    },
    {
        id: 1,
        name: "Second Project",
        tasks: [{
            id: 1,
            name: "task2"
        }]
    },
    {
        id: 2,
        name: "Third Project",
        tasks: [{
            id: 2,
            name: "task3"
        }]
    },
    {
        id: 3,
        name: "Fourth Project",
        tasks: [{
            id: 3,
            name: "task4"
        }]
    }
],
selectedProjectId: 0,
nextProjectId: 4
}

function slogan(state: string = "Prove Your Faith", action: Actions.Action<any>) {
    switch(action.type) {
        default:
            return state;
    }
}

const projects = Actions.createReducer(initialProjects,
{
    CHANGE_PROJECT: (action: Actions.CHANGE_PROJECT) => s =>
        objectAssign({}, s, {selectedProjectId: action.payload})
})

export interface TaskTreeBonsaiState {
    slogan: string;
    projects:{
        projectList: DomainProject.Project[],
        nextProjectId: number,
        selectedProjectId: number
    }
}

const taskTreeBonsai = combineReducers({
    slogan,
    projects
})

export default taskTreeBonsai
