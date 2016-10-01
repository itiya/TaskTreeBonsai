import { connect } from 'react-redux'
import Slogan = require('../../presentational/taskManager/slogan/slogan')
import Reducer = require('../../../redux/reducer/reducer');
import { Dispatch } from 'redux'

const mapStateToProps = (state: Reducer.TaskTreeBonsaiState) => {
    return {
        slogan: state.slogan
    }
}

const mapDispatchToProps: Dispatch<any> = (dispatch: Dispatch<any>) => {
    return {
    }
}

export const slogan = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slogan.Slogan)
