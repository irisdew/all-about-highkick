const testReducer = (
  state = { page: 1, name: '', overdoseCount: 0, surveyNumber: 1 },
  action,
) => {
  switch (action.type) {
    case 'TEST_PAGE':
      return { ...state, page: action.payload };
    case 'TEST_USERNAME':
      return { ...state, name: action.name };
    case 'TEST_OVERDOSECOUNT':
      return { ...state, overdoseCount: action.number };
    case 'TEST_SURVEYNUMBER':
      return { ...state, surveyNumber: action.number };
    default:
      return state;
  }
};

export default testReducer;
