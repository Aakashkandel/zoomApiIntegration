import { call, put, takeEvery } from 'redux-saga/effects';
import { getcatsSuccess, getcatsFailure } from '../DemoSlice'; 

function* demofetch() {
  try {
    const response = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));

    if (!response.ok) {
      throw new Error('Failed to fetch cat breeds');
    }

    const cats = yield response.json();
    
    const responseShorted = cats.slice(0, 10);

    yield put(getcatsSuccess(responseShorted));
  } catch (error) {
    yield put(getcatsFailure(error.message));
  }
}

function* catsaga() {
  yield takeEvery('demo/getcatsFetch', demofetch); 
}

export default catsaga;
