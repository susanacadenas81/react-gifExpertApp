import { getGifs } from "../../helpers/getGiffs";

describe('Pruebas con getGifs fetch', () => {

    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 3 )


    });

    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 )


    });

})