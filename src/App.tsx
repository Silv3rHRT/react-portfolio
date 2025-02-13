import Header from "./components/Header.jsx"
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <div>
        <Header></Header>
      <main className="mx-3">
        <Outlet />
      </main>
      </div>
    </>
  )
}

export default App
