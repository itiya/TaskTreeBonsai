/// <reference path="../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDom from 'react-dom'
import Root = require('./component/root.tsx');

ReactDom.render(<Root.Root slogan="Prove your faith" />, document.getElementById('root'));
