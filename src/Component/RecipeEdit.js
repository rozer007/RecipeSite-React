import React,{useContext} from 'react';
import RecipeIngredinetEdit from './RecipeIngredinetEdit';
import { recipeContext } from '../App';
import {v4 as uuidv4} from 'uuid';

const RecipeEdit = ({recipe}) => {

  const {handleRecipeChange,onEdit}=useContext(recipeContext)

  function handleChange(changes)
  {
     handleRecipeChange(recipe.id, {...recipe,...changes})
  }

  const handleIngredientsChange=(id,ingredient)=>{
    const newIngredient=[...recipe.ingredients]
    const index=newIngredient.findIndex(r=>r.id===id)
    newIngredient[index]=ingredient
    handleChange({ingredients:newIngredient})
  }


  const onAddIngredient=()=>{
      const newIngredient={
          id:uuidv4(),
          name:'',
          amount:'' 
        }
    handleChange({ingredients:[...recipe.ingredients,newIngredient]})
  }

  const onDeleteIngredient=(id)=>{
       handleChange({ingredients:recipe.ingredients.filter(i=>i.id!==id)})
  }
  return (
  <div className='recipe-edit'>
      <div className='recipe-edit__remove-button-container'>
          <button className='btn recipe-edit__remove-button' onClick={()=>onEdit(undefined)}>&times;</button>
      </div>
      <div className='recipe-edit__details-grid'>
          <label htmlFor='name' className='recipe-edit__label'>Name</label>
          <input className='recipe-edit__input' type='text' id='name' name='name' value={recipe.name} onChange={e =>handleChange({name: e.target.value})}/>

          <label htmlFor='cookTime' className='recipe-edit__label'>Cook Time</label>
          <input value={recipe.cookTime}className='recipe-edit__input' type='text' id='cookTime' name='cookTime' onChange={e =>handleChange({cookTime: e.target.value})}/>

          <label htmlFor='servings' className='recipe-edit__label'>Servings</label>
          <input value={recipe.servings}className='recipe-edit__input' type='number' min='1' id='servings' name='servings' onChange={e =>handleChange({servings: parseInt(e.target.value)|| ''})}/>

          <label htmlFor='instructions' className='recipe-edit__label'>Instructions</label>
          <textarea className='recipe-edit__input' id='instructions' name='instructions' value={recipe.instructions} onChange={e =>handleChange({instructions: e.target.value})}>
          </textarea>
      </div>
      <br/>
      <label className='recipe-edit__label'>Ingredients</label>
      <div className='recipe-edit__ingredients-grid'>
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {recipe.ingredients.map(ingredient=>(
              <RecipeIngredinetEdit key={ingredient.id} ingredient={ingredient} handleIngredientsChange={handleIngredientsChange} onDeleteIngredient={onDeleteIngredient}/>
          ))}
      </div>
      <div className='recipe-edit__add-ingredient-btn-container'>
          <button 
          className='btn btn--primary'
          onClick={()=>onAddIngredient()}
          >
              Add Ingredients
          </button>
      </div>
  </div>
  )};

export default RecipeEdit;
