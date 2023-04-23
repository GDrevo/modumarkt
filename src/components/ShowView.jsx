export default function ShowView({data, handleClick}) {
  console.log(data)
  const title = data.strMeal
  const area = data.strArea
  const category = data.strCategory
  const instructions = data.strInstructions
  const img = data.strMealThumb

  return (
    <div className="ShowView">
      <div className="show-navbar">
        <h2 className="show-navbar-title" onClick={handleClick}>X</h2>
      </div>
      <div className="show-recipe">
        <img src={img} alt="recipe" className="show-recipe-img" />
        <h2>{title}</h2>
        <h3>{area} Recipe</h3>
        <h3>Category : {category}</h3>
        <p>{instructions}</p>
      </div>
    </div>
  )
}
