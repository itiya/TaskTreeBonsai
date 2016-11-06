/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
import Task = require('./task');
var styles = require("./taskList.css");

import DomainTask = require("../../../../../domain/task");

export interface Props{
    task: DomainTask.Task;
    onAdderToggleClick: (taskId: number) => void;
    onTaskAddClick: (parentTaskId: number, addedTaskName: string) => void;
    onTaskDeleteClick: (deleteTaskId: number) => void;
}

export class TaskList extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.taskList}>
                <ul className={styles.ul}>
                    <Task.RootTask key={this.props.task.id} task={this.props.task}
                        onAdderToggleClick={this.props.onAdderToggleClick}
                        onTaskAddClick={this.props.onTaskAddClick}
                        onTaskDeleteClick={this.props.onTaskDeleteClick}
                    />
                </ul>
            </div>
        );
    }
}
