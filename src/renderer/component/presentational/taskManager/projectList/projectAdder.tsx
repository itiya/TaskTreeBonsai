/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require('./projectAdder.css');

export interface Props{
    onClick: (name: string) => void
}

interface State{
    inputText: string;
}

export class Project extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {inputText: ""}
    }

    buttonOnClick() {
        if (this.state.inputText !== "") {
            this.setState({inputText: ""})
            this.props.onClick(this.state.inputText)
        }
    }

    onKeyDown(event: React.KeyboardEvent) {
        if (event.keyCode === 13){
            this.setState({inputText: ""})
            this.props.onClick(this.state.inputText)
        }
    }

    changeText(target: HTMLInputElement) {
        this.setState({inputText: target.value})
    }

    render() {
        var projectStyle = styles.project;
        return (
            <li className={projectStyle}>
                <div className={styles.button} onClick={(event) => this.buttonOnClick()}>+</div>
                <input
                    className={styles.text}
                    type="text"
                    value={this.state.inputText}
                    onChange={(event) => this.changeText(event.target as HTMLInputElement)}
                    onKeyDown={(event: React.KeyboardEvent) => this.onKeyDown(event)}
                />
            </li>
        )
    }
}
