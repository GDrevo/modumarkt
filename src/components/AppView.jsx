import { useState } from "react";
import CategoryMode from "./CategoryMode";
import SearchMode from "./SearchMode";
import Sidebar from "./Sidebar";

export default function AppView() {
  const [mode, setMode] = useState('Search')

  const selectMode = (e) => {
    const newMode = e.target.innerHTML
    console.log(e.target.innerHTML)
    if (newMode !== mode) {
      setMode(newMode)
    }
  }

  return (
    <div className='AppView'>
      <Sidebar
        onClick={selectMode}
      />
      {mode === 'Search' ? <SearchMode /> : <CategoryMode /> }
    </div>
  )
}
