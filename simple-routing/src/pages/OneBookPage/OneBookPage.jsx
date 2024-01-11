import React from "react"
import { useParams } from "react-router-dom"
import "./OneBookPage.css"
function OneBookPage({ books }) {
	/**
	 * Hooks should be the first things that gets executed in your function
	 * the should be in your function body
	 * They should not be created based on some conditions
	 * Nor in a new scope.
	 */
	const { bookId } = useParams()
	console.log(books, bookId)

	const oneBook = books.find((book) => {
		return book.id === bookId
	})
	console.log(oneBook)
	// if (!oneBook) {
	// 	return <p>No book to display.</p>
	// }
	return (
		<div className="OneBookPage">
			{oneBook ? (
				<>
					<h3>{oneBook.name}</h3>
					<p>{oneBook.description}</p>
				</>
			) : (
				<>
					<p>No book to display</p>
				</>
			)}
		</div>
	)
}

export default OneBookPage
