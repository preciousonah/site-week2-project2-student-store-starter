import * as React from "react"
import "./SearchForm.css"

export default function SearchForm() {
  return (
    <form action="/search" >
  <input type="text" name="query" placeholder="Search..."/>
  <button type="submit">Search</button>
</form>

  )
}
