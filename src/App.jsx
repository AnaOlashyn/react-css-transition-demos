import React, { Component } from 'react';
import './App.scss';
import { GiAstronautHelmet, GiGargoyle, GiLighthouse, GiPiranha, GiPolarBear, GiRingingAlarm, GiSinagot, GiWaveSurfer } from "react-icons/gi";

class App extends Component {
  handleClickAll = () => {
    this.handleClickOpacity();
    this.handleClickSlide();
    this.handleClickSlideUp();
    this.handleClickSlideOut();
    this.handleClickHeight();
    this.handleClickWidth();
    this.handleClickSize();
    this.handleClickRotate();//
  }
  handleClickOpacity = () => {
    document.querySelector('.opacity').classList.toggle('opacityOn');
    document.querySelector('.opacityButton').classList.toggle('white');
  }
  handleClickSlide = () => {
    document.querySelector('.slide').classList.toggle('slideOn');
    document.querySelector('.slideButton').classList.toggle('white');
  }
  handleClickSlideUp = () => {
    document.querySelector('.slideUp').classList.toggle('slideUpOn');
    document.querySelector('.slideUpButton').classList.toggle('white');
  }
  handleClickSlideOut = () => {
    document.querySelector('.slideOut').classList.toggle('slideOutOn');
    document.querySelector('.slideOutButton').classList.toggle('white');
  }
  handleClickHeight = () => {
    document.querySelector('.height').classList.toggle('heightOn');
    document.querySelector('.heightButton').classList.toggle('white');
  }
  handleClickWidth = () => {
    document.querySelector('.width').classList.toggle('widthOn');
    document.querySelector('.widthButton').classList.toggle('white');
  }
  handleClickSize = () => {
    document.querySelector('.size').classList.toggle('sizeOn');
    document.querySelector('.sizeButton').classList.toggle('white');
  }
  handleClickRotate = () => {
    document.querySelector('.rotate').classList.toggle('rotateOn');
    document.querySelector('.rotateButton').classList.toggle('white');
  }
  render() {
    return (
      <div className="app">
        <span className="app__title">React CSS Transition Demos</span>
        <div className="app__buttons">
          <span className="app__button big-button springreen" onClick = {this.handleClickAll}>Activate all</span>
          <div className="app__row-buttons">
            <span className="app__button red opacityButton" onClick = {this.handleClickOpacity}>Fade in/out</span>
            <span className="app__button darkturquoise slideButton" onClick = {this.handleClickSlide}>Slide in/out</span>
            <span className="app__button yellow slideUpButton" onClick = {this.handleClickSlideUp}>Slide up/down</span>
            <span className="app__button darkviolet slideOutButton" onClick = {this.handleClickSlideOut}>Slide around</span>
            <span className="app__button azure heightButton" onClick = {this.handleClickHeight}>Height in/out</span>
            <span className="app__button tomato widthButton" onClick = {this.handleClickWidth}>Width in/out</span>
            <span className="app__button fuchsia sizeButton" onClick = {this.handleClickSize}>Size in/out</span>
            <span className="app__button green rotateButton" onClick = {this.handleClickRotate}>Rotate in/out</span>
          </div>
        </div>
        <div className="app__blocks">
          <div className="app__block red opacity" onClick = {this.handleClickOpacity}><span className="app__icon"><GiAstronautHelmet /></span></div>
          <div className="app__block darkturquoise slide" onClick = {this.handleClickSlide}><span className="app__icon"><GiGargoyle /></span></div>
          <div className="app__block yellow slideUp" onClick = {this.handleClickSlideUp}><span className="app__icon"><GiLighthouse /></span></div>
          <div className="app__block darkviolet slideOut" onClick = {this.handleClickSlideOut}><span className="app__icon"><GiPiranha /></span></div>
          <div className="app__block azure height" onClick = {this.handleClickHeight}><span className="app__icon"><GiPolarBear /></span></div>
          <div className="app__block tomato width" onClick = {this.handleClickWidth}><span className="app__icon"><GiRingingAlarm /></span></div>
          <div className="app__block fuchsia size" onClick = {this.handleClickSize}><span className="app__icon"><GiSinagot /></span></div>
          <div className="app__block green rotate" onClick = {this.handleClickRotate}><span className="app__icon"><GiWaveSurfer /></span></div>
        </div>
      </div>
    );
  }
}

export default App;
