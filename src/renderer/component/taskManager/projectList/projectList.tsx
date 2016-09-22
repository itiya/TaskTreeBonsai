/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react'
import Project = require('./project.tsx')
var styles = require("./projectList.css");

export interface Props{
    projects: {
        id: number,
        name: string
    }[];
}

export class ProjectList extends React.Component<Props, any> {
    render() {
        var projects = this.props.projects.map(function (project) {
            return (
                <Project.Project key={project.id} name={project.name} />
            );
        })
        return (
            <div className={styles.projectList}>
            
            <ul className={styles.ul}>
                {projects}
            </ul>
            </div>
        );
    }
}
