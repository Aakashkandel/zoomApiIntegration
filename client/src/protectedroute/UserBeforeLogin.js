import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/assets/css/loader.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadtoken } from '../features/reducers/TokenSetSlice';
export default function UserBeforeLogin(props) {
  const { Component } = props;
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [loading, setLoading] = useState(true);
  const token=localStorage.getItem('token')
  


  


  useEffect(() => {
   
    if (token==null||!token) {
      navigate('/login'); 
    } else {
      setLoading(false); 
    }
  }, [token, navigate]);

  if (loading) {
    return (
      <>
  <div className="bg-gray-300 bg-opacity-50 flex h-screen justify-center items-center">
  
    <div className="loader opacity-100"></div>
  </div>
</>

    )
  }

  return (
    <div>
      <Component /> 
    </div>
  );
}
