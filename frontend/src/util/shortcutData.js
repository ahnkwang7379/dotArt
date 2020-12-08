export const initShortcut = {
  keySet: [
    { action: 'DOT', key: 'q', code: 'KeyQ', helpText: 'Pen tool' },
    { action: 'BUCKET', key: 'b', code: 'KeyB', helpText: 'Bucket tool' },
    { action: 'PIKCER', key: 'p', code: 'KeyP', helpText: 'Color picker tool' },
    { action: 'ERASER', key: 'e', code: 'KeyE', helpText: 'Eraser tool' },
    { action: 'MOVE', key: 'm', code: 'KeyM', helpText: 'Move tool' },
    {
      action: 'SWAP',
      key: 'x',
      code: 'KeyX',
      helpText: 'Swap first/second Color',
    },
    {
      action: 'PALETTE_UP',
      key: 'w',
      code: 'KeyW',
      helpText: 'Select palette move up',
    },
    {
      action: 'PALETTE_DOWN',
      key: 's',
      code: 'KeyS',
      helpText: 'Select palette move down',
    },
    {
      action: 'PALETTE_LEFT',
      key: 'a',
      code: 'KeyA',
      helpText: 'Select palette move left',
    },
    {
      action: 'PALETTE_RIGHT',
      key: 'd',
      code: 'KeyD',
      helpText: 'Select palette move right',
    },
    { action: 'UNDO', key: 'ctrl + z', code: '$mod+KeyZ', helpText: 'Undo' },
    {
      action: 'REDO',
      key: 'ctrl + shift + z',
      code: '$mod+Shift+KeyZ',
      helpText: 'Redo',
    },
    {
      action: 'INCREASE_COLUMN',
      key: 'ctrl + arrowRight',
      code: '$mod+ArrowRight',
      helpText: 'Column + 1',
    },
    {
      action: 'DECREASE_COLUMN',
      key: 'ctrl + arrowLeft',
      code: '$mod+ArrowLeft',
      helpText: 'Column - 1',
    },
    {
      action: 'INCREASE_ROW',
      key: 'ctrl + arrowDown',
      code: '$mod+ArrowDown',
      helpText: 'Row + 1',
    },
    {
      action: 'DECREASE_ROW',
      key: 'ctrl + arrowUp',
      code: '$mod+ArrowUp',
      helpText: 'Row - 1',
    },
    {
      action: 'INCREASE_DOTSIZE',
      key: '-',
      code: 'Equal',
      helpText: 'Increase dot size',
    },
    {
      action: 'DECREASE_DOTSIZE',
      key: '+',
      code: 'Minus',
      helpText: 'Decrease dot size',
    },
    {
      action: 'MOVE_VIEWPORT_UP',
      key: 'shift + arrowUp',
      code: 'Shift+ArrowUp',
      helpText: 'Move viewport up',
    },
    {
      action: 'MOVE_VIEWPORT_RIGHT',
      key: 'shift + arrowRight',
      code: 'Shift+ArrowRight',
      helpText: 'Move viewport right',
    },
    {
      action: 'MOVE_VIEWPORT_DOWN',
      key: 'shift + arrowDown',
      code: 'Shift+ArrowDown',
      helpText: 'Move viewport down',
    },
    {
      action: 'MOVE_VIEWPORT_LEFT',
      key: 'shift + arrowLeft',
      code: 'Shift+ArrowLeft',
      helpText: 'Move viewport left',
    },
  ],
};
