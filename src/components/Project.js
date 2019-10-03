import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import profile from "../profile.json";
import moment from 'moment';

export default class Education extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        {profile.projects.map(function (project, i) {
                            return (
                                <Media key={i}>
                                    <Media left top href={project.url}>
                                        <Media object src={project.logo} alt={project.title}/></Media>
                                        <Media body>
                                        <Media heading>
                                            <a href={project.url}>{project.title}</a>
                                        </Media>
                                        <Row>
                                            <Col>{moment(project.startDate).format('MMM YYYY')} - {(project.endDate) ? moment(project.endDate).format('MMM YYYY') : 'Present'}</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <div>
                                                        <h3>{project.mainDesc1}</h3><p className="jobDescription1">{project.detail1}</p>
                                                    </div>
                                                    <div>
                                                        <h3>{project.mainDesc2}</h3><p className="jobDescription2">{project.detail2}</p>
                                                    </div>
                                                    {project.mainDesc3 ?
                                                    <div>
                                                        <h3>{project.mainDesc3}</h3><p className="jobDescription3">{project.detail3}</p>
                                                    </div> : <div></div>}
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </Media>
                                </Media>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}