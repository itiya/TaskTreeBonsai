/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
import Task = require('./task');
var styles = require("./taskList.css");

import DomainTask = require("../../../../../domain/task");

export interface Props{
    task: DomainTask.Task;
}

export class TaskList extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.taskList}>
                <ul className={styles.ul}>
                    <Task.Task key={this.props.task.id} task={this.props.task} />
                </ul>
            </div>
        );
    }
}
