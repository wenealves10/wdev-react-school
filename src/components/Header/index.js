import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './Styled';

export default () => (
  <Nav>
    <Link to="/">
      <FaHome size={24} />
    </Link>
    <Link to="/user">
      <FaUserAlt size={24} />
    </Link>
    <Link to="/sign">
      <FaSignInAlt size={24} />
    </Link>
  </Nav>
);
