import React from 'react';
import { FaUserLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './Styled';

export default () => (
  <Nav>
    <Link to="/login">
      <FaUserLock size={24} />
    </Link>
    <span>Faça Login</span>
  </Nav>
);
