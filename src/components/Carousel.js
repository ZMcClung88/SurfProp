import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
// import Carousel from 'react-responsive-carousel';

import BernardImg from '../media/bernard-hermant-607741-unsplash.jpg';
import ArminImg from '../media/armin-djuhic-609206-unsplash.jpg';
import JasonImg from '../media/jason-briscoe-332507-unsplash.jpg';
import DerekImg from '../media/derek-thomson-274245-unsplash.jpg';
import JoleneImg from '../media/jolene-hardy-18952-unsplash.jpg';

const items = [
  {
    src: `${BernardImg}`,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: `${ArminImg}`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: `${JasonImg}`,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: `${DerekImg}`,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: `${JoleneImg}`,
    altText: 'Slide 5',
    caption: 'Slide 5'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
          <img style={{ height: '50vh', width: '100%' }} src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Example;
