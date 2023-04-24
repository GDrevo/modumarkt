export default function Meal({name, img, onClick, id}) {
  const handleClick = () => {
    onClick(id)
  }

  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    position: 'relative',
  }

  return (
    // <div className="Meal" onClick={handleClick}>
    //   <img src={img} alt="recipe" className="recipe-img" />
    //   <div className="meal-title">
    //     <h4>{name}</h4>
    //   </div>
    // </div>
    <div className="Filter br-1" style={divStyle} onClick={() => handleClick(name)}>
      <h3 className="category-title" style={{ position: 'absolute', bottom: '5%', left: '0%', color: '#fff', textAlign: 'center' }}>
        {name}
      </h3>
    </div>
  )
}
