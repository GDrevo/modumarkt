export default function Meal({name, img}) {

  return (
    <div className="Meal">
      <img src={img} alt="recipe" className="recipe-img" />
      <div className="meal-title">
        <h4>{name}</h4>
      </div>
    </div>
  )
}
