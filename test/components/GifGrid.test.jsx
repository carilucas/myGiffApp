import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import {useFetch} from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <GifGrid />', () => { 
   
   const category = 'batman';

   test('Debe mostrar el loading inicialmente', () => { 
      
      useFetch.mockReturnValue({
         gifs:[],
         loading: true
      })
      render(<GifGrid category={category} />);

      expect( screen.getByText('......................LOADING...................').innerHTML ).toBeTruthy();
      expect(screen.findByText(category)).toBeTruthy();

    })

    test('Debe mostrar items cuando se cargan las imágenes', () => { 
      
      const gifs = [
         {
            title:'Título',
            id:'343434387',
            img:'https://urldelaimagen.com',
         }
      ]

      useFetch.mockReturnValue({
         gifs: gifs,
         loading: false
      })

      render(<GifGrid category={category} />);

      expect( screen.getAllByRole('img').length ).toBe(1);

     })
 })