import React, { useState } from 'react';
import axios from '../api/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

export default function Complain() {
 const dispatch=useDispatch();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    type: '',
    uploadfile: null,  
    message: '',
    advice: ''
  });


  const submithandler = async (e) => {

    e.preventDefault(); 
    const { type, uploadfile, message, advice } = formData;
    console.log(uploadfile);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('type', type);
    formDataToSubmit.append('message', message);
    formDataToSubmit.append('advice', advice);

    
    if (uploadfile) {
      formDataToSubmit.append('uploadfile', uploadfile);
    }

    
    dispatch({
      type: 'complainregister', 
      payload: { 
        complainData: formDataToSubmit, 
        navigate: navigate 
      }
    });
    
  };

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files,  
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <div className="mt-10">
        <ToastContainer/>
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Complain on related field or Types
        </h2>

        <div className="mt-2 bg-gray-100 shadow-lg rounded-xl p-5 max-w-md mx-auto">
          <div>
            <form onSubmit={submithandler}>
              <div>
                <div>
                  <select
                    name="type"
                    onChange={onChange}
                    value={formData.type}
                    className="complaint-select block w-full rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-blue-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="">Please select complaint type</option>
                    <option value="Politics">Politics</option>
                    <option value="Public">Public</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>

                <div className="max-w-md rounded-lg bg-white p-6 shadow-lg mt-4 mb-2">
                  <label
                    htmlFor="uploadfile"
                    className="mb-2 block text-lg font-semibold text-gray-700"
                  >
                    Upload (Image/Video):
                  </label>
                  <input
                    type="file"
                    name="uploadfile"
                    id="uploadfile"
                    onChange={onChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="max-w-md rounded mb-2">
                  <div className="text-lg font-bold text-gray-700">Message</div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    className="w-full text-gray-500 font-semibold rounded p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>

                <div className="max-w-md rounded mb-2">
                  <div className="text-lg font-bold text-gray-700">Advice for solution</div>
                  <textarea
                    name="advice"
                    value={formData.advice}
                    onChange={onChange}
                    className="w-full rounded p-4 text-gray-500 font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-indigo-500"
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>

                <div className="max-w-md">
                  <button
                    type="submit"
                    className="bg-blue-600 text-gray-100 font-bold w-full p-1 rounded cursor-pointer"
                  >
                    Complain Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
