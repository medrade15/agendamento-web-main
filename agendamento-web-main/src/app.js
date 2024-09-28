import React from "react"
import { ADMIN } from "routes"
import AppForUsers from "./app-for-users"
import AppForAdmin from "./app-for-admin"
import pathStartWith from "utils/path-comparator"
import { AuthProvider, AdminAuthProvider } from "contexts"
import { useLocation } from "react-router"

function App(props) {
  const currentPathname = useLocation().pathname
  if (pathStartWith(`/${ADMIN}`, currentPathname)) {
    return (
      <AdminAuthProvider>
        <AppForAdmin {...props} />
      </AdminAuthProvider>
    )
  }
  return (
    <AuthProvider>
      <AppForUsers {...props} />
    </AuthProvider>
  )
}

export default App
