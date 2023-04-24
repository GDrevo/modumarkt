import Ingredient from "./Ingredient";

export default function Ingredients({ingredients}) {

  return (
    <div className="Ingredients pb-1">
      {ingredients && ingredients.map((ingredient) =>
        <Ingredient
          name={ingredient[0]}
          measure={ingredient[1]}
          key={ingredient[2]}
        />
        )
      }
    </div>
  )
}
