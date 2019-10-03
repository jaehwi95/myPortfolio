import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import profile from "../profile.json";
import moment from 'moment';

function getDuration(duration) {
    const years = parseInt(duration / 12);
    let months;
    if (duration > 12) {
        months = (duration % 12);
    }
    else {
        months = duration;
    }
    // format years/year and month/months
    return (years > 0 ? years + " year" + (years > 1 ? "s" : "") + " and " : "") + (months > 0 ? (months+1) + " month" + (months > 1 ? "s" : "") : "");
}

export default class Experience extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        {profile.experiences.map(
                            function (experience, i) {
                                moment.locale('en');
                                const totalDuration = experience.roles.reduce(
                                    function (cnt, role) {
                                        const startDate = moment(role.startDate);
                                        const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                                        const duration = moment.duration(timeEnd.diff(startDate));
                                        return (Number(cnt) + Number(duration.asMonths().toPrecision(1)));
                                    }, 0);
                                return (
                                    <div key={i}>
                                        <Media>
                                            <Media left top href={experience.url}></Media>
                                            <Media body>
                                                <Media heading>
                                                    <a href={experience.url}>{experience.companyName}</a>
                                                    <span className="jobTotalDuration">{getDuration(totalDuration)}</span>
                                                </Media>
                                                {experience.roles.map(
                                                    function (role, i) {
                                                        const startDate = moment(role.startDate);
                                                        const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                                                        const duration = Number(moment.duration(timeEnd.diff(startDate)).asMonths().toPrecision(1));
                                                        return (
                                                            <div key={i}>
                                                                <h5>{role.title}</h5>
                                                                <span
                                                                    className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')} ({getDuration(duration)})
                                                                </span>
                                                                <span className="jobLocation">{role.location}</span>
                                                                <div>
                                                                    <div>
                                                                        <h1>{role.mainDesc1}</h1><p className="jobDescription1">{role.detail1}</p>
                                                                    </div>
                                                                    <div>
                                                                        <h1>{role.mainDesc2}</h1><p className="jobDescription2">{role.detail2}</p>                                                                </div>
                                                                    <div>
                                                                        <h1>{role.mainDesc3}</h1><p className="jobDescription3">{role.detail3}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </Media>
                                        </Media>
                                    </div>
                                );
                            }
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
  }
