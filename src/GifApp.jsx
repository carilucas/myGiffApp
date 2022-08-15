import { useState } from "react"
import { GifGrid, SearchComponent } from "./components/";



export const GifApp = () => {

   const [categories, setCategories] = useState([]);

   const onChangeCategory = (category)=>{
      if( categories.includes( category)) return;
      setCategories([category, ...categories]);
   }


  return (
    <>
      <h1 className="site-header">Search gifs App</h1>
      <div className="container">
         <SearchComponent onChangeCategory={ onChangeCategory } />
         {
            categories.map( category => (
               <GifGrid key={ category } category={ category }/>
            ))
         }
      </div>
    </>
  )
}
