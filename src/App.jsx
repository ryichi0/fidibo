import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/shared/MainLayout"
import HomePage from "./pages/HomePage"
import BooksDetailPage from "./pages/BooksDetailPage"


function App() {

  return (
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/BooksDetailPage/:id" element={<BooksDetailPage />}></Route>
      </Routes>
    </MainLayout>
  )
}

export default App
