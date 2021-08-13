
import React from 'react';
import { shallow } from 'enzyme';
import { GiffGridItem } from '../../components/GiffGridItem'

describe('Pruebas componente GifGridItem', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GiffGridItem title={ title } url= { url }/>);

    test ('Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test ('Debe de tener un párrafo con el título', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title )

    })

    test ('Debe de tener un párrafo con el título', () => {

        const img = wrapper.find( 'img' );
        expect(img.prop('src')).toBe( url )
        expect(img.prop('alt')).toBe( title )

    })

    test ('Debe tener animate__fadeIn', () => {

        const div = wrapper.find( 'div' );
        const className = div.prop('className');
        console.log(div.prop())
        // expect(div.prop('className')).toHaveTextContent('animate__fadeIn')
        expect(className.includes('animate__fadeIn')).toBe(true)

    })

})