import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import profile from "../profile.json";
import moment from 'moment';
import gpLogo from '../img/gp_logo.png';
import reactRedux from '../img/react_redux.png';
import teamwork from '../img/teamwork.jpg';
import agileProd from '../img/agile_prod.png';

const experiences = profile.experiences;

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
                        {experiences.map(
                            function (experience, i) {
                                moment.locale('en');
                                // const totalDuration = experience.roles.reduce(
                                //     function (cnt, role) {
                                //         const startDate = moment(role.startDate);
                                //         const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                                //         const duration = moment.duration(timeEnd.diff(startDate));
                                //         return (Number(cnt) + Number(duration.asMonths().toPrecision(1)));
                                //     }, 0);
                                const startDate = moment(experience.startDate);
                                const timeEnd = moment(experience.currentJob ? new Date() : new Date(experience.endDate));
                                const duration = Number(moment.duration(timeEnd.diff(startDate)).asMonths().toPrecision(1));
                                return (
                                    <Media key={i}>
                                        <Media left top href={experience.url}></Media>
                                        <Media body>
                                            <Media heading style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                                                <img src={gpLogo} alt="img_broken" style={{height: "100%"}}></img>
                                                <div>
                                                    <a href={experience.url} style={{fontSize: "150%"}}>{experience.companyName}</a>
                                                    <h5>{experience.title}</h5>
                                                    <span
                                                        className="jobDuration">{startDate.format('MMM YYYY')} - {experience.currentJob ? 'Present' : timeEnd.format('MMM YYYY')} ({getDuration(duration)})
                                                    </span>
                                                    <span className="jobLocation">{experience.location}</span>        
                                                </div>
                                                {/* <span className="jobTotalDuration">{getDuration(totalDuration)}</span> */}
                                            </Media>
                                            {experience.roles.map(
                                                function (role, i) {
                                                    return (
                                                        <div key={i}>
                                                            <div style={{display: "flex", flexDirection: "row"}}>
                                                                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                                                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                                                        <img src={reactRedux} alt="rr_broken" style={{width: "30%", height: "30%"}}></img>
                                                                        <div style={{width: "50%"}}>
                                                                            <h1>{role.mainDesc1}</h1><p className="jobDescription1">{role.detail1}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                                                        <img src={teamwork} alt="tw_broken" style={{width: "30%", height: "30%"}}></img>
                                                                        <div style={{width: "50%"}}>
                                                                            <h1>{role.mainDesc2}</h1><p className="jobDescription2">{role.detail2}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                                                        <img src={agileProd} alt="ap_broken" style={{width: "30%", height: "30%"}}></img>
                                                                        <div style={{width: "50%"}}>
                                                                            <h1>{role.mainDesc3}</h1><p className="jobDescription3">{role.detail3}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </Media>
                                    </Media>
                                );
                            }
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
  }
