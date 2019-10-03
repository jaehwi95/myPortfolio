import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import profile from "../profile.json";
import moment from 'moment';
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
                                            <Media heading>
                                                <a href={study.url}>{study.institute}</a>
                                            </Media>
                                            {
                                                [
                                                    {
                                                        "key": "Location",
                                                        "value": study.location
                                                    },
                                                    {
                                                        "key": "Degree",
                                                        "value": study.degree
                                                    },
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
                                                    <div>
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