// import rootSlice from "./rootSlice";
// import {combineReducers} from "redux";
// import {configureStore} from '@reduxjs/toolkit'

// const reducer = combineReducers({
//     root:rootSlice
// })

// const store=configureStore({
//     reducer,
// })

// export default store;




// import { combineReducers } from 'redux';
// import rootReducer from './reducers'; // Assuming you have a rootReducer

// const rootReducer = combineReducers({
//   root: rootReducer, // your slice reducer
// });

// export type RootState = ReturnType<typeof rootReducer>; // This gives the full type of your store
// export default rootReducer;


// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootSlice'; // Update with your reducer path

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

