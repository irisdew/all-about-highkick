const gameReducer = (
  state = { number: 0, description: '', page: 0 },
  action,
) => {
  switch (action.type) {
    case 'GAME_NUMBER':
      return { ...state, number: action.payload };
    case 'GAME_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'GAME_PAGE':
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
export default gameReducer;
