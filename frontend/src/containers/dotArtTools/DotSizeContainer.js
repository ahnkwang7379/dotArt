import React, { useCallback } from 'react';
import DotSizeChanger from '../../components/dotArtTools/DotSizeChanger';
import { changeDotSize, changeBackgroundColor } from '../../modules/observer';
import { useDispatch, useSelector } from 'react-redux';

const DotSizeContainer = () => {
  const dispatch = useDispatch();
  const { dotSize, backgroundColor } = useSelector(({ observer }) => ({
    dotSize: observer.dotSize,
    backgroundColor: observer.backgroundColor,
  }));

  const onChangeDotSize = useCallback(
    (e, newValue) => {
      dispatch(changeDotSize(newValue));
    },
    [dispatch],
  );

  const onChangeBackgroundColor = useCallback(
    (pick) => {
      dispatch(changeBackgroundColor(pick));
    },
    [dispatch],
  );

  return (
    <React.Fragment>
      <DotSizeChanger
        dotSize={dotSize}
        backgroundColor={backgroundColor}
        onChangeDotSize={onChangeDotSize}
        onChangeBackgroundColor={onChangeBackgroundColor}
      />
    </React.Fragment>
  );
};

export default DotSizeContainer;