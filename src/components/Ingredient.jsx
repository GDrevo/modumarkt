export default function Ingredient({name, measure}) {
  const ingredient = <div className="Ingredient br-1 fw-bold">
    <p>{name} {name === '' ? null : <span className="orange">({measure})</span>}</p>
  </div>

  return (
    name === '' ? null : ingredient
  )
}
