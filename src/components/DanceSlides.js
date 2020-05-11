import React, { Component } from 'react'
import './Slides.css';
import { Zoom } from 'react-slideshow-image';
import jumpshot from '../img/danceSlides/jumpshot.JPG';
import mmguys from '../img/danceSlides/mmguys.JPG';
import teduiuc from '../img/danceSlides/teduiuc.JPG';
import unit from '../img/danceSlides/unit.JPG';
import whiplash from '../img/danceSlides/whiplash.jpeg';
 
const zoomImages = [
    teduiuc,
    mmguys,
    unit,
    whiplash,
    jumpshot
];
 
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false
}

export default class DanceSlides extends Component {
  render() {
    return (
        <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            zoomImages.map((each, index) => <img key={index} style={{width: "333px", height: "200px"}} src={each} alt="no img"/>)
          }
        </Zoom>
      </div>
      )
  };
}