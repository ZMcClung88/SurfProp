import React, { Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

class DemoCarousel extends Component {
  render() {
    return (
      // <Carousel showArrows={true} showThumbs={true}>
      //   <div>
      //     <img src="https://picsum.photos/458/354" />
      //     <p className="legend">Legend 1</p>
      //   </div>
      //   <div>
      //     <img src="https://picsum.photos/458/354?random&time=1534642409645" />
      //     <p className="legend">Legend 2</p>
      //   </div>
      //   <div>
      //     <img src="https://picsum.photos/g/458/354" />
      //     <p className="legend">Legend 3</p>
      //   </div>
      // </Carousel>
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          infiniteScroll
          enableHeading
          // media={{
          //   '@media (max-width: 900px)': {
          //     width: '100vw',
          //     height: '100vh'
          //   },
          //   '@media (min-width: 900px)': {
          //     width: '100vw',
          //     height: '100vh'
          //   }
          // }}
        >
          <img
            src="https://picsum.photos/458/354?random&time=1534643979982"
            // alt="Album one"
            data-action="https://facebook.github.io/react/"
          />
          <img
            src="https://picsum.photos/458/354?random&time=1534643995636"
            // alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src="https://picsum.photos/458/354?random&time=1534644009887"
            // alt="Album three"
            data-action="https://doce.cc/"
          />
          <img
            src="https://picsum.photos/458/354?random&time=1534644014920"
            // alt="Album four"
            data-action="http://tw.yahoo.com"
          />
        </Coverflow>
      </StyleRoot>
    );
  }
}

export default DemoCarousel;
