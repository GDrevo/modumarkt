import Meal from "./Meal"

export default function Results({data, selectRecipe}) {
  const meals = data.meals
  // console.log(data.meals)
  // console.log(data.data.meals[0].strMealThumb)
  const handleClick = (id) => {
    selectRecipe(id)
  }

  return (
    <div className="Results">
      {meals && meals.map((meal) => {
        return (
          <Meal
            name={meal.strMeal}
            img={meal.strMealThumb}
            key={meal.idMeal}
            onClick={handleClick}
            id={meal.idMeal}
          />
        )
      })}
    </div>
  )
}
