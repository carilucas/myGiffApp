import { useEffect } from "react";


export const GifGridItem = ({title, id, img}) => {

   const titleTruncate = (title)=>{
      const dots = title.length > 30 ? '...':'';
      return title.substring(0,30) + dots;
   }

   const newTitle = titleTruncate(title)
   

  return (
    <div className="gridItem">
      <img src={ img } alt={ title } />
      <h4>{newTitle}</h4>
      <a href={img} target="_blank" rel="noopener noreferrer">Open Gif</a>
    </div>
  )
}
