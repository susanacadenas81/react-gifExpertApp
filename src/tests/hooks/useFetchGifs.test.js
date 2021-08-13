import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';
import { wait } from "@testing-library/dom";

describe('Pruebas con el customHook useFetchGif', () => {

    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('hola'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });

    test('debe de retornar un arreglo de imágenes y loading a false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('hola'));
        await waitForNextUpdate();

        const { data, loading } = result.current;
        // const {data, loading} = useFetchGifs('hola');

        expect( data.length ).toBe( 3 );
        expect( loading ).toBe( false );
        
    })

})