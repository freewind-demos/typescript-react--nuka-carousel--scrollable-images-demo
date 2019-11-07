import React from 'react'
import Carousel from 'nuka-carousel';

export default function Hello() {
  return <div>
    <h1>Hello nuka-carousel</h1>
    <Carousel
      className='carousel'
      renderCenterLeftControls={(control) => {
        if (control.currentSlide === 0) {
          return null;
        }
        return <a className='handle' onClick={control.previousSlide}>&lt;</a>
      }}
      renderCenterRightControls={(control) => {
        if (control.currentSlide === control.slideCount - 1) {
          return null;
        }
        return <a className='handle' onClick={control.nextSlide}>&gt;</a>
      }}
    >
      <img src='/images/cat1.jpeg'/>
      <img src='/images/cat2.jpeg'/>
      <img src='/images/cat3.jpeg'/>
      <img src='/images/cat4.jpeg'/>
    </Carousel>
  </div>
};
