import React, { Component } from 'react';

class SocialLinks extends Component {
  render() {
    return (
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', marginTop: '-100px', color: 'white' }}>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
    );
  }
}

export default SocialLinks;
