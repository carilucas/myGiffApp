import { useState } from "react"

export const SearchComponent = ({onChangeCategory}) => {

   const [searchValue, setSearchValue] = useState('');

   const handleInputChange = ( {target} )=>{
      setSearchValue( target.value );
   }

   const handleSubmit = (e)=>{
      e.preventDefault();
      if (e.target[0].value === '') return;
      onChangeCategory(e.target[0].value);
      setSearchValue('');
   }

  return (
   <>
   <p className="github">Github repository <a href="https://github.com/carilucas/myGiffApp" target="_blank" rel="noopener noreferrer">here</a></p>
   <form onSubmit={ handleSubmit }>
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
