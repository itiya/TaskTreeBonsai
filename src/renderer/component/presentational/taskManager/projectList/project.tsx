/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require('./project.css');

export interface Props{
    name: string,
    selected: boolean,
    onClick: () => void,
    onDeleteButtonClick: () => void;
}

export class Project extends React.Component<Props, any> {
    render() {
        var projectStyle = styles.project;
        if (this.props.selected) {
            projectStyle += " ";
            projectStyle += styles.selected;
        }
        return (
            <li className={projectStyle} onClick={(event) => this.props.onClick()}>
                <input type="button" onClick={(event) => this.props.onDeleteButtonClick()} />
                {this.props.name}
            </li>
        )
    }
}
