import React, { useCallback } from 'react';
import ColorPicker from '../../../components/common/ColorPicker';
import { useDispatch } from 'react-redux';
import {
  changeColorLeft,
  changeColorRight,
} from '../../../modules/colorPicker';
import styled from 'styled-components';

const ColorPickerBlock = styled.div`
  display: flex;
`;

const ColorPickerContainer = () => {
  const dispatch = useDispatch();

  const onChangeLeftColor = useCallback(
    (pick) => {
      dispatch(changeColorLeft(pick));
    },
    [dispatch],
  );

  const onChangeRightColor = useCallback(
    (pick) => {
      dispatch(changeColorRight(pick));
    },
    [dispatch],
  );

  return (
    <ColorPickerBlock>
      왼쪽
      <ColorPicker
        backgroundColor="#ffffff"
        onChangeColor={onChangeLeftColor}
      />
    </ColorPickerBlock>
  );
};

export default ColorPickerContainer;