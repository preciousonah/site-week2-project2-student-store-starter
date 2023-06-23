import * as React from "react"
import "./Categories.css"

export default function Categories({selectCategory}) {

  function handleClick(e) {
    console.log(`Clicked on: ${e.target.textContent}`)
    selectCategory(e.target.textContent)
  }

  return (
    <nav className="categories">
      <nav>
      <ul>
     
        <li><button onClick={handleClick}>Clothing</button></li>
        <li><button onClick={handleClick}>Food</button></li>
        <li><button onClick={handleClick}>Accessories</button></li>
        <li><button onClick={handleClick}>Tech</button></li>
      </ul>
    </nav>
    </nav>
  )
}
