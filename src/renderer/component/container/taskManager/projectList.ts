import { connect } from 'react-redux'
import { changeProject } from '../../../redux/actions'
import ProjectList = require('../../presentational/taskManager/projectList/projectList')
import Reducer = require('../../../redux/reducer/reducer');
import { Dispatch } from 'redux'

const mapStateToProps = (state: Reducer.TaskTreeBonsaiState) => {
    return {
        projects: state.projects.projectList,
        selectedProjectId: state.projects.selectedProjectId
    }
}

const mapDispatchToProps: Dispatch<any> = (dispatch: Dispatch<any>) => {
    return {
        onProjectClick: (id: number) => {
            dispatch(changeProject(id))
        }
    }
}

export const projectList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList.ProjectList)
