import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class SocialLinks extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-15px' }}>
        <div
          style={{
            display: 'flex',
            marginTop: '-75px',
            // border: '1px solid #fff',
            width: '75px',
            justifyContent: 'space-around'
          }}
        >
          {/* <h1>Hello</h1> */}
          <div>
            <SocialIcon style={{ height: 25, width: 25 }} color="#fff" url="http://instagram.com/surfprop" />
          </div>

          <div>
            <SocialIcon
              style={{ height: 25, width: 25 }}
              color="#fff"
              network="facebook"
              url="https://www.facebook.com/surfproperty/?fref=mentions"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
