/// <reference path="../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDom from 'react-dom'
import Root = require('./component/root.tsx');

var data = {
    slogan: "Prove your faith",
    projectList: [
        {
            id: 0,
            name: "First Project",
            tasks: [{
                id: 0,
                name: "task1"
            }]
        },
        {
            id: 1,
            name: "Second Project",
            tasks: [{
                id: 1,
                name: "task2"
            }]
        },
        {
            id: 2,
            name: "Third Project",
            tasks: [{
                id: 2,
                name: "task3"
            }]
        },
        {
            id: 3,
            name: "Fourth Project",
            tasks: [{
                id: 3,
                name: "task4"
            }]
        }
    ]
}

ReactDom.render(<Root.Root data={data} />, document.getElementById('root'));
