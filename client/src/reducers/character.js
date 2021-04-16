const characterReducer = (state = { id: 0, name: '', open: false }, action) => {
  switch (action.type) {
    case 'CHARACTER_SELECTED':
      return { ...state, name: action.payload };
    case 'CHARACTER_OPEN':
      return { ...state, open: true };
    case 'CHARACTER_CLOSE':
      return { ...state, open: false };
    default:
      return state;
  }
};
export default characterReducer;
