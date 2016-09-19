/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require('./project.css');

export interface Props{
    name: string,
}

export class Project extends React.Component<Props, any> {
    render() {
        return (
            <li className={styles.project}>
                {this.props.name}
            </li>
        )
    }
}
