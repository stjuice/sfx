import { createStore } from '@reduxjs/toolkit'
import { rootReducer } from 'behavior/rootReducer';

const store = createStore(rootReducer);


export default store;