/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import objectAssign = require('object-assign')

var styles = require('./project.css');

export interface Props{
    name: string,
    id: number,
    selected: boolean,
    onClick: () => void,
    onDeleteButtonClick: () => void;
    onEditProject: (id: number, name: string) => void;
}

interface State {
    isOnEdit: boolean;
    editText: string;
}

export class Project extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOnEdit: false,
            editText: props.name
        }
    }

    startEdit() {
        this.setState(objectAssign({}, this.state, {isOnEdit: true}))
    }

    changeText(target: HTMLInputElement) {
        this.setState(objectAssign({}, this.state, {editText: target.value}))
    }

    endEdit() {
        this.props.onEditProject(this.props.id, this.state.editText)
        this.setState(objectAssign({}, this.state, {isOnEdit: false}))
    }

    focusInput(input: HTMLInputElement) {
        if(input){
            ReactDOM.findDOMNode<HTMLInputElement>(input).focus()
        }
    }

    projectName() {
        if (this.state.isOnEdit) {
            return <input type="text" ref={this.focusInput} onBlur={() => this.endEdit()} defaultValue={this.state.editText} onChange={(event) => this.changeText(event.target as HTMLInputElement)} /> 
        } else {
            return <div className={styles.text} onDoubleClick={() => this.startEdit()}>{this.props.name}</div>
        }
    }

    onDeleteButtonClick(event: React.MouseEvent) {
        if(confirm("プロジェクト「" + this.props.name + "」を削除しますか?")){
            this.props.onDeleteButtonClick()
        }
        event.stopPropagation()
    }

    render() {
        var projectStyle = styles.project;
        if (this.props.selected) {
            projectStyle += " ";
            projectStyle += styles.selected;
        }
        return (
            <li className={projectStyle} onClick={(event) => this.props.onClick()}>
                <button className={styles.button} onClick={(event) =>this.onDeleteButtonClick(event)}>×</button>
                {this.projectName()}
            </li>
        )
    }
}
