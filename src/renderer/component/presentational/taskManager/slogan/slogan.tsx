/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require("./slogan.css");

interface Props{
    slogan: string;
}

export class Slogan extends React.Component<Props, any> {
    render() {
        return (
            <div className={styles.slogan}>
                <div className={styles.text}>{this.props.slogan}</div>
            </div>
        );
    }
}
