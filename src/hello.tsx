import React from 'react'
import Carousel from 'nuka-carousel';

export default function Hello() {
  return <div>
    <h1>Hello nuka-carousel</h1>
    <Carousel
      className='carousel'
      renderCenterLeftControls={({previousSlide}) => <a className='handle' onClick={previousSlide}>&lt;</a>}
      renderCenterRightControls={({nextSlide}) => <a className='handle' onClick={nextSlide}>&gt;</a>}
    >
      <img src='/images/cat1.jpeg'/>
      <img src='/images/cat2.jpeg'/>
      <img src='/images/cat3.jpeg'/>
      <img src='/images/cat4.jpeg'/>
    </Carousel>
  </div>
};
