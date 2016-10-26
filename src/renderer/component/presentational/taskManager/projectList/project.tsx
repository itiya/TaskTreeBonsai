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
    onDeleteButtonClick(event: React.MouseEvent) {
        this.props.onDeleteButtonClick()
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
                <input type="button" onClick={(event) =>this.onDeleteButtonClick(event)} />
                {this.props.name}
            </li>
        )
    }
}
