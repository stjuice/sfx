import { Reducer } from 'redux';
import { TextAction, TEXTS_REQUESTED } from './actions';
import textsData from '../../resources/Texts.json';

interface TextState {
  [key: string]: string
}

const textsDataTyped: { [key: string]: string } = textsData;

const initialState: TextState = {};

const textsReducer: Reducer<TextState, TextAction> = (state = initialState, action) => {
  switch (action.type) {
    case TEXTS_REQUESTED: {
      const requestedTexts = action.payload.reduce<{ [key: string]: string }>((acc, key) => {
        if (textsDataTyped[key]) {
          acc[key] = textsDataTyped[key];
        }
        return acc;
      }, {});

      return {
        ...state,
        ...requestedTexts,
      };
    }

    default:
      return state;
  }
};

export default textsReducer;
