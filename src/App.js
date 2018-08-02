import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Spinner from 'react-spinkit';

import './App.css';
import SocialLinks from './components/SocialLinks';
import SubscribeButton from './components/SubscribeButton';
// import LoginForm from './components/LoginForm';
// import Navbar from './components/Navbar';
import Background from './media/bg.jpg';
import Logo from './media/4a8dfe302137ea75d20d9e9e23a46c47_taal-volcano-tagaytay-vacation-house-in-philippines-tagaytay-vacation-house-clipart_2548-1482.svg';
// import config from './config';
import MediaQuery from 'react-responsive';

const config = {
  apiKey: 'AIzaSyC8SqgnNwzMufdXxzq5gfMrDHpbXp56X5E',
  authDomain: 'surfprop-42da7.firebaseapp.com',
  databaseURL: 'https://surfprop-42da7.firebaseio.com',
  projectId: 'surfprop-42da7',
  storageBucket: 'surfprop-42da7.appspot.com',
  messagingSenderId: '975203789447'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      uid: '',
      email: ''
    };
  }

  componentWillMount() {
    // return <Spinner name="double-bounce" />;
  }

  componentDidMount() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(firebaseUser => {
      const { uid } = firebaseUser;

      this.setState({
        uid: uid
      });
      console.log('cheerzz', this.state.uid);
    });
  }
  emailChange = event => {
    let email = this.state.email;

    this.setState({
      email: event.target.value
    });
    // console.log(this.state.email);
  };

  handleClick = () => {
    const currentUser = firebase.auth().signInAnonymously();
    console.log('uzer', currentUser);
    firebase
      .database()
      .ref(`/${currentUser.uid}/email`)
      .push(this.state.email);

    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div style={styles.backgroundStyle}>
          {/* <div style={styles.logoStyle} /> */}
          <MediaQuery query="(min-device-width: 462px)">
            <h1 style={{ fontSize: '66px', letterSpacing: '6px' }}>Coming Soon!</h1>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 461px)">
            <h1 style={{ fontSize: '33px', letterSpacing: '6px' }}>Coming Soon!</h1>
          </MediaQuery>

          <p style={{ width: '80%', fontSize: '12', letterSpacing: '1px', textAlign: 'center', lineHeight: '30px' }}>
            Our website is under construciton. We are working very hard to give you the best experience.
          </p>
          <SubscribeButton uid={this.state.uid} emailChange={this.emailChange} handleClick={this.handleClick} />
        </div>
        <SocialLinks />
        {/* <LoginForm /> */}
      </div>
    );
  }
}

const styles = {
  logoStyle: {
    backgroundImage: `url(${Logo})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 25,
    width: 25
  },
  backgroundStyle: {
    /* The image used */
    backgroundImage: `url(${Background})`,

    /* Full height */
    height: '100vh',

    /* Center and scale the image nicely */
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    mixBlendMode: 'difference',
    letterSpacing: '4px',
    paddingTop: '25px'

    // textTransform: 'uppercase'
  }
};

export default App;
