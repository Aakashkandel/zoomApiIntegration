  import { call, put, takeEvery } from 'redux-saga/effects';
  import axios from '../../api/index';
  import { getcomplainSuccess, getcomplainError, getcomplainFetch } from '../reducers/HistorySlice';

  function* working() {
    const token=localStorage.getItem("token");
    try {
      const response = yield call(axios.get , '/fetchcomplainuser',{
        headers: {
          "Content-Type": "application/json",
          "token": token,  
        }
      }); 
      yield put(getcomplainSuccess(response.data));
    } catch (error) {
      yield put(getcomplainError(error.message));
    }
  }

  function* complainsaga() {
    yield takeEvery('complain/getcomplainFetch', working);
  }

  export default complainsaga;
