import React, { useState } from 'react'
import excelData from "../assets/data.json";
import Swal from 'sweetalert2';

const Main = () => {

  const [uid, setUid] = useState('');

  const handleUid = (e) => {
    setUid(e.target.value);
  }
  
  const searchData = (e) => {
    console.log(excelData, uid)
    const obj = excelData.find((ele) => ele.UID.toString() === uid);
    console.log(obj);

    if (obj) {
      // Display a success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Found!',
        html: `<div class='display-container w-full text-xs'>
        <div class='displat-table border-2 w-full border-black rounded'>
          <div class='row-1 uppercase flex w-full border-b-2 border-black'>
              <div class='w-1/2 border-r-2 font-semibold border-black p-2'><span>UID</span></div>
              <div class='w-1/2 flex justify-center items-centerr py-2'><span>${obj["UID"]}</span></div>
          </div>
          <div class='row-2 uppercase flex w-full border-b-2 border-black'>
              <div class='w-1/2 border-r-2 font-semibold border-black p-2'><span>Name</span></div>
              <div class='w-1/2 flex justify-center items-center py-2'><span>${obj["Name"]}</span></div>
          </div>
          <div class='row-3 uppercase flex w-full border-b-2 border-black'>
              <div class='w-1/2 border-r-2 font-semibold border-black p-2'><span>Calcutta University Roll No</span></div>
              <div class='w-1/2 flex justify-center items-center py-2'><span>${obj["Roll Number"]}</span></div>
          </div>
          <div class='row-4 uppercase flex w-full'>
              <div class='w-1/2 border-r-2 font-semibold border-black p-2'><span>Calcutta University Registration No</span></div>
              <div class='w-1/2 flex justify-center items-center py-2'><span>${obj["University Reg. No."]}</span></div>
          </div>
        </div>
      </div>`
      });
    } else {
      // Display an error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Not Found!',
        text: `UID '${uid}' is not found.`,
      });
    }
    
  };


  return (
    <div id='main' className='flex flex-col justify-center items-center'>
      <h1 className='uppercase text-2xl font-semibold'>Enter your 10-digit UID</h1>
      <div className='flex flex-col gap-4 items-center my-9'>

        <input type="text" value={uid} onChange={handleUid} name="uid" id="uid" placeholder='Type here...' className='text-center border-2 px-4 py-2 rounded-md outline-none border-slate-400 w-[300px]' autoFocus />

        <button onClick={searchData} className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium '>Check</button>
      </div>

  
    </div>
  )
}

export default Main
