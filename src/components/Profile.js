import React, { Component } from 'react';
import {Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import Experience from "./Experience";
import Education from './Education';
import Project from './Project';
import Resume from './Resume';
import CodeSlides from './CodeSlides';
import DanceSlides from './DanceSlides';
import profile from '../profile.json';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    
      render() {
        return <div>
          <Jumbotron>
            <div style={{display: "flex"}}>
              <div style={{width:"35%"}}>
                <DanceSlides></DanceSlides>
              </div>
              <div style={{width:"70%"}}>
                <h1 className="display-3">{profile.title}</h1>
                <p className="lead">{profile.summary}</p>
              </div>
              <div style={{width:"35%"}}>
                <CodeSlides></CodeSlides>   
              </div>
            </div>
          </Jumbotron>
    
          <Container>
            <Nav tabs>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                         onClick={() => { this.toggle('1'); }}>
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                         onClick={() => { this.toggle('2'); }}>
                  Education
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                         onClick={() => { this.toggle('3'); }}>
                  Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                         onClick={() => { this.toggle('4'); }}>
                  Resume/CV
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Experience/>
              </TabPane>
              <TabPane tabId="2">
                <Education/>
              </TabPane>
              <TabPane tabId="3">
                <Project/>
              </TabPane>
              <TabPane tabId="4">
                <Resume/>
              </TabPane>
            </TabContent>
          </Container>
        </div>;
      }
}