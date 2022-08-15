
import { fetchGifs } from '../helpers/fetchGifs';
import { useFetch } from '../hooks/useFetch';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

   const { gifs, loading } = useFetch(category);
   
   return (
      <>
      {
         loading
         && <h1>LOADING.....</h1>
      }
         <h2>{category.toUpperCase()}</h2>
         <div className='grid'>
            {
               gifs.map( gif=> (
                  <GifGridItem key={gif.id} {...gif} />
               ))
            }
         </div>
      </>
  )
}
