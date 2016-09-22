/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require("./task.css");

import DomainTask = require("../../../../domain/task");

export interface Props{
    task: DomainTask.Task;
}

export class Task extends React.Component<Props, any> {
    render() {
        return (
            <li className={styles.task}>
                {this.props.task.name}
            </li>
        );
    }
}
