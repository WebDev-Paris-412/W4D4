import React from "react"
import { useSearchParams, Link } from "react-router-dom"
function SearchPage({ books }) {
	const [searchParams, setSearchParams] = useSearchParams()

	const name = searchParams.get("name")

	const foundBooks = books.filter((book) => {
		const regexp = new RegExp(name, "gi")
		return book.name.match(regexp)
	})

	return (
		<div className="OneBookPage">
			{foundBooks.map((book) => {
				return (
					<div key={book.id}>
						<Link to={`/books/${book.id}`}>{book.name}</Link>
					</div>
				)
			})}
		</div>
	)
}

export default SearchPage
