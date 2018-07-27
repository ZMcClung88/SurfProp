import React, { Component } from 'react';
import Logo from '../media/4a8dfe302137ea75d20d9e9e23a46c47_taal-volcano-tagaytay-vacation-house-in-philippines-tagaytay-vacation-house-clipart_2548-1482.svg';

class Navbar extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <div style={styles.logoStyle} />
        {/* <h3>Test test test</h3> */}
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
  }
};

export default Navbar;
