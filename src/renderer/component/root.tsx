/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react'
import Slogan = require('./taskManager/slogan/slogan');
import ProjectList = require('./taskManager/projectList/projectList');
import TaskList = require('./taskManager/taskList/taskList');

import DomainProject = require('../../domain/project');

var styles = require('./root.css');

export interface Props {
    data: {
        slogan: string;
        projectList: DomainProject.Project[];
    }
}

export class Root extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.root}>
                <Slogan.Slogan slogan={this.props.data.slogan} />
                <ProjectList.ProjectList projects={this.props.data.projectList} />
                <TaskList.TaskList tasks={this.props.data.projectList[0].tasks}/>
            </div>
        );
    }
}
