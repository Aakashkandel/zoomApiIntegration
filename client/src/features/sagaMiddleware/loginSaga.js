import{put,call,takeEvery, take} from 'redux-saga/effects'
import { onFetchSuccess,onLoad,onFetchError } from '../reducers/Login';
import { toast } from 'react-toastify';
import axios from '../../api/index'

const fetchingdata=async(userData)=>{
    try{
        
        const response = await axios.post('/login', userData);
        return response.data;
    }
    catch(error){
        throw new Error(error.response?.data?.message);

    }

}

function* Working(action) {  
    console.log("this is fetching data",action.payload);
    const {navigate}=action.payload;
    try{
        yield put(onLoad());
        const response=yield call(fetchingdata,action.payload)
        localStorage.setItem('token',response.token )
        console.log(response.token)
        yield put(onFetchSuccess(response))
        setTimeout(() => {
            
            toast.success("Login successfully");
        }, 10);
        navigate('/')
    }
   catch (error) {
    yield put(onFetchError(error.message));
    setTimeout(()=>{
      toast.error(error.mesage);
     },10)    
      
  }

}
function* watchLoginUser(){
    yield takeEvery('login/loginUser',Working)
}

export default watchLoginUser;