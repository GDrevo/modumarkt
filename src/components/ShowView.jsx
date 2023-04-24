export default function ShowView({data, handleClick}) {
  console.log(data)
  const title = data.strMeal
  const area = data.strArea
  const category = data.strCategory
  const instructions = data.strInstructions
  const img = data.strMealThumb

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
        <p className="pb-1 ta-start fw-bold">Instructions :</p>
        <p className="pb-1 ta-start">{instructions}</p>
      </div>
    </div>
  )
}
