import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
	return (
		<nav className="Navbar">
			<h1>Project Book</h1>

			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/books">Books</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
