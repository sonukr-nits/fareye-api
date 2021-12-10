import React, { Component } from 'react';
import { Form, Input, Button, Select, Row, Col, message } from 'antd';
import { loginService } from '../service/LoginService';
import Sha256 from 'sha256';
import axios from 'axios';
import { APIs, serverName } from '../common/constant';
import { isEmpty } from 'lodash';
const { Option } = Select;


class HeaderForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            errors:""
        }
    }
    handleEnvChange = (env) =>{
        console.log(env);
        console.log(window.localStorage.getItem("fareyeServer"))
        window.localStorage.setItem("fareyeServer",env)
        window.localStorage.setItem("fareyeApiKey","")

    }
    async handleLogin(){
        var env = window.localStorage.getItem("fareyeServer")
        var username = this.state.username
        var password = this.state.password
        console.log(username, password, env)
        if (this.isValid()) {
            
            this.setState({ isLoading: true,errors: {} });
            const shaPassword = Sha256(this.state.password);
            
            let requestBody= {
                serverURL : env,
                userName : username,
                password: shaPassword
            }
            axios.post(APIs.GET_API_KEY, requestBody).then((res)=>{
            const data = res.data;
            let apiKey= data && data.token;
            if(apiKey){
                console.log("API KEY FOUND", apiKey)
                window.localStorage.setItem("fareyeApiKey",apiKey)
                message.success("API KEY FOUND");
            }
            
            this.setState({ isLoading: false,errors: {} });
           }).catch(err=>{
            message.error("Something went Wrong")
            this.setState({ isLoading: false,errors: {} });
           })
          }

    }

    isValid() {
        const { errors, isValid } = loginService.validateInput(this.state);
        if (!isValid) {
          this.setState({ errors });
        }
        return isValid;
      }

    resetValues  = ()=>{
        window.localStorage.setItem("fareyeServer","")
        window.localStorage.setItem("fareyeApiKey","")
        window.location.reload();

    } 
    render() {
        
        return (
            <div className="header-form bgwhite">
                <Form layout="vertical">
                    
                <Row type="flex" justify="space-between" >
                
                    <Col span={5}>
                        <Form.Item label="Server" >
                            <Select 
                            disabled={!isEmpty(window.localStorage.getItem("fareyeApiKey"))}
                            // value={()=> (window.localStorage.getItem("fareyeServer"))}
                            onChange={this.handleEnvChange}>
                                {serverName.map((entry) => (
                                    <Option key={entry.name} value={entry.value}>{entry.name}</Option>
                                ))};
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label="User Name">
                            <Input placeholder="user name" 
                            disabled={!isEmpty(window.localStorage.getItem("fareyeApiKey"))}
                            onChange={(e)=>{
                                this.setState({username:e.target.value})
                            }} />
                        </Form.Item>
                    </Col >
                    <Col span={5}>
                        <Form.Item label="Password"
                           
                        >
                            <Input type="password" placeholder="password" 
                             disabled={!isEmpty(window.localStorage.getItem("fareyeApiKey"))}
                            onChange={(e)=>{
                                this.setState({password:e.target.value})
                            }} />
                        </Form.Item>

                    </Col>
                    
                    <Col push={1} span={3}>
                    <Form.Item label="  ">
                         {isEmpty(window.localStorage.getItem("fareyeApiKey"))? 
                         <Button type="primary" onClick={()=>this.handleLogin()} loading={this.state.isLoading}>
                            LogIn
                        </Button>:
                        <Button  danger type="ghost" onClick={this.resetValues} >
                            LogOut
                        </Button>}
                    </Form.Item>
                    </Col>
                </Row>
                </Form>
            </div>);
    }
}

export default HeaderForm;