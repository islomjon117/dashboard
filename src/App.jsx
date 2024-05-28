// import react router dom
import { BrowserRouter } from "react-router-dom"
// import layout
import MainLayout from './Layout/MainLayout.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  )
}

export default App
