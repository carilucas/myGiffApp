import { useState } from "react";

import  PropTypes from 'prop-types';

export const SearchComponent = ({onChangeCategory}) => {

   const [searchValue, setSearchValue] = useState('');

   const handleInputChange = ( {target} )=>{
      setSearchValue( target.value );
   }

   const handleSubmit = (e)=>{
      e.preventDefault();
      if (searchValue.trim() <= 1) return;
      onChangeCategory( searchValue.trim() );
      setSearchValue('');
   }

  return (
   <>
   <p className="github">Github repository <a href="https://github.com/carilucas/myGiffApp" target="_blank" rel="noopener noreferrer">here</a></p>
   <form onSubmit={ handleSubmit } aria-label="form">
      <input 
         type="text" 
         name="" 
         id=""
         value={ searchValue }
         onChange ={ handleInputChange }
         placeholder="Search a gif"
      />
   </form>
   </>
  )
}


SearchComponent.propTypes = {
   onChangeCategory : PropTypes.func.isRequired
}