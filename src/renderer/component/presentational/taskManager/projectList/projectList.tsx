/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
import Project = require('./project.tsx')
import ProjectAdder = require('./projectAdder.tsx')

var styles = require("./projectList.css");

import DomainProject = require('../../../../../domain/project');
import { Dispatch } from 'redux'

export interface Props{
    projects: DomainProject.Project[];
    selectedProjectId: number;
    onProjectClick: (id: number) => void;
    onProjectAdderClick: (name: string) => void;
}

export class ProjectList extends React.Component<Props, any> {
    render() {
        var that = this;
        var projects = this.props.projects.map(function (project) {
            return(
                <Project.Project key={project.id} name={project.name} selected={project.id === that.props.selectedProjectId} onClick={() => that.props.onProjectClick(project.id)} />
            );
        })
        return (
            <div className={styles.projectList}>
                <ul className={styles.ul}>
                    {projects}
                    <ProjectAdder.Project onClick={(name: string) => that.props.onProjectAdderClick(name)} />
                </ul>
            </div>
        );
    }
}
