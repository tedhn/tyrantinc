import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({});

  const middlewares = [sagaMiddleware];

  // need more reading before i use this

  // const enhancers = [
  //   createInjectorsEnhancer({
  //     createReducer,
  //     runSaga,
  //   }),
  // ];

  const store = configureStore({
    reducer: rootReducer(),
    middleware: middlewares,
  });

  // sagaMiddleware.run();

  return store;
};

export default configureAppStore;
