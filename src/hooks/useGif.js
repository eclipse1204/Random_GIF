import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useGif(tag) {

  const [gif,setGif]=useState('');  
  const [loading,setLoading]=useState(true);

  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  
  async function fetchData(tag)
  {
    setLoading(true);
    const output=await axios.get(tag?tagMemeUrl:randomMemeUrl);
    const imageSource=output.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData(tag);
  },[])

  return{gif,loading,fetchData};
}

export default useGif;