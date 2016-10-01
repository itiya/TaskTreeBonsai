/// <reference path="../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import taskTreeBonsai from './redux/reducer/reducer'
import Root = require('./component/presentational/root.tsx');

let store = createStore(taskTreeBonsai)
ReactDom.render(
    <Provider store={store}>
        <Root.Root />
    </Provider>,
    document.getElementById('root')
);
