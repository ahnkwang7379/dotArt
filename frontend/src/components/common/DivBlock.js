import React from 'react';
import styled from 'styled-components';

const DotStyled = styled.div`
  border: none;
  cursor: cell;
  padding: 0;
  margin: 0 auto;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
`;

const DivBlock = ({
  rowIdx,
  columnIdx,
  onMouseDownHandler,
  onMouseUpHandler,
  onMouseOverHandler,
}) => {
  return (
    <DotStyled
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={(e) => onMouseDownHandler(e, rowIdx, columnIdx)}
      onMouseOver={(e) => onMouseOverHandler(e, rowIdx, columnIdx)}
      onMouseUp={(e) => onMouseUpHandler(e)}
      // onTouchStart={(e) => onMouseDownHandler(e, rowIdx, columnIdx)}
      // onTouchMove={(e) => onTouchMoveHandler(e, dotIdx)}
    />
  );
};

export default DivBlock;
