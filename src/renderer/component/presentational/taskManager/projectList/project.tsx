/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require('./project.css');

export interface Props{
    name: string,
}

export class Project extends React.Component<Props, any> {
    handleOnClick(event: React.MouseEvent) {
        console.log("click:"+this.props.name);
    }

    render() {
        return (
            <li className={styles.project} onClick={(event) => this.handleOnClick(event)}>
                {this.props.name}
            </li>
        )
    }
}
