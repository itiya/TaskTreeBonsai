/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react'
import Slogan = require('./slogan/slogan');
import ProjectList = require('./projectList/projectList');
import Project = require('./projectList/project')
var styles = require('./root.css');

export interface Props {
    data: {
        slogan: string;
        projectList: Project.Props[];
    }
}

export class Root extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.root}>
                <Slogan.Slogan slogan={this.props.data.slogan}/>
                <ProjectList.ProjectList projects={this.props.data.projectList}/>
            </div>
        );
    }
}
