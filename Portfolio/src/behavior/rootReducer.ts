import { combineReducers } from "@reduxjs/toolkit";
import textsReducer from "./texts/reducer";

export const rootReducer = combineReducers({
    texts: textsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;