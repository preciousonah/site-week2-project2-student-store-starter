import * as React from "react"
import "./Logo.css"
import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to= "/">
      <div className="codepathLogo">
        <img src="codepath-logo.jpg" alt="codepath-logo-icon"/>
      </div>
    
    </Link>
  )
}
