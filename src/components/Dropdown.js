import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  showMenu = event => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  render() {
    return (
      <div>
        <button
          style={{ border: '1px solid grey', height: '25px', width: '75px', marginLeft: '20%' }}
          onClick={this.showMenu}
        >
          {this.props.title}
        </button>

        {this.state.showMenu ? (
          <div className="menu d-flex flex-column">
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
