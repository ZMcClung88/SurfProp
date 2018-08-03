import firebase from 'firebase';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import config from '../config';

class SubscribeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: ''
    };
  }

  componentDidMount() {
    firebase.initializeApp(config);

    firebase.auth().signInAnonymously();
  }

  handleClick = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          modal: false
        });
        console.log(this.state.email);
        // User is signed in.
        // const isAnonymous = user.isAnonymous;

        const uid = user.uid;
        console.log(uid);
        const ref = firebase.database().ref(`users/${uid}`);
        ref.push({ email: this.state.email });

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

  // handleClick = () => {
  //   console.log('state', this.state.modal);
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // };

  render() {
    return (
      <div>
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
