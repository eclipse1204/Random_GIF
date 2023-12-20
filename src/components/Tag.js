import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

function Tag() {

  const [tag,setTag]=useState('car');

  function clickHandler()
  {
    fetchData(tag);
  }

  function changeHandler(event)
  {
    setTag(event.target.value);
  }

  const {gif,loading,fetchData}=useGif(tag);

  return (
    <div className='w-1/2 flex flex-col items-center gap-y-5 bg-blue-500 rounded-lg border border-black mt-[15px]'>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {tag} Gif</h1>
        {
            loading? (<Spinner></Spinner>):(<img src={gif} width="450" />)
        }
        <input className='w-10/12 text-lg py-2 rounded-lg mb-[-11px] text-center' onChange={changeHandler} type="text" value={tag}/>
        <button className='w-10/12 mb-[20px] bg-[#D7EDDB] text-lg py-2 rounded-lg' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag;