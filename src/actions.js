export const GENERATE_LAYOUT = 'GENERATE_LAYOUT';

export const generateLayout = (data) => {
  return {
    type: GENERATE_LAYOUT,
    payload: data
  };
};