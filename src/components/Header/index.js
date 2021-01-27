import React from 'react';
import { FaHome, FaSignOutAlt, FaUserAlt, FaUserLock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav } from './Styled';
import * as actionsLogin from '../../store/modules/Authentication/actions';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <Nav>
      {!isLoggedIn ? (
        <Link to="/login">
          <FaUserLock size={24} />
          <span>Faça Login</span>
        </Link>
      ) : (
        <>
          <Link to="/">
            <FaHome size={24} />
            <span>Home</span>
          </Link>
          <Link to="/profile/user">
            <FaUserAlt size={24} />
            <span>Usuários</span>
          </Link>
          <Link
            to="/login"
            onClick={() => dispatch(actionsLogin.LoginFailure())}
          >
            <FaSignOutAlt size={24} />
            <span>Logout</span>
          </Link>
        </>
      )}
    </Nav>
  );
}
