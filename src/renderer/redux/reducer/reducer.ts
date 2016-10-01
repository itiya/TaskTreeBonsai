import Actions = require('../actions')
import DomainProject = require('../../../domain/project')

const initialState = {
    slogan: "Prove your faith",
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
    ]
}

export interface TaskTreeBonsaiState {
    slogan: string;
    projectList: DomainProject.Project[];
}

const taskTreeBonsai = (state: TaskTreeBonsaiState = initialState, action: Object) => {
    return state;
}

export default taskTreeBonsai
