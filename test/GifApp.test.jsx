import { render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp"

describe('Pruebas en <GifApp>', () => { 
   
   test('Debe mostrar el snapshot', () => { 
      
      const gifApp = render( <GifApp /> );
      expect( gifApp ).toMatchSnapshot();

    });

   test('Debe contener un h1  ', () => { 
      
      render( <GifApp /> );

      expect( screen.findByRole('h1') ).toBeTruthy();

   })

 })