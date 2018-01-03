import React, { Component } from 'react';
var Dimensions = require('react-dimensions');

class NoContent extends Component {
  render() {
    return (
      <div style={{ width:'100%', height:'100px', textAlign:'center'}} >
            Sorry! We couldn't find what you were looking for.
      </div>
    );
  }
}

export default Dimensions()(NoContent);
