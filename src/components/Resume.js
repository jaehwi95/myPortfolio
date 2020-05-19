import React, { Component } from 'react';
import { Container } from 'reactstrap';
import myResume from './Jaehwi_Kim_Resume_v16.pdf';

export default class Resume extends Component {
    render() {
      return (
          <Container>
                <div>
                    <object width="100%" height="400" data={myResume} type="application/pdf"> </object>
                    <div><a href = {myResume} target = "_blank">Download Pdf</a></div>
                </div>
          </Container>
      );
    }
}