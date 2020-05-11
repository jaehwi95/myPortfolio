import React, { Component } from 'react'
import './Slides.css';
import { Zoom } from 'react-slideshow-image';
import cplus from '../img/codeSlides/c++.jpeg';
import dbs from '../img/codeSlides/dbs.png';
import htmlcss from '../img/codeSlides/htmlcssjs.png';
import node_js from '../img/codeSlides/nodejs.png';
import pythonlang from '../img/codeSlides/python.png';
 
const zoomImages = [
    cplus,
    dbs,
    htmlcss,
    node_js,
    pythonlang
];
 
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false
}

export default class CodeSlides extends Component {
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