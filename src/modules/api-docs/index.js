
import React, { Component } from 'react'
import './ApiDoc.css'
import ApiList from './components/ApiList'
import HeaderForm from './components/HeaderForm'
import { PageHeader} from 'antd';
class ApiDoc extends React.Component {
    

    render() { 

        return (
        <div> 
            <div style={{marginBottom:8}} >
                <HeaderForm/>
            </div> 
            <ApiList/>
        </div>
        );
    }
}
 
export default ApiDoc;


