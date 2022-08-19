import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch"

describe('Pruebas en custom hook useFetch', () => { 
   
   test('Debe de regresar el estado inicial', () => { 
      
      const { result } = renderHook( ()=> useFetch('batman') )
      
      const { gifs, loading } = result.current;

      expect( gifs.length ).toBe(0);
      expect( loading ).toBeTruthy();

   })

   test('Debe de regresar el un arreglo de imagenes i loading en false', async() => { 
      
      const { result } = renderHook( ()=> useFetch('batman') )
      
      await waitFor( 
         ()=> expect( result.current.gifs.length).toBeGreaterThan(0)
      )

      const { gifs, loading } = result.current;
      expect( gifs.length ).toBeGreaterThan(0);
      expect( loading ).toBeFalsy();

   })

})