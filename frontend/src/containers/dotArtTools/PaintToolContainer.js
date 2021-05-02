import React, { useCallback } from 'react';
import { changePaintTool } from '../../modules/paintTool';
import PaintTool from '../../components/dotArtTools/PaintTool';
import RedoUndo from '../../components/dotArtTools/RedoUndo';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { clearFakeDotArt } from '../../modules/index';

const PaintToolContainer = () => {
  const dispatch = useDispatch();
  const { selectedPaintTool } = useSelector(({ paintTool }) => ({
    selectedPaintTool: paintTool.selectedPaintTool,
  }));
  const { paintToolsShortcuts } = useSelector(({ keybind }) => ({
    paintToolsShortcuts: keybind.paintTools,
  }));
  const { redoundoShortcuts } = useSelector(({ keybind }) => ({
    redoundoShortcuts: keybind.misc,
  }));

  const onChangePaintTool = useCallback(
    (paintTool) => dispatch(changePaintTool(paintTool)),
    [dispatch],
  );
  const redoHandle = useCallback(() => {
    dispatch(ActionCreators.redo());
    dispatch(clearFakeDotArt());
  }, [dispatch]);
  const undoHandle = useCallback(() => {
    dispatch(ActionCreators.undo());
    dispatch(clearFakeDotArt());
  }, [dispatch]);

  const RedoUndoComponent = () => {
    return (
      <RedoUndo
        redoundoShortcuts={redoundoShortcuts}
        redoHandle={redoHandle}
        undoHandle={undoHandle}
      />
    );
  };

  return (
    <div>
      <PaintTool
        paintToolsShortcuts={paintToolsShortcuts}
        selectedPaintTool={selectedPaintTool}
        onChangePaintTool={onChangePaintTool}
        RedoUndoComponent={RedoUndoComponent}
      />
    </div>
  );
};

export default PaintToolContainer;
