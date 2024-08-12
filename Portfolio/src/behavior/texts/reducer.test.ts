import type { TextDataType, TextState } from './types';
import { TEXTS_REQUESTED, type TextAction } from './actions';
import textsReducer from './reducer';
import textsData from 'resources/Texts.json';

const textsDataTyped: TextDataType = textsData;

const initialState: TextState = {};

const action = {
  type: TEXTS_REQUESTED,
  payload: ['key1', 'key2']
};

describe('Texts reducer', () => {
  it('should handle' + TEXTS_REQUESTED, () => {
    const expectedState: TextState = {
      key1: textsDataTyped.key1,
      key2: textsDataTyped.key2
    };

    expect(textsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should ignore unknown keys in' + TEXTS_REQUESTED, () => {
    const actionWithUnknownKey: TextAction = {
      type: 'TEXTS_REQUESTED',
      payload: ['unknownKey']
    };

    expect(textsReducer(initialState, actionWithUnknownKey)).toEqual({});
  });

  it('should merge new texts with existing state', () => {
    const initialStateWithText: TextState = { existingKey: 'existingValue' };
    const expectedState: TextState = {
      existingKey: 'existingValue',
      key1: textsDataTyped.key1
    };

    const actionWithMerge: TextAction = {
      type: 'TEXTS_REQUESTED',
      payload: ['key1']
    };

    expect(textsReducer(initialStateWithText, actionWithMerge)).toEqual(expectedState);
  });
});
