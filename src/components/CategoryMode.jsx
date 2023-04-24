import { useState } from "react";
import Filters from "./Filters";
import Results from "./Results";
import ShowView from "./ShowView";
import axios from "axios";

export default function CategoryMode() {
  const [data, setData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [mode, setMode] = useState('filter')

  const selectCategory = (name) => {
    setSelectedCategory(true)
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => {
        setData(response.data);
        setMode('category')
      })
      .catch(error => {
        console.error(error);
      });
  }

  const selectRecipe = (id) => {
    const recipe = data.meals.find((meal) => meal.idMeal === id)
    setSelectedRecipe(recipe)
    setMode('recipe')
  }

  const clearSelectedCategory = () => {
    setSelectedCategory(false)
    setMode('filter')
  }

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null)
    setMode('category')
  }

  const results = <div className="categoryResults">
    <div className="back-button-container">
      <h2 className="show-navbar-title" onClick={clearSelectedCategory}>X</h2>
    </div>
    <Results
        data={data}
        selectRecipe={selectRecipe}
      />
  </div>

  const recipe =  <ShowView
                    data={selectedRecipe}
                    handleClick={clearSelectedRecipe}
                  />

  return(
    <div className="CategoryMode">
      {mode === 'filter'
      ?
        <Filters
          onClick={selectCategory}
        />
      :
        null
      }
      {mode === 'category'
      ?
        results
      :
        null
      }
      {mode === 'recipe'
      ?
        recipe
      :
        null
      }
    </div>
  )
}
