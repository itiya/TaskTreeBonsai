/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'

var taskStyles = require("./task.css");
var adderStyles = require("./taskAdder.css");

export interface Props {
    onTaskAddClick: (parentTaskId: number, addedTaskName: string) => void;
    taskId: number;
}

interface State{
    inputText: string;
}

export class TaskAdder extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {inputText: ""}
    }

    onKeyDown(event: React.KeyboardEvent) {
        if (event.keyCode === 13){
            this.addTask()
        }
    }

    addTask() {
        if(this.state.inputText !== "") {
            this.setState({inputText: ""})            
            this.props.onTaskAddClick(this.props.taskId, this.state.inputText)
        }
    }

    changeText(target: HTMLInputElement) {
        this.setState({inputText: target.value})
    }

    render() {
        return (
            <div className={taskStyles.box + " " + adderStyles.adder}>
                <div className={taskStyles.foldChildrenButton} onClick={(event) => this.addTask()} />
                <input
                    className={adderStyles.text}
                    type="text"
                    value={this.state.inputText}
                    onChange={(event) => this.changeText(event.target as HTMLInputElement)}
                    onKeyDown={(event: React.KeyboardEvent) => this.onKeyDown(event)}
                />
            </div>
        )
    }
}
