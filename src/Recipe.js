
import React, { Component } from 'react';

import style from './recipe.module.css'

class Recipe extends Component {
    render() {
        
       const {label,image,calories,ingredients}= this.props.food.recipe
       
        return (
            <div className={style.recipe} key={label}>
                <h1>{label}</h1>
                <ol>
                    {ingredients.map(el=> <li>{el.text}</li> )}
                </ol>
                <p>{calories.toFixed(0)}</p>
                <img src={image} alt=""/>
                

            </div>
        );
    }
}

export default Recipe;