import { useState } from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";
import axios from 'axios';
import ShowView from "./ShowView";

export default function SearchMode() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const updateInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (input) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const selectRecipe = (id) => {
    const recipe = data.meals.find((meal) => meal.idMeal === id)
    setSelectedRecipe(recipe)
  }

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null)
  }

  const results = <Results
                    data={data}
                    selectRecipe={selectRecipe}
                  />

  const showView =  <ShowView
                      data={selectedRecipe}
                      handleClick={clearSelectedRecipe}
                    />

  return(
    <div className="SearchMode">
      <SearchBar
        onSubmit={handleSubmit}
        input={input}
        handleChange={updateInput}
      />
      {selectedRecipe === null ? results : showView}
    </div>
  )
}
