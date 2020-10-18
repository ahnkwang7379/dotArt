import React from 'react';
import { keyframes } from 'styled-components';
// import randomString from '../utils/random';

const Animation = (props) => {
  const { boxShadow, duration, name } = props;
  //   const keyframeName = name !== undefined ? name : 'test';
  const keyframeName = 'PreviewAnimation';
  const keyframeRules = keyframes`${boxShadow}`.rules;
  const style = {
    position: 'absolute',
    animation: `x ${duration}s infinite`,
    animationName: keyframeName,
  };
  const animString = `@keyframes ${keyframeName} {${keyframeRules}}`;
  return (
    <div>
      <div className="animation-container" style={style} />
      <style>{animString}</style>
    </div>
  );
};

export default Animation;
