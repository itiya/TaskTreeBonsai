import { combineReducers } from 'redux'
import Actions = require('../actions')
import DomainProject = require('../../../domain/project')

const initialProjectList = 
[
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
];



function slogan(state: string = "Prove Your Faith", action: Actions.ChangeProject) {
    switch(action.type) {
        default:
            return state;
    }
}

function selectedProjectId(state: number = 0, action: Actions.ChangeProject) {
    switch(action.type) {
        case 'CHANGE_PROJECT':
            return action.id;
        default:
            return state;
    }
}

function projectList(state: DomainProject.Project[] = initialProjectList, action: Actions.ChangeProject) {
    switch(action.type) {
        default:
            return state;
    }
}

export interface TaskTreeBonsaiState {
    slogan: string;
    selectedProjectId: number;
    projectList: DomainProject.Project[];
}

const taskTreeBonsai = combineReducers({
    slogan,
    selectedProjectId,
    projectList
})

export default taskTreeBonsai
