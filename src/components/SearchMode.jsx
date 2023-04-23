import { useState } from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";
import axios from 'axios';

export default function SearchMode() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  const updateInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (input) => {
    console.log(input)
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return(
    <div className="SearchMode">
      <SearchBar
        onSubmit={handleSubmit}
        input={input}
        handleChange={updateInput}
      />
      <Results
        data={data}
      />
    </div>
  )
}
