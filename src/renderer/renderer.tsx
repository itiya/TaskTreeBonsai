/// <reference path="../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDom from 'react-dom'

class CommentBox extends React.Component<any, any> {
    render() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox
            </div>
        );
    }
}

ReactDom.render(<CommentBox />, document.getElementById('root'));
