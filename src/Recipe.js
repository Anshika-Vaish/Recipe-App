import React, { useState } from 'react';
import Recipedetails from './Recipedetails';

const Recipe = ({ recipe }) => {
    const [show, setshow] = useState(false);
    const { label, image, url, ingredients } = recipe.recipe;
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}></img>
            <a href={url} target="_blank" rel="noopener noreferrer">URL</a>

            <button onClick={() => {
                setshow(!show)
            }}>Ingredients</button>
            {show && <Recipedetails ingredients={ingredients} />}
        </div>
    )
}
export default Recipe;