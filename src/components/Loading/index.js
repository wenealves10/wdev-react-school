import React from 'react';
import PropTypes from 'prop-types';
import { Background, Lottie } from './Styled';
import loads from './load.json';

export default function Loading({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loads,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  if (!isLoading) return <></>;
  return (
    <Background>
      <div />
      <Lottie options={defaultOptions} height={400} width={400} />
    </Background>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
