import React from 'react';
import { Ingredients } from './Ingredients';
export const IngredientList = ({ingredients}) => {

    const Ingredientelements=ingredients.map(ingredient=>{
        return <Ingredients 
        key={ingredient.id} 
        {...ingredient}/>
    })
     
    return( 
    <div className='ingredients-grid'>
        {Ingredientelements}
    </div>
)};
