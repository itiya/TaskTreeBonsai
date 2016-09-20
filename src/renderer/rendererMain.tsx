/// <reference path="../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDom from 'react-dom'
import Root = require('./component/root.tsx');

var data = {
    slogan: "Prove your faith",
    projectList: [
        {id: 0, name: "First Project"},
        {id: 1, name: "Second Project"},
        {id: 2, name: "Third Project"},
        {id: 3, name: "Fourth Project"}
    ]
}

ReactDom.render(<Root.Root data={data} />, document.getElementById('root'));
