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

            width: '75px',
            justifyContent: 'space-around'
          }}
        >
          <div>
            <SocialIcon
              style={{ height: 25, width: 25 }}
              color={this.props.color}
              url="http://instagram.com/surfprop"
            />
          </div>

          <div>
            <SocialIcon
              style={{ height: 25, width: 25 }}
              color={this.props.color}
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
