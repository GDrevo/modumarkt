export default function SearchBar({onSubmit, input, handleChange}) {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    onSubmit(input)
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Recipe Name"
        onChange={handleChange}
        value={input}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button
        onClick={handleSubmit}
        className="search-submit"
      >
        OK
      </button>
    </div>
  )
}
