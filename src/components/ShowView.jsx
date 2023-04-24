import Ingredients from "./Ingredients"

export default function ShowView({data, handleClick}) {
  console.log(data)
  const title = data.strMeal
  const area = data.strArea
  const category = data.strCategory
  const instructions = data.strInstructions
  const img = data.strMealThumb
  const ingredients = [[data.strIngredient1, data.strMeasure1, 1], [data.strIngredient2, data.strMeasure2, 2], [data.strIngredient3, data.strMeasure3, 3], [data.strIngredient4, data.strMeasure4, 4], [data.strIngredient5, data.strMeasure5, 5], [data.strIngredient6, data.strMeasure6, 6], [data.strIngredient7, data.strMeasure7, 7], [data.strIngredient8, data.strMeasure8, 8], [data.strIngredient9, data.strMeasure9, 9], [data.strIngredient10, data.strMeasure10, 10], [data.strIngredient11, data.strMeasure11, 11], [data.strIngredient12, data.strMeasure12, 12], [data.strIngredient13, data.strMeasure13, 13], [data.strIngredient14, data.strMeasure14, 14], [data.strIngredient15, data.strMeasure15, 15]]

  return (
    <div className="ShowView">
      <div className="back-button-container">
        <h2 className="show-navbar-title" onClick={handleClick}>X</h2>
      </div>
      <div className="show-recipe">
        <h2 className="show-recipe-title pb-1">{title}</h2>
        <img src={img} alt="recipe" className="show-recipe-img br-1" />
        <h3 className="pb-1">{area} Recipe</h3>
        <h3 className="pb-1">Category : {category}</h3>
        <h3 className="pb-1 ta-start">Ingredients : </h3>
        <Ingredients
          ingredients={ingredients}
        />
        <h3 className="h3b-1 ta-start fw-bold pb-1">Instructions :</h3>
        <p className="pb-1 ta-start">{instructions}</p>
      </div>
    </div>
  )
}
