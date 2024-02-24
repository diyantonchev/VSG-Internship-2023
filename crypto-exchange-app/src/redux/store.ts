// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

// import reducers from './reducers';
import rootReducer from './reducers'

// const store = createStore(reducers);
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true 
});

export default store;
