import firebase from 'firebase';
import * as EmailValidator from 'email-validator';
import React, { Component } from 'react';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import config from '../config';

class SubscribeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      showAlert: false
    };
  }

  componentDidMount() {
    firebase.initializeApp(config);

    firebase.auth().signInAnonymously();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.watchClick, false);
  }

  watchClick = e => {
    if (this.node.contains(e.target)) {
      return;
    } else {
      this.setState({
        modal: false
      });
    }
  };

  handleClick = () => {
    this.setState({ showAlert: false });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        // const isAnonymous = user.isAnonymous;
        if (EmailValidator.validate(this.state.email)) {
          this.setState({
            modal: false
          });

          const uid = user.uid;
          console.log(uid);
          const ref = firebase.database().ref(`users/${uid}`);
          ref.push({ email: this.state.email });
        } else {
          console.log(EmailValidator.validate(this.state.email));
          this.setState({ showAlert: true });
        }

        //   .push(this.state.email);
        // var userRef = firebase.database();
        // var useridRef = userRef.child(app.userid);
        // useridRef.set({
        //   locations: '',
        //   theme: '',
        //   colorScheme: '',
        //   food: ''
        // });

        // ...
      } else {
        // User is signed out.
        // ...
        console.log('else');
      }
      // ...
    });

    firebase.auth().signInAnonymously();
  };

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

  showAlert = () => {
    if (this.state.showAlert === true) {
      return (
        <div container="fluid">
          <Alert text-center style={{ marginTop: 5, height: 50 }} color="danger">
            <p>Please enter a valid email</p>
          </Alert>
        </div>
      );
    }
  };

  // handleClick = () => {
  //   console.log('state', this.state.modal);
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // };

  render() {
    const externalCloseBtn = (
      <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <div ref={node => (this.node = node)}>
        <Button outline color="info" onClick={this.toggle}>
          Subscribe
        </Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader style={{ textTransform: 'uppercase' }}>Subscribe via email</ModalHeader>
          <ModalBody>
            <input
              onChange={this.emailChange}
              type="email"
              placeholder="Email"
              style={{ width: '100%', height: '36px', paddingLeft: '5px', marginTop: '5px' }}
            />
            {this.showAlert()}
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={this.handleClick} color="primary">
              Subscribe
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SubscribeButton;
