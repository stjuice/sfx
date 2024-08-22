import { Reducer } from 'redux';
import { TextAction, TEXTS_REQUESTED } from './actions';
import textsData from 'resources/Texts.json';
import type { TextDataType, TextState } from './types';

const textsDataTyped: TextDataType = textsData;

const initialState: TextState = {};

const textsReducer: Reducer<TextState, TextAction> = (state = initialState, action) => {
  switch (action.type) {
    case TEXTS_REQUESTED: {
      const requestedTexts = action.payload.reduce<TextState>((acc, key) => {
        if (textsDataTyped[key]) {
          let text = textsDataTyped[key];

          if (Array.isArray(text))
            text = text.join(' ');

          acc[key] = text;
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
