import GiffExpertApp from "../GiffExpertApp";
import { shallow } from "enzyme/build";

describe('Pruebas con giffExpertApp', () => {

    test('Debe mostrarse correctamente', () => {

        const wrapper = shallow(<GiffExpertApp/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar una lista de categorías', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GiffExpertApp defaultCategories={categories}/>);

        expect( wrapper ).toMatchSnapshot();
        expect ( wrapper.find('GifGrid').length ).toBe( categories.length );

    })

})