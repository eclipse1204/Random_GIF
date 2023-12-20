import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {

  function clickHandler()
  {
    fetchData();
  }
  
  const {gif,loading,fetchData}=useGif();

  return (
    <div className='w-1/2 flex flex-col items-center gap-y-5 bg-green-500 rounded-lg border border-black mt-[15px]'>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>
        {
            loading? (<Spinner></Spinner>):(<img src={gif} width="450" />)
        }
        <button className='w-10/12 mb-[20px] bg-[#D7EDDB] text-lg py-2 rounded-lg' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random;