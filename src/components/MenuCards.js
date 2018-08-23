import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class MenuCards extends Component {
  onBuyClick = e => {
    e.preventDefault();
    this.props.history.push('/properties');
  };

  onBuyClick = e => {
    e.preventDefault();
    this.props.history.push('/properties');
  };

  onBuyClick = e => {
    e.preventDefault();
    this.props.history.push('/properties');
  };

  render() {
    return (
      <div>
        <Card onClick={this.onBuyClick} style={{ width: '150px', height: '100px' }}>
          <CardImg top width="auto" height="70%" src={this.props.src} alt="Card image cap" />
          <CardBody style={{ height: '30px', border: 'none' }}>
            <CardTitle style={{ textAlign: 'center', marginTop: '-15%' }}>{this.props.title}</CardTitle>
            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            {/* <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText> */}
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withRouter(MenuCards);
