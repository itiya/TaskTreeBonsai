/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require("./task.css");

import DomainTask = require("../../../../../domain/task");

export interface Props{
    task: DomainTask.Task;
}

export class RootTask extends React.Component<Props, any> { 
    render() {
        var subTasks: JSX.Element[]; 
        if(this.props.task.subTasks != null){
            subTasks = this.props.task.subTasks.map(function(task){
               return (<Task key={task.id} task={task}/>)
            })
        }else{
            subTasks = null
        }
        
        return (
            <li>
                <div className={styles.box}>
                    <div className={styles.foldChildrenButton} />
                    {this.props.task.name}
                </div>
                <ul className={styles.list}>
                    {subTasks}
                </ul>
            </li>
        );
    }
}

export class Task extends RootTask {
}
