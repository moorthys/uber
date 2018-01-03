import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Badge } from 'antd';
var Dimensions = require('react-dimensions');


class Hash extends Component {
  render() {
    return (
      <div>
            Hash
          <img src='https://www.w3schools.com/howto/img_fjords.jpg' />
          <div>
            <Badge count={25} />
            <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
            <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
          </div>
      </div>
    );
  }
}

export default Dimensions()(Hash);
