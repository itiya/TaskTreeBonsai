/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'

var styles = require("./task.css");

export class TaskAdder extends React.Component<any, any> {
    render() {
        return <div className={styles.box + " " + styles.adder}></div>
    }
}
