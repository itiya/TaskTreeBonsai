/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react'

interface Props{
    slogan: string;
}

export class Slogan extends React.Component<Props, any> {
    render() {
        return (
            <div className="slogan">
                {this.props.slogan}
            </div>
        );
    }
}
