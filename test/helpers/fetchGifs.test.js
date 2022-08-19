import { fetchGifs } from "../../src/helpers/fetchGifs"

describe('Pruebas en Fetch Gifs', () => { 
   
   test('Debe retornar un arreglo de gifs', async() => { 
      
      const gifs = await fetchGifs('batman');

      // console.log(gifs);

      expect(gifs.length).toBeGreaterThan(0);

      expect( gifs[0] ).toEqual({
         id: expect.any(String),
         title: expect.any(String),
         img: expect.any(String)
      })

    })

})