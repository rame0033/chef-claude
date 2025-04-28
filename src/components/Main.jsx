import { useState } from 'react'
import IngredientList from './IngredientList'
import Recipe from './ClaudeRecipe'

export const Main = () => {

    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    //Button on click event to add ingredient to list
    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient // Add new item to the list. This will come from the form data
            ]
        )
    }

    // Default recipe visibility
    const [recipeShown, setRecipeShown] = useState(false)

    // Button to show recipe
    function showRecipe() {
        setRecipeShown(prevState => !prevState)
    }

    return (
        <main className="main-content">
            <form action={addIngredient} className="ingredient-form">
                <input type="text" placeholder="Enter ingredient" aria-label="enter ingredient"
                name="ingredient"></input>
                <button>Add ingredient</button>
            </form>

            {/* Render div container if ingredient has been entered */}
            {ingredients.length > 0 && 
                // Render ingredient list
                // Pass ingredients and showRecipe as props to the component
                <IngredientList ingredients={ingredients} showRecipe={showRecipe}/>
            }

        {/* Render recipe if button is clicked */}
        {recipeShown && 
           <Recipe ingredients={ingredients} setRecipeShown={setRecipeShown} />}
        </main>
    )
}