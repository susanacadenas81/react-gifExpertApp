import { shallow } from "enzyme/build";
import { GifGrid } from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas component GifGrid', () => {

    test('Debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category='Rana'/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: 'def',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            }
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category='Rana'/>);

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GiffGridItem').length ).toBe( gifs.length );


    })

})