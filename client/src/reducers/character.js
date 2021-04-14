const characterReducer = (state = { id: 0, name: '', page: 0 }, action) => {
  switch (action.type) {
    case 'CHARACTER_SELECTED':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
export default characterReducer;
