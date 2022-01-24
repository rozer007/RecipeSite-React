import React,{useContext} from 'react'
import { IngredientList } from './IngredientList'
import { recipeContext } from '../App'

export const Recipe = (props) => {
    const {ondelete,onEdit}= useContext(recipeContext)
    const{         //destructuring in the props after the arguements
        id, 
        name,
        cookTime,
        servings,
        instructions,
        ingredients
    }=props
    
    return (
        <div className='recipe'>
            <div className='recipe__header'>
                <h2 className='recipe__title'>{name}</h2>
                <div>
                    <button className='btn btn--primary mr-1' onClick={()=>{onEdit(id)}}>Edit</button>
                    <button className='btn btn--danger' onClick={()=>{ondelete(id)}}>Delete</button>
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Cook Time:</span>
                <span className='recipe__value'>{cookTime}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Servings:</span>
                <span className='recipe__value'>{servings}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Instructions:</span>
                <div className='recipe__value recipe__instructions recipe__value--indented'>
                   {instructions}
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Ingredients:</span>
                <div className='recipe__value recipe__value--indented'>
                   <IngredientList ingredients={ingredients}/>
                </div>
            </div>
        </div>
    )
}
