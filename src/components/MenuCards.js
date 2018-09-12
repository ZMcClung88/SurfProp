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
      <div style={this.props.style}>
        <Card onClick={this.onBuyClick} style={this.props.style}>
          <CardImg top width="auto" src={this.props.src} alt="Card image cap" />
          <CardBody style={{ height: '30px', border: 'none' }}>
            <CardTitle style={{ textAlign: 'center', marginTop: '-15%' }}>{this.props.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withRouter(MenuCards);
