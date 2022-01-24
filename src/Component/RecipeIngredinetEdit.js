import React from 'react';

const RecipeIngredinetEdit = ({ingredient,handleIngredientsChange,onDeleteIngredient}) => {

  function IngredientsChange(changes)
  {
    handleIngredientsChange(ingredient.id,{...ingredient,...changes})
  }
  return(
      <>
        <input className='recipe-edit__input' type="text" value={ingredient.name} onChange={e=>IngredientsChange({name:e.target.value})}></input>
        <input className='recipe-edit__input' type="text" value={ingredient.amount} onChange={e=>IngredientsChange({amount:e.target.value})}></input>
        <button className='btn btn--danger btn--delete' onClick={()=>onDeleteIngredient(ingredient.id)}>&times;</button>
      </>

  )};

export default RecipeIngredinetEdit;
