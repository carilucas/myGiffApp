import { fireEvent, render, screen } from "@testing-library/react"
import { SearchComponent } from "../../src/components/SearchComponent";


describe('Pruebas en <SearchComponent />', () => { 
   
   test('Debe cambiar el valor de la caja de texto', () => { 
      
      render( <SearchComponent onChangeCategory = { ()=>{} } />);
      
      const input = screen.getByRole('textbox');

      fireEvent.input( input, { target: { value: 'batman'}} );

      expect(input.value).toEqual( expect.any(String));
      expect(input.value).toBe( 'batman' );


    });

    test('Debe llamar el onChangeCategory si el input tiene información', () => { 
      
      const inputValue = 'batman';
      const onChangeCategory = jest.fn();

      render( <SearchComponent onChangeCategory = { onChangeCategory } />);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      
      fireEvent.input( input, { target: { value: inputValue}} );

      fireEvent.submit( form );

      expect(input.value).toBe('');
      expect(onChangeCategory).toHaveBeenCalledWith(inputValue);
      expect(onChangeCategory).toHaveBeenCalledTimes(1);

     })

    test('No Debe llamar el onChangeCategory si el input no tiene información', () => { 
      

      const onChangeCategory = jest.fn();

      render( <SearchComponent onChangeCategory = { onChangeCategory } />);

      const form = screen.getByRole('form');

      fireEvent.submit( form );

      expect(onChangeCategory).not.toHaveBeenCalled();

     })

 })