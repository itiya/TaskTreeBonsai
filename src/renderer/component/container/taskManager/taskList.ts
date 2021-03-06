import { connect } from 'react-redux'
import TaskList = require('../../presentational/taskManager/taskList/taskList')
import Reducer = require('../../../redux/reducer/reducer');
import { Dispatch } from 'redux'
import { toggleTaskAdder, addTask, deleteTask, editTask } from '../../../redux/actions'

const mapStateToProps = (state: Reducer.TaskTreeBonsaiState) => {
    return {
        task: state.projects.projectList.filter(project => project.id === state.projects.selectedProjectId)[0].rootTask
    }
}

const mapDispatchToProps: Dispatch<any> = (dispatch: Dispatch<any>) => {
    return {
        onAdderToggleClick: (taskId: number) => {
            dispatch(toggleTaskAdder(taskId));
        },
        onTaskAddClick: (parentTaskId: number, addedTaskName: string) => {
            dispatch(addTask(parentTaskId, addedTaskName))
        },
        onTaskDeleteClick: (deleteTaskId: number) => {
            dispatch(deleteTask(deleteTaskId))
        },
        onTaskEdit: (editTaskId: number, editTaskName: string) => {
            dispatch(editTask(editTaskId, editTaskName))
        }
    }
}

export const taskList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList.TaskList)
