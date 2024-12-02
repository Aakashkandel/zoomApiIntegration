import { put, call, takeEvery } from 'redux-saga/effects';
import { onFetchSuccess, onLoad } from '../reducers/ComplainSlice';
import { toast } from 'react-toastify';
import axios from '../../api/index';

const fetchingData = async (complainData) => {
  try {
    const response = await axios.post('/complainregister', complainData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Unable to register complain");
  }
};

function* Working(action) {
  const { complainData, navigate } = action.payload;
  try {
    yield put(onLoad());
    const response = yield call(fetchingData, complainData);

    yield put(onFetchSuccess(response));

    setTimeout(() => {
      toast.success(response.message);
       
    }, 10);
    navigate('/history'); 
   
  } catch (error) {
    toast.error(error.message);
  }
}

function* WatchComplainRegister() {
  yield takeEvery('complainregister', Working);
}

export default WatchComplainRegister;
