export default function Sidebar({onClick, mode}) {

  return(
    <div className="Sidebar" onClick={onClick}>
      <h2 className={`sidebar-title ${mode === 'Search' ? null : 'selected-mode'}`}>Search</h2>
      <h2 className={`sidebar-title ${mode === 'Category' ? null : 'selected-mode'}`}>Category</h2>
    </div>
  )
}
