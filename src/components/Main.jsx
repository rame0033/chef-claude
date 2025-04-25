import { useState } from 'react'

export const Main = () => {

    const [ingredients, setIngredients] = useState([])

    // Map over array to create a list
    const ingredientList = ingredients.map((ingredient) => {
        return (
            <li key={ingredient} className="ingredient-item">
                {ingredient}
            </li>
        )
    }) 

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

    return (
        <main className="main-content">
            <form action={addIngredient} className="ingredient-form">
                <input type="text" placeholder="Enter ingredient" aria-label="enter ingredient"
                name="ingredient"></input>
                <button>Add ingredient</button>
            </form>

            {/* Render div container if ingredient has been entered */}
            {ingredients.length > 0 && (
            <section className="ingredient-list-container">
                <div className="ingredient-list-container">
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredient-list">
                        {ingredientList}
                    </ul>
                </div>

                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of  ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
            )}
        </main>
    )
}