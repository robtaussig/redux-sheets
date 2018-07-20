import { combineReducers, createStore } from 'redux';
import {
  GENERATE_LAYOUT,
  SELECT_CELL,
  UPDATE_SELECTION,
  CHANGE_CELL_VALUE,
  CLICK_HEADER,
} from './actions';

const layout = (state = [], action) => {
  switch (action.type) {
  case GENERATE_LAYOUT:
    return action.payload;

  default:
    return state;
  }
};

const header = (state = [], action) => {
  switch (action.type) {
  case GENERATE_LAYOUT:
    return action.payload[0];    

  default:
    return state;
  }
};

const rows = (state = [], action) => {
  switch (action.type) {
  case GENERATE_LAYOUT:
    return action.payload.slice(1);

  case CHANGE_CELL_VALUE:
    return state.map((row, rowIndex) => {
      if (rowIndex === action.payload.row) {
        return row.map((column, columnIndex) => {
          if (columnIndex === action.payload.column) {
            return action.payload.value;
          } else {
            return column;
          }
        });
      } else {
        return row;
      }
    });

  default:
    return state;
  }
};

const selectedCellRow = (state = false, action) => {
  switch (action.type) {
  case SELECT_CELL:
    return action.payload.row;

  case CLICK_HEADER:
    return false;

  default:
    return state;
  }
};

const selectedCellColumn = (state = false, action) => {
  switch (action.type) {
  case SELECT_CELL:
    return action.payload.column;

  default:
    return state;
  }
};

const selectedCellRowStart = (state = false, action) => {
  switch (action.type) {
  case SELECT_CELL:
    return action.payload.row;

  default:
    return state;
  }
};

const selectedCellRowEnd = (state = false, action) => {
  switch (action.type) {
  case UPDATE_SELECTION:
    return action.payload.rowEnd;

  case CLICK_HEADER:
  case SELECT_CELL:
    return false;

  default:
    return state;
  }
};

const selectedCellColumnStart = (state = false, action) => {
  switch (action.type) {
  case SELECT_CELL:
    return action.payload.column;

  default:
    return state;
  }
};

const selectedCellColumnEnd = (state = false, action) => {
  switch (action.type) {
  case UPDATE_SELECTION:
    return action.payload.columnEnd;

  case CLICK_HEADER:
  case SELECT_CELL:
    return false;
  default:
    return state;
  }
};

const selectedHeader = (state = false, action) => {
  switch (action.type) {
  case CLICK_HEADER:
    return action.payload;
  
  case SELECT_CELL:
    return false;

  default:
    return state;
  }
};

const store = createStore(
  combineReducers({
    layout,
    header,
    rows,
    selectedCellRow,
    selectedCellColumn,
    selectedCellRowStart,
    selectedCellRowEnd,
    selectedCellColumnStart,
    selectedCellColumnEnd,
    selectedHeader,
  })
);

export default store;