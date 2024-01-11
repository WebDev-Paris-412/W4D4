import React, { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import "./BooksPage.css"
function BooksPage({ books }) {
	const [search, setSearch] = useState("")
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
		navigate(`/books/search?name=${search}`)
	}
	return (
		<div className="BooksPage">
			<aside>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Search: </legend>

						<input
							type="search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							name=""
							id=""
						/>
						<button>Search</button>
					</fieldset>
				</form>
				<ul>
					{books.map((book) => {
						return (
							<li key={book.id}>
								<Link to={`/books/${book.id}`}>{book.name}</Link>
							</li>
						)
					})}
				</ul>
			</aside>
			<Outlet />
		</div>
	)
}

export default BooksPage
