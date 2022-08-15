export const fetchGifs = async( category )=>{
   const apiKey = 'bRWSlDNKQ3bI7tNLcHIv9rqI5kAwGtjr';
   const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
   const {data} = await resp.json();
   const images = data.map( image => (
      {
         title : image.title,
         img: image.images.downsized_medium.url,
         id: image.id
      }
   ))
   return images;
}