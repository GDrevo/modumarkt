export default function Filter({ name, img, onClick }) {
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    position: 'relative',
  }

  const handleClick = (name) => {
    onClick(name)
  }

  return (
    <div className="Filter br-1" style={divStyle} onClick={() => handleClick(name)}>
      <h2 className="category-title" style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center' }}>
        {name}
      </h2>
    </div>
  )
}
