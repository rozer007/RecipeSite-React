import React,{ useState,useEffect } from "react";
import { Recipelist } from "./Component/Recipelist";
import './Css/App.css';
import RecipeEdit from "./Component/RecipeEdit";
import {v4 as uuidv4} from 'uuid';

export const recipeContext=React.createContext();
const LOCAL_STORAGE_KEY='recipeSite.recipes'

function App() {
  
  const[selectedRecipeId,setSelectedRecipeId]=useState();
  const[recipes,setRecipe]=useState(sampleRecipe);

  const selectedRecipe=recipes.find(rec=>rec.id===selectedRecipeId)
  
  useEffect(()=>{
    const recipeJSON=localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON!=null)
    {
      setRecipe(JSON.parse(recipeJSON))
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
  },[recipes])

  
  const ondelete=(id)=>{
    if(selectedRecipeId!=null && selectedRecipeId===id)
    {
      setSelectedRecipeId(undefined)
    }
    setRecipe(recipes.filter(recipe=> recipe.id!==id))
  }
  
  const onEdit=(id)=>{
    setSelectedRecipeId(id);
  }

  const handleRecipeChange=(id,recipe)=>{
    const newRecipe=[...recipes]
    const index=newRecipe.findIndex(r=>r.id===id)
    newRecipe[index]=recipe
    setRecipe(newRecipe)

  }
  
  const onAdd=()=>{
    const newRecipe={
      id:uuidv4(),
      name:'',
      cookTime:'',
      servings:1,
      instructions:'',
      ingredients:[
        {
          id:uuidv4(),
          name:'',
          amount:'' 
        }
      ]
    }
    setSelectedRecipeId(newRecipe.id);
    setRecipe([...recipes,newRecipe]);
  }

  const recipeContextValue={
    ondelete,
    onEdit,
    onAdd,
    selectedRecipe,
    handleRecipeChange
  }
  return (
    <recipeContext.Provider value={recipeContextValue}>
      <Recipelist recipes={recipes}/>
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
      </recipeContext.Provider>
  )
}

const sampleRecipe=[
  {
    id:1,
    name:"Maggi",
    cookTime:'2min',
    servings:1,
    instructions:'1.Boil the water and put the Maggi\n2.Add masala\n3.Enjoy the maggi',
    ingredients:[
      {
        id:1,
        name:'maggi',
        amount:"1"
      },
      {
        id:2,
        name:'maggi masala',
        amount:"1"
      }
    ]
  },
  {
    id:2,
    name:"Fried Rice",
    cookTime:'15 min',
    servings:3,
    instructions:'1.Add rice and fly with some oil\n2.Add masala\n3.Enjoy the fried rice',
    ingredients:[
      {
        id:1,
        name:'Rice',
        amount:"1 bowl"
      },
      {
        id:2,
        name:'masala',
        amount:'1/2 tbs'
      }
    ]
  }
]

export default App;
