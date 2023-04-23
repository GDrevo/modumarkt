export default function Meal({name, img, onClick, id}) {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <div className="Meal" onClick={handleClick}>
      <img src={img} alt="recipe" className="recipe-img" />
      <div className="meal-title">
        <h4>{name}</h4>
      </div>
    </div>
  )
}
