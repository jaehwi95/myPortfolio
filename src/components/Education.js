import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import profile from "../profile.json";
import UIUC from '../img/UIUCLogo.png';
import './Education.css';

export default class Education extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        {profile.studies.map(
                            function (study, i) {
                                return(
                                    <Media key={i}>
                                        <Media left top href={study.url}>
                                        </Media>
                                        <Media body>
                                            <Media style={{display: "flex", justifyContent: "space-around", margin: "0px 0px 50px 0px"}}>
                                                <img src={UIUC} alt="uiuc_broken" style={{height: "40%", width: "40%"}}></img>
                                                <div>
                                                    <a href={study.url}>{study.institute}></a>
                                                    {
                                                        [
                                                            {
                                                                "key": "Location",
                                                                "value": study.location
                                                            },
                                                            {
                                                                "key": "Degree",
                                                                "value": study.degree
                                                            }
                                                        ].map(function (object, i) {
                                                        return(
                                                            <div key={i}>
                                                                <Row>
                                                                    <Col className="formLabel">{object.key}:</Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>{object.value}</Col>
                                                                </Row>
                                                            </div>
                                                        )
                                                        })
                                                    }
                                                </div>
                                            </Media>
                                            {
                                                [
                                                    {
                                                        "key": "Related Coursework",
                                                        "value": study.relatedCoursework
                                                    },
                                                    {
                                                        "key": "Duration",
                                                        "value": study.durationDates
                                                    }
                                                ].map(function (object, i) {
                                                return(
                                                    <div key={i}>
                                                        <Row>
                                                            <Col className="formLabel">{object.key}:</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>{object.value}</Col>
                                                        </Row>
                                                    </div>
                                                )
                                                })
                                            }
                                        </Media>
                                    </Media>
                                )
                            }
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}