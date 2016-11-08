/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'

var styles = require("./task.css");

import TaskAdder = require('./TaskAdder')
import DomainTask = require("../../../../../domain/task");
import objectAssign = require('object-assign')

export interface Props {
    task: DomainTask.Task;
    onAdderToggleClick: (taskId: number) => void;
    onTaskAddClick: (parentTaskId: number, addedTaskName: string) => void;
    onTaskDeleteClick: (deleteTaskId: number) => void;
}

interface State {
    isOnEdit: boolean;
    editText: string;
}

export class Task extends React.Component<Props, State> { 
    constructor(props: Props) {
        super(props)
        this.state = {
            isOnEdit: false,
            editText: props.task.name
        }
    }

    startEdit() {
        this.setState(objectAssign({}, this.state, {isOnEdit: true}))
    }

    endEdit() {
        this.setState(objectAssign({}, this.state, {isOnEdit: false}))
    }

    focusInput(input: HTMLInputElement) {
        if(input){
            ReactDOM.findDOMNode<HTMLInputElement>(input).focus()
        }
    }

    taskName() {
        if (this.state.isOnEdit) {
            return <input type="text" ref={this.focusInput} onBlur={() => this.endEdit()} defaultValue={this.state.editText} /> 
        } else {
            return <div className={styles.text} onDoubleClick={() => this.startEdit()}>{this.props.task.name}</div>
        }
    }

    render() {
        var subTasks: JSX.Element[];
        let that = this
        if(this.props.task.subTasks != null){
            subTasks = this.props.task.subTasks.map(function(task){
                return (
                    <ChildTask key={task.id} task={task}
                        onAdderToggleClick={that.props.onAdderToggleClick}
                        onTaskAddClick={that.props.onTaskAddClick}
                        onTaskDeleteClick={that.props.onTaskDeleteClick}
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
                    {this.taskName()}
                    <div className={styles.taskDeleteButton} onClick={() => this.props.onTaskDeleteClick(this.props.task.id)}/>                    
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
