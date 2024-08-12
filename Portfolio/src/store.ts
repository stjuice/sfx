import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import textsReducer from './behavior/texts/reducer'

const rootReducer = combineReducers({
  texts: textsReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store