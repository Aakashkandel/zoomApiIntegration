import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getcomplainFetch, resetComplainData } from '../features/reducers/HistorySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function History() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(resetComplainData());
        dispatch(getcomplainFetch());
    }, [dispatch]);

    const complain = useSelector((state) => state.complain.complains);


    console.log(complain);

    return (
        <div>
            <div class="text-2xl font-bold text-gray-700 text-center">List of Complain </div>
            <ToastContainer/>
            
            {
                complain.map((com,index) => (
                    <div class="flex justify-around p-5 m-2 rounded-lg ring-2 ring-gray-400">
                        <div>{index+1}</div>
                        <div>{com.user.firstname} {com.user.lastname}</div>
                        <div>{new Date(com.createdAt).toLocaleDateString()}</div>

                        <div class="flex justify-around space-x-2  ">
                            <button class="bg-gray-300 px-4 py-1 rounded-lg  hover:bg-gray-200">View</button>
                            <button class="bg-red-600  text-white p-2 font-semibold px-4 py-1 rounded-lg  hover:bg-red-400">Remove</button>
                            <div class=" px-4 py-1 rounded-lg ">No Action</div>
                        </div>
                    </div>

                ))

            }
        </div>
    );
}
