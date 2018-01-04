import React, { Component } from 'react';
import { Input } from 'antd';
import { Row, Col } from 'antd';

var Dimensions = require('react-dimensions');

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Input placeholder="Basic usage" />
        <Row>
          <Col span={2}></Col>
          <Col span={10}>10</Col>
          <Col span={10}>10</Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}

export default Dimensions()(Home);
