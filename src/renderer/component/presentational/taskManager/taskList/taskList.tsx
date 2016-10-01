/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
import Task = require('./task');
var styles = require("./taskList.css");


import DomainTask = require("../../../../../domain/task");

export interface Props{
    tasks: DomainTask.Task[];
}

export class TaskList extends React.Component<Props, any> {
    render() {
        var tasks = this.props.tasks.map(function (task) {
            return (
                <Task.Task key={task.id} task={task} />
            );
        })
        return (
            <div className={styles.taskList}>
                <ul className={styles.ul}>
                    {tasks}
                </ul>
            </div>
        );
    }
}
