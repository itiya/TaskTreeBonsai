/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react'
import Project = require('./project.tsx')
var styles = require("./projectList.css");

export interface Props{
    projects: Project.Props[];
}

export class ProjectList extends React.Component<Props, any> {
    render() {
        var projects = this.props.projects.map(function (project) {
            return (<li key={project.id}>{project.name}</li>);
        })
        return (
            <ul className={styles.projectList}>
                {projects}
            </ul>
        );
    }
}
