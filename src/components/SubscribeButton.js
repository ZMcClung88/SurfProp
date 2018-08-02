import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SubscribeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: ''
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  emailChange = event => {
    let email = this.state.email;

    this.setState({
      email: event.target.value
    });
    // console.log(this.state.email);
  };

  handleClick = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button outline color="info" onClick={this.toggle}>
          Subscribe
        </Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader style={{ textTransform: 'uppercase' }} toggle={this.toggle}>
            Subscribe via email
          </ModalHeader>
          <ModalBody>
            <input
              onChange={this.props.emailChange}
              type="email"
              placeholder="Email"
              style={{ width: '100%', height: '36px', paddingLeft: '5px', marginTop: '5px' }}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={this.props.handleClick} color="primary">
              Subscribe
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SubscribeButton;
