import React,{useContext} from 'react'
import { Recipe } from './Recipe'
import { recipeContext } from '../App'

export const Recipelist = ({recipes}) => {
    const value= useContext(recipeContext)
    return (
        <div className={`recipe-list ${value.selectedRecipe?'selected':''}`}>
        <div>
            {recipes.map(recipe=>{
                return <Recipe key={recipe.id} {...recipe} />
            })}
        </div>
            <div className='recipe-list__add-recipe-btn-container'>
                <button className='btn btn--primary' onClick={value.onAdd}>Add Recipe</button>
            </div>
        </div>    
    )
}
