import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../api/index';  
import { onLoad, onFetchSuccess, onFetchError, onFetchMessage } from '../reducers/RegisterSlice';
import { toast } from 'react-toastify';




  const registerUser = async (userData) => {
    
  try {
    const response = await axios.post('/register', userData);
    return response.data;  
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

function* registerSaga(action) {
  console.log("registerSaga called with", action.payload); 
  const {navigate}=action.payload

  try {
    yield put(onLoad());
    

    const response = yield call(registerUser,action.payload);

    const {  message } = response;
   
   navigate('/login');
   setTimeout(()=>{
    toast.success(message);
   },10)    
    yield put(onFetchMessage(message));  

  
  ;

    

    } catch (error) {
      yield put(onFetchError(error.message));
      setTimeout(()=>{
        toast.error(error.mesage);
      },10)    
        yield put(onFetchMessage(error.message));  
    }
}

function* watchRegisterUser() {
  yield takeEvery('register/registerUser', registerSaga); 
}

export default watchRegisterUser;
