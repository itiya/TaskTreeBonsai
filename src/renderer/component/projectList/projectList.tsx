/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require("./projectList.css");

interface Props{
}

export class ProjectList extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.projectList}>
            </div>
        );
    }
}
