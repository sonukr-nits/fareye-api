import React, { Component } from 'react';
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import { exampleData } from "../common/constant";


class JsonEditor extends React.Component {

    constructor(props){
        super(props)
    }
    handleChange = (json)=>{
        console.log(json)
    }
    render() { 

        return (
        <div className="json-body">
            <Editor 
            search={false}
            statusBar={false}
            navigationBar={false}
            mode={this.props.mode || "view"}
            tag='div'
            value={this.props.data} 
            onChange={this.props.onJsonChange} />
        </div>);
    }
}
 
export default JsonEditor;