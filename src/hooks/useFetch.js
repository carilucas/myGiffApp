import React, { useEffect, useState } from 'react';
import { fetchGifs } from "../helpers/fetchGifs";



export const useFetch = (category) => {
   const [gifs, setGifs] = useState([]);
   const [loading, setLoading] = useState(true);

   const getGifs = async()=>{
      setGifs( await fetchGifs( category ) );
      setLoading(false);
   }
   
   useEffect(() => {
   
      getGifs();
     
   }, []);

   return { gifs, loading }
}
