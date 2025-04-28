const ingredientList = (props) => {
    
    // Map over array to create a list
    const ingredientList = props.ingredients.map((ingredient, index) => { // Pass ingredient as prop to the function
        return ( // Use index as key for each list item
            <li key={index} className="ingredient-item"> 
                {ingredient}
            </li>
        )
    }) 

    return (
        <section className="ingredient-list-container">
            <div className="ingredient-list-container">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient-list">
                    {ingredientList}
                </ul>
            </div>

            {/* Render div container if more than 3 ingredients have been entered */}
            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of  ingredients.</p>
                </div>
                {/* props.showRecipe - reference the function passed as a prop */}
                <button onClick={props.showRecipe}>Get a recipe</button>
            </div>)}
        </section>
    )
}

export default ingredientList