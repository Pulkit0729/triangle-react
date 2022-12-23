import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Editor.css"

class EditorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="editor"
                toolbarClassName="toolbarWrapper"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    options:['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history' ],
                    inline: { 
                        inDropdown: true,
                        className: "dropdown"
                     },
                    list: { 
                        inDropdown: true,
                        className: "dropdown"
                    },
                    textAlign: { 
                        inDropdown: true,
                        className: "dropdown"
                    },
                    fontSize: {
                        className: "dropdown"
                    },
                    fontFamily: {
                        className: "dropdown"
                    },
                    link: { inDropdown: true },
                    history: { 
                        inDropdown: true,
                            className: "dropdown"},
                  }}
            />
        )
    }
}

export default EditorContainer;
