import "./App.css"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import BooksPage from "./pages/BooksPage/BooksPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import OneBookPage from "./pages/OneBookPage/OneBookPage"
import IsAdmin from "./pages/Navigation/IsAdmin"
import AddBookPage from "./pages/AddBookPage/AddBookPage"
import SearchPage from "./pages/SearchPage/SearchPage"
const originalBooks = [
	{
		name: "Project Hail Marry",
		description: "Good SF",
		id: crypto.randomUUID(),
	},
	{
		name: "Harry Potter and the goblet of Fire",
		description: "Fantasy and wizards",
		id: crypto.randomUUID(),
	},
	{
		name: "Ordinary People",
		description: "Novel about people and life",
		id: crypto.randomUUID(),
	},
]

function App() {
	const [books, setBooks] = useState(originalBooks)
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/books" element={<BooksPage books={books} />}>
						{/* books.map((book) => {
							return (
								<Route key={book.id} path={book.id} element={<OneBookPage />} />
							)
						})*/}
						<Route path="search" element={<SearchPage books={books} />} />
						<Route path=":bookId" element={<OneBookPage books={books} />} />
						<Route path="no-book" element={<h2>There is no book here.</h2>} />
					</Route>

					<Route path="/dashboard" element={<IsAdmin />}>
						<Route index element={<h1>Welcome admin !</h1>} />
						<Route path={"create-book"} element={<AddBookPage />} />
					</Route>

					<Route path="*" element={<ErrorPage />} />
				</Routes>

				{/* <Routes>
					<Route path="/about" element={<AboutPage />} />
				</Routes> */}
			</main>
		</>
	)
}

export default App
