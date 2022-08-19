
import { fetchGifs } from '../helpers/fetchGifs';
import { useFetch } from '../hooks/useFetch';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ( {category} ) => {

   const { gifs, loading } = useFetch(category);
   
   return (
      <>
      <h2>{category.toUpperCase()}</h2>
      {
         loading && (<h1>......................LOADING...................</h1>)
      }
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

GifGrid.propTypes = {
   category: PropTypes.string.isRequired
}