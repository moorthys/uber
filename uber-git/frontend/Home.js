import React, { Component } from 'react';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { message } from 'antd';

var axios = require('axios');


var Dimensions = require('react-dimensions');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {first_name: '', last_name: '', email: ''};
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    

    onFirstNameChange(e) {
        this.setState({ first_name: e.target.value });
    }
    

    onLastNameChange(e) {
        this.setState({ last_name: e.target.value });
    }
    

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    

    handleClick() {
        axios.post('/api/user/add', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        })
            .then(function (response) {
            if(response.data.status) {
                message.success('Successfully saved user.');
            }
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
            <div style={{ margin: 16 }}>
            <div style={{ marginBottom: 16 }}>
            <Row>
            <Col span={8}></Col>
            <Col span={4}>First Name</Col>
            <Col span={4}><Input placeholder="First Name" value={this.state.first_name} onChange={this.onFirstNameChange} /></Col>
            <Col span={8}></Col>
            </Row>
            </div>
            <div style={{ marginBottom: 16 }}>
            <Row>
            <Col span={8}></Col>
            <Col span={4}>Last Name</Col>
            <Col span={4}><Input placeholder="Last Name" value={this.state.last_name} onChange={this.onLastNameChange} /></Col>
            <Col span={8}></Col>
            </Row>
            </div>
            <div style={{ marginBottom: 16 }}>
            <Row>
            <Col span={8}></Col>
            <Col span={4}>Mail</Col>
            <Col span={4}><Input placeholder="email" value={this.state.email} onChange={this.onEmailChange} /></Col>
            <Col span={8}></Col>
            </Row>
            </div>
            <div style={{ marginBottom: 16 }}>
            <Row>
            <Col span={12}></Col>
            <Col span={4}><Button icon="save" onClick={this.handleClick}>Save</Button></Col>
            <Col span={8}></Col>
            </Row>
            </div>
            </div>
            </div>
        );
    }
}

export default Dimensions()(Home);
