export const home = (selected) => {
  return {
    type: 'HOME',
    selected: selected,
  };
};

export const gameNumber = (payload) => {
  return {
    type: 'GAME_NUMBER',
    payload, // 유저가 뽑은 뽑기게임 숫자
  };
};

export const gameDescription = (payload) => {
  return {
    type: 'GAME_DESCRIPTION',
    payload, // 유저가 뽑은 뽑기게임 숫자 관련 설명
  };
};

export const gamePage = (payload) => {
  return {
    type: 'GAME_PAGE',
    payload, //게임 페이지 현재 페이지 번호
  };
};

export const gameSelected = (payload) => {
  return {
    type: 'GAME_SELECTED',
    payload, //뽑기게임 전체보기 페이지에서 유저가 선택한 사진에 해당하는 정보
  };
};

export const testUserName = (name) => {
  return {
    type: 'TEST_USERNAME',
    name,
  };
};
export const testPage = (payload) => {
  return {
    type: 'TEST_PAGE',
    payload,
  };
};

export const testOverdoseCount = (number) => {
  return {
    type: 'TEST_OVERDOSECOUNT',
    number,
  };
};

export const testSurveyNumber = (number) => {
  return {
    type: 'TEST_SURVEYNUMBER',
    number,
  };
};
