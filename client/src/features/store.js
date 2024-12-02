import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
//saga
import complainsaga from './sagaMiddleware/complainSaga';
import watchRegisterUser  from './sagaMiddleware/RegisterSaga'
import watchLoginUser from './sagaMiddleware/loginSaga'
import WatchComplainRegister from './sagaMiddleware/ComplainRegisterSaga';

//redux
import complainReducer from './reducers/HistorySlice'
import registerReducer from './reducers/RegisterSlice'
import catReducer from './reducers/DemoSlice';
import ComplainRegisterReducer from'./reducers/ComplainSlice';



const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catReducer,
    complain:complainReducer,
    register:registerReducer,
    complainRegister:ComplainRegisterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), 
});

sagaMiddleware.run(complainsaga); 
sagaMiddleware.run(watchRegisterUser);
sagaMiddleware.run(watchLoginUser);
sagaMiddleware.run(WatchComplainRegister);
export default store;
