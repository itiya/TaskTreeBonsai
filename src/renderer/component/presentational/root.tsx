/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react'
import Slogan = require('../container/taskManager/slogan');
import ProjectList = require('../container/taskManager/projectList');
import TaskList = require('../container/taskManager/taskList');

//import TaskList = require('./taskManager/taskList/taskList');

import DomainProject = require('../../../domain/project');

var styles = require('./root.css');

export class Root extends React.Component<any, any> {
    render() {
        return (
            <div className={styles.root}>
                <Slogan.slogan />
                <ProjectList.projectList />
                <TaskList.taskList />
            </div>
        );
    }
}
