import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './styled';

export default function Forms({ children }) {
  return <Form>{children}</Form>;
}

Forms.propTypes = {
  children: PropTypes.element.isRequired,
};
