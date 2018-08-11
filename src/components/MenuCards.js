import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class MenuCards extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '150px', height: '100px' }}>
          <CardImg
            top
            width="auto"
            height="70%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
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

export default MenuCards;
