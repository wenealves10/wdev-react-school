import React from 'react';

import PropTypes from 'prop-types';
import { FaUserGraduate } from 'react-icons/fa';
import { Picture, Photographs } from './styled';

export default function Photograph({ id, url }) {
  if (!id) return <></>;
  return (
    <Picture>
      {url ? <Photographs src={url} /> : <FaUserGraduate size={120} />}
    </Picture>
  );
}

Photograph.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
