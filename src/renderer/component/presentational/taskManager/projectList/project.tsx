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
                {this.props.name}
            </li>
        )
    }
}
