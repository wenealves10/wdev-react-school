import React from 'react';
import { FaHome, FaSignOutAlt, FaUserAlt, FaUserLock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Nav } from './Styled';
import history from '../../services/history';
import * as actionsLogin from '../../store/modules/Authentication/actions';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actionsLogin.LoginFailure());
    toast.success('Usuário Deslogado com sucesso!', {
      toastId: 'logout',
    });
    history.push('/login');
  };

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
            <span>Perfil</span>
          </Link>
          <Link to="/logout" onClick={handleLogout}>
            <FaSignOutAlt size={24} />
            <span>Logout</span>
          </Link>
        </>
      )}
    </Nav>
  );
}
