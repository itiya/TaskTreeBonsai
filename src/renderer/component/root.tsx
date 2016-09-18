/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react'
import Slogan = require('./slogan/slogan');

export interface Props {
    slogan: string;
}

export class Root extends React.Component<Props, any> {
    render() {
        return (
            <div className="root">
                Hello, world! I am a Root Component!
                <Slogan.Slogan slogan={this.props.slogan}/>
            </div>
        );
    }
}
