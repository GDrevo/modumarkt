import Meal from "./Meal"

export default function Results(data) {
  const meals = data.data.meals
  // console.log(data.data.meals[0].strMealThumb)

  return (
    <div className="Results">
      {meals && meals.map((meal) => {
        return (
          <Meal
            name={meal.strMeal}
            img={meal.strMealThumb}
            key={meal.idMeal}
          />
        )
      })}
    </div>
  )
}
