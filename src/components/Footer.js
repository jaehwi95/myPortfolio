import React, { Component } from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


export default class Footer extends Component {
    render(){
        return(
            <footer>
                <hr></hr>
                <Container>
                    <a href="https://www.linkedin.com/in/jaehwikim/">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                    <a href="https://github.com/jaehwi95/">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </Container>
            </footer>
        );
    }
}