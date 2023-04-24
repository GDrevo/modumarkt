import axios from "axios";
import { useEffect, useState } from "react"
import Filter from "./Filter";

export default function Filters({onClick}) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  const handleClick = (name) => {
    onClick(name)
  }

  return (
    <div className="Filters">
      {categories && categories.map((category =>  <Filter
                                                    key={category.idCategory}
                                                    id={category.idCategory}
                                                    name={category.strCategory}
                                                    img={category.strCategoryThumb}
                                                    onClick={handleClick}
                                                  />))}
    </div>
  )
}
