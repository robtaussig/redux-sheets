export const GENERATE_LAYOUT = 'GENERATE_LAYOUT';
export const SELECT_CELL = 'SELECT_CELL';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';
export const CHANGE_CELL_VALUE = 'CHANGE_CELL_VALUE';

export const generateLayout = (data) => ({
  type: GENERATE_LAYOUT,
  payload: data,
});

export const selectCell = (row, column) => ({
  type: SELECT_CELL,
  payload: {
    row, column,
  }
});

export const changeCellValue = (row, column, value) => ({
  type: CHANGE_CELL_VALUE,
  payload: {
    row, column, value,
  },
});

export const updateSelection = (rowEnd, columnEnd) => ({
  type: UPDATE_SELECTION,
  payload: {
    rowEnd, columnEnd,
  }
});