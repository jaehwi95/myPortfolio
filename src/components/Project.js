import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import profile from "../profile.json";
import moment from 'moment';
import geneSeq from '../img/geneSeq.jpg';
import safeRideChicago from '../img/safeRideChicago.jpg';
import UIDesign from '../img/UIDesign.jpg';
import virtPad from '../img/virtPaddleBoard.jpg'

export default class Education extends Component {
    render() {
        const srcImg = <img src={safeRideChicago} alt="src_non" style={{width: "50%", height: "50%"}}></img>;
        const vpImg = <img src={virtPad} alt="vp_non" style={{width: "50%", height: "50%"}}></img>
        const gpsaImg = <img src={geneSeq} alt="gpsa_non" style={{width: "50%", height: "50%"}}></img>;
        const ftImg = <img src={UIDesign} alt="ft_non" style={{width: "50%", height: "50%"}}></img>
        
        return(
            <Container>
                <Row>
                    <Col>
                        {profile.projects.map(function (project, i) {
                            return (
                                <Media key={i} style={{borderBottom: "1px solid rgb(222, 226, 230)", display: "flex", alignItems: "center"}}>
                                    {
                                        {
                                            "Safe Ride Chicago": srcImg,
                                            "Virtual Paddleboarding": vpImg,
                                            "Genome and Protein Sequence Alignment": gpsaImg,
                                            "Food Tinder": ftImg
                                        }[project.title]
                                    }
                                    <div>
                                        <Media left top href={project.url}></Media>
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
                                        </Media>
                                    </div>
                                </Media>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}