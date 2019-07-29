import {countBy, pipe, propOr, toLower} from "ramda";

const getNumXs = pipe(
  countBy(toLower),
  propOr(0, 'x')
);

export const genInitialValues = (page) => ({
  choices: page.images,
  actualNumXs: getNumXs(page.letters)
});

export const setSelection = (image, decisionTime) => ({
  type: 'selection',
  data: { image, decisionTime },
});

export const setExitQuestions = (numberOfXs) => ({
  type: 'exit-questions',
  data: { numberOfXs }
});

const reducer = (state, action) => {
  switch(action.type) {
    case 'selection':
      return { ...state, selection: action.data };
    case 'exit-questions':
      return { ...state, exitQuestions: action.data };
    default:
      return state;
  }
};

export default reducer;
