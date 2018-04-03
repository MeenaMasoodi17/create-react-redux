import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: '#ffffff'
};

const headerStyle = {
  background: '#673ab7',
  height: '56px',
  textAlign: 'right',
  paddingTop: '8px'
};

const Header = () => (
  <div style={headerStyle}>
    <FlatButton>
      <Link style={linkStyle} to="/">
        Home
      </Link>
    </FlatButton>

    <FlatButton>
      <Link style={linkStyle} to="/about-us">
        About
      </Link>
    </FlatButton>
  </div>
);

export default Header;
