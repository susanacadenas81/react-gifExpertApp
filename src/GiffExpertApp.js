import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';

import { GifGrid } from './components/GifGrid';

const GiffExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState( defaultCategories );
    // const [categories, setCategories] = useState(['hola']);

    return (<>
    
        <h2>GiffExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
        <ol>
            { 
              categories.map( (c) => <GifGrid 
              key = {c} 
              category={c}
              /> 
              )
            }
        </ol>
    
    </>)
}

export default GiffExpertApp;