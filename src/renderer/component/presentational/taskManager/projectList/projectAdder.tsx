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
        this.setState({inputText: ""})
        this.props.onClick(this.state.inputText)
    }

    changeText(target: HTMLInputElement) {
        this.setState({inputText: target.value})
    }

    render() {
        var projectStyle = styles.project;
        return (
            <li className={projectStyle}>
                <input className={styles.button} type="button" onClick={(event) => this.buttonOnClick()}/>
                <input className={styles.text} type="text" value={this.state.inputText} onChange={(event) => this.changeText(event.target as HTMLInputElement)} />
            </li>
        )
    }
}
