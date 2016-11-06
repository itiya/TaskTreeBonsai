/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require("./task.css");

import TaskAdder = require('./TaskAdder')
import DomainTask = require("../../../../../domain/task");

export interface Props{
    task: DomainTask.Task;
    onAdderToggleClick: (taskId: number) => void;
    onTaskAddClick: (parentTaskId: number, addedTaskName: string) => void;
}

export class Task extends React.Component<Props, any> { 
    render() {
        var subTasks: JSX.Element[];
        let that = this
        if(this.props.task.subTasks != null){
            subTasks = this.props.task.subTasks.map(function(task){
                return (
                    <ChildTask key={task.id} task={task}
                        onAdderToggleClick={that.props.onAdderToggleClick}
                        onTaskAddClick={that.props.onTaskAddClick}
                    />
                )
            })
        }else{
            subTasks = null
        }

        var taskAdder: JSX.Element;
        if (this.props.task.isTaskAdderVisible) {
            taskAdder = <TaskAdder.TaskAdder onTaskAddClick={this.props.onTaskAddClick} taskId={this.props.task.id}/>
        } else {
            taskAdder = null
        }
        
        return (
            <li>
                <div className={styles.box}>
                    <div className={styles.foldChildrenButton} />
                    <div className={styles.foldChildrenButton} onClick={() => this.props.onAdderToggleClick(this.props.task.id)}/>
                    <div className={styles.text}>{this.props.task.name}</div>
                </div>
                <ul className={styles.list}>
                    {subTasks}
                    {taskAdder}
                </ul>
            </li>
        );
    }
}

export class RootTask extends Task {

}

export class ChildTask extends Task {
}
