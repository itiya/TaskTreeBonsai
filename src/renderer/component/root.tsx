/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react'
import Slogan = require('./slogan/slogan');
import ProjectList = require('./projectList/projectList');
var styles = require('./root.css');

export interface Props {
    slogan: string;
}

export class Root extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.root}>
                <Slogan.Slogan slogan={this.props.slogan}/>
                <ProjectList.ProjectList />
            </div>
        );
    }
}
