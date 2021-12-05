import React, { Component } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
const { Option } = Select;

class HeaderForm extends React.Component {

    handleEnvChange = (env) =>{
        window.localStorage.setItem("fareyeServer",env)
        window.localStorage.setItem("fareyeApiKey","APIKEY124488300300202002")

    }
    render() {

        return (
            <div className="header-form bgwhite">
                <Form layout="vertical">
                <Row type="flex" justify="space-between" >
                    <Col span={5}>
                        <Form.Item label="Server">
                            <Select onChange={this.handleEnvChange}>
                                <Option value="http://localhost:8080">QaTest</Option>
                                <Option value="https://staging.fareye.co">Staging</Option>
                                <Option value="https://fareye.co">Main Prod</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label="User Name">
                            <Input placeholder="user name" />
                        </Form.Item>
                    </Col >
                    <Col span={5}>
                        <Form.Item label="Password">
                            <Input type="password" placeholder="password" />
                        </Form.Item>

                    </Col>
                    <Col push={1} span={3}>
                    <Form.Item label="  ">
                        <Button type="primary">
                            LogIn
                        </Button>
                    </Form.Item>
                    </Col>
                </Row>
                </Form>
            </div>);
    }
}

export default HeaderForm;