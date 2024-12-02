  import { call, put, takeEvery } from 'redux-saga/effects';
  import axios from '../../api/index';
  import { getcomplainSuccess, getcomplainError } from '../reducers/HistorySlice';

  function* working() {
    try {
      const response = yield call(axios.get , '/fetchcomplainuser'); 
      yield put(getcomplainSuccess(response.data));
    } catch (error) {
      yield put(getcomplainError(error.message));
    }
  }

  function* complainsaga() {
    yield takeEvery('complain/getcomplainFetch', working);
  }

  export default complainsaga;
