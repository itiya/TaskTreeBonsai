import { connect } from 'react-redux'
import TaskList = require('../../presentational/taskManager/taskList/taskList')
import Reducer = require('../../../redux/reducer/reducer');
import { Dispatch } from 'redux'

const mapStateToProps = (state: Reducer.TaskTreeBonsaiState) => {
    return {
        tasks: state.projectList[state.selectedProjectId].tasks
    }
}

const mapDispatchToProps: Dispatch<any> = (dispatch: Dispatch<any>) => {
    return {
    }
}

export const taskList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList.TaskList)
