import Header from "./components/Header.jsx"
import ContactInfo from "./components/ContactInfo";
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
        <ContactInfo/>
      </div>
    </>
  )
}

export default App
