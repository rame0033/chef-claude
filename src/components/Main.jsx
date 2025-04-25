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
    function handleSubmit(e) {
        e.preventDefault()
        const formData= new FormData (e.target)
        const newIngredient = formData.get('ingredient')
        e.target.reset(); //Clear input field after submission
        
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient // Add new item to the list. This will come from the form data
            ]
        )
        console.log(ingredients)

    }

    return (
        <main className="main-content">
            <form onSubmit={handleSubmit} className="ingredient-form">
                <input type="text" placeholder="Enter ingredient" aria-label="enter ingredient"
                name="ingredient"></input>
                <button>Add ingredient</button>
            </form>
            <div className="ingredient-list-container">
                <h2>Ingredients</h2>
                <ul className="ingredient-list">
                    {ingredientList}
                </ul>
            </div>
        </main>
    )
}