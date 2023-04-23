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
      />
      <button
        onClick={handleSubmit}
      >
        OK
      </button>
    </div>
  )
}
