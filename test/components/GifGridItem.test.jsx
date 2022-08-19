import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas en <GifGridItem>', () => { 
   
   const title='titulo'; 
   const url='https://urldeimagen.com/'

   test('Debe mostrar el snapshot', () => { 

      const { container } = render( <GifGridItem title={title} img={url} /> );

      expect(container).toMatchSnapshot();

    })

    test('Debe mostrar la imagen con la url y el alt indicado', () => { 

      render( <GifGridItem title={title} img={url} /> );
      // screen.debug();

      // expect( screen.getByRole('img').alt).toBe(title);
      // expect( screen.getByRole('img').src).toBe(url);

      const {src,alt} = screen.getByRole('img')
      expect( src).toBe(url);
      expect( alt ).toBe(title);


     })

   test('Debe mostrar el título en el componente', () => { 

      render( <GifGridItem title={title} img={url} /> );
      expect( screen.getByText( title)).toBeTruthy();


   }) 

 })