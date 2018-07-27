import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import SocialLinks from './components/SocialLinks';
import Navbar from './components/Navbar';
import Background from './media/bg.jpg';
import Logo from './media/4a8dfe302137ea75d20d9e9e23a46c47_taal-volcano-tagaytay-vacation-house-in-philippines-tagaytay-vacation-house-clipart_2548-1482.svg';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div style={styles.backgroundStyle}>
          {/* <div style={styles.logoStyle} /> */}
          <h1 style={{ fontSize: '66px', letterSpacing: '6px' }}>Coming Soon</h1>
          <p style={{ width: '80%', fontSize: '12', letterSpacing: '1px', textAlign: 'center', lineHeight: '30px' }}>
            Our website is under construciton. we are working very hard to give you the best experience.
          </p>
          <Button outline color="info">
            Subscribe
          </Button>
        </div>
        <SocialLinks />
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
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    letterSpacing: '4px',
    marginBottom: '25px'

    // textTransform: 'uppercase'
  }
};

export default App;
