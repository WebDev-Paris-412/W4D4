import React from "react"
import { Navigate, Outlet } from "react-router-dom"

function IsAdmin() {
	const isAdmin = true

	if (!isAdmin) {
		return <Navigate to="/" />
	}

	return <Outlet />
}

export default IsAdmin
