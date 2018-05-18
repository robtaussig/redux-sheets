export const GENERATE_LAYOUT = 'GENERATE_LAYOUT';
export const SET_COLUMN_WIDTH = 'SET_COLUMN_WIDTH';

export const generateLayout = (data) => {
  return {
    type: GENERATE_LAYOUT,
    payload: data
  };
};

export const setColumnWidth = (columnWidth) => {
  return {
    type: SET_COLUMN_WIDTH,
    payload: columnWidth
  };
};