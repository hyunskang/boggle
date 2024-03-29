import {
  DISPLAY_RESULT, UPDATE_INPUT
} from '../actions/game';

import {
  SELECT_DICE
} from '../actions/board';

import {
  CLEAR_STATE
} from '../actions/main';

export default function game(state={
  points: 0,
  inputValue: '',
  correctWords: [],
  incorrectWords: []
}, action) {
  switch (action.type) {
    case DISPLAY_RESULT:
      if (action.payload.valid) {
       return Object.assign({}, state, {
         correctWords: [...state.correctWords, action.payload.word],
         points: state.points + action.payload.points,
         inputValue: ''
       });
      } else {
        return Object.assign({}, state, {
          incorrectWords: [...state.incorrectWords, action.payload.word],
          points: state.points + action.payload.points,
          inputValue: ''
        });
      }
    case UPDATE_INPUT:
      return Object.assign({}, state, {
        inputValue: action.payload
      });
    case SELECT_DICE:
      return Object.assign({}, state, {
        inputValue: state.inputValue + action.payload.value
      });
    case CLEAR_STATE:
      return Object.assign({}, state, {
        points: 0,
        inputValue: '',
        correctWords: [],
        incorrectWords: []
      });
    default:
      return state;
  }
}
