import React from 'react';
import { Divider, List, Button, Modal } from 'antd';
import axios from 'axios';
import { transactionsApiData, processApiData } from '../common/constant'
import JsonEditor from './JsonEditor'
import { cloneDeep, isEmpty } from 'lodash';
class ApiList extends React.Component {

    constructor(props){
        super(props)
        this.state={
            loading:false,
            openModal:false,
            apiObj:{},
            jsonRequestBody:{},
            responseObj:{}

        }
    }
    handleApiClick = (apiObj) => {
        return () => {
            console.log(apiObj)
            this.setState({ apiObj, openModal: true })
        }
    }
    handleSendRequest = async () =>{
        this.setState({ loading:true});
        console.log("test", this.state)
        let url = window.localStorage.getItem("fareyeServer") + this.state.apiObj.endPoint + '?apiKey='+window.localStorage.getItem("fareyeApiKey");
        let requestObj = cloneDeep(this.state.jsonRequestBody);
        let config = {
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
          }
        if(this.state.apiObj.method=="POST"){  
        await axios.post(url, requestObj, config).then((res)=>{
            console.log(res)
            let responseObj ={
                success:true,
                data: res.data,
                status: res.status
            }
            this.setState({responseObj,loading:false})

        }).catch(err=>{
            console.log(err)
            let responseObj = {
                success:false,
                error: err.message,
                data: err.response
            }
            this.setState({responseObj, loading:false})
        })

        return;
        }

        Object.keys(requestObj).forEach(key=>{
            url=url+"&"+key+"="+requestObj[key]
        })
        await axios.get(url, config).then((res)=>{
            console.log(res)
            let responseObj ={
                success:true,
                data: res.data,
                status: res.status
            }
            this.setState({responseObj,loading:false})

        }).catch(err=>{
            console.log(err)
            let responseObj = {
                success:false,
                error: err.message,
                data: err.response
            }
            this.setState({responseObj, loading:false})
        })


    }
    handleModalClose = (isOpen) => {
        this.setState({ loading:false, openModal: isOpen });
    }

    onJsonChange = (json) =>{
        console.log(json)
        this.setState({jsonRequestBody:json})
    }

    render() {
        return (
            <div className="api-listing">
                <div className="api-list">
                    <div className="api-item">
                        <Divider orientation="left">Transactions</Divider>
                        <List
                            size="default"
                            bordered
                            dataSource={transactionsApiData}
                            renderItem={apiObj =>
                                <List.Item
                                    actions={[<Button onClick={this.handleApiClick(apiObj)} size="small" type="primary">{apiObj.method}</Button>]}
                                >
                                    <List.Item.Meta
                                        title={<span>{apiObj.title}</span>}
                                        description={<span>{apiObj.endPoint}</span>}
                                    />
                                </List.Item>}
                        />
                    </div>
                </div>
                <div className="api-list">
                    <div className="api-item">
                        <Divider orientation="left">Process</Divider>

                        <List
                            size="default"
                            bordered
                            dataSource={processApiData}
                            renderItem={apiObj =>
                                <List.Item
                                    actions={[<Button onClick={this.handleApiClick(apiObj)} size="small" type="primary">{apiObj.method}</Button>]}
                                >
                                    <List.Item.Meta
                                        title={<span>{apiObj.title}</span>}
                                        description={<span>{apiObj.endPoint}</span>}
                                    />
                                </List.Item>}
                        />
                    </div>
                </div>

                <Modal
                    
                    centered
                    maskClosable={false}
                    visible={this.state.openModal}
                    onCancel={()=>this.handleModalClose(false)}
                    footer={[
                        <Button key="back" onClick={()=>this.handleModalClose(false)}>
                          Return
                        </Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleSendRequest}>
                          Send Request
                        </Button>
                        ]}
                    width={1200}
                >
                {
                    this.state.apiObj && <div>
                        <div className="api-name">
                        <Button type="dashed" size="small">{this.state.apiObj.method}</Button>
                            <span style={{marginLeft:12}}>{window.localStorage.getItem("fareyeServer") + this.state.apiObj.endPoint + '?apiKey='+window.localStorage.getItem("fareyeApiKey")}</span>
                        </div>
                        <div>
                       
                        <span> Request Body </span>
                        <JsonEditor
                         mode="form"
                         data={this.state.apiObj.requestBody}
                         onJsonChange={this.onJsonChange}
                        />
                        </div>
                        {!isEmpty(this.state.responseObj) && <div>
                        <span> Response Body </span>
                         
                         {this.state.responseObj.success && 
                          <JsonEditor data={this.state.responseObj} /> 
                         }
                         {!this.state.responseObj.success && 
                            <div>
                                {this.state.responseObj.error}
                            </div>
                         }
                        
                        </div>}

                    </div>
                }


                </Modal>
            </div>
        );
    }
}

export default ApiList;