import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

  import complainsaga from './sagaMiddleware/complainSaga';
import watchRegisterUser from './sagaMiddleware/RegisterSaga';
import watchLoginUser from './sagaMiddleware/loginSaga';
import WatchComplainRegister from './sagaMiddleware/ComplainRegisterSaga';


import complainReducer from './reducers/HistorySlice';
import registerReducer from './reducers/RegisterSlice';
import catReducer from './reducers/DemoSlice';
import ComplainRegisterReducer from './reducers/ComplainSlice';
import TokenReducer from'./reducers/TokenSetSlice'

import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    complainsaga(),
    watchRegisterUser(),
    watchLoginUser(),
    WatchComplainRegister(),

  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catReducer,
    complain: complainReducer,
    register: registerReducer,
    complainRegister: ComplainRegisterReducer,
    token:TokenReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), 
});

sagaMiddleware.run(rootSaga); 
export default store;
