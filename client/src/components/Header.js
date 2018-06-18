import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Feedback
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/surveys">Login With Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
