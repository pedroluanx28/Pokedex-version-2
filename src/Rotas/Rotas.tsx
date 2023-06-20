import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function Rotas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    </BrowserRouter>
  )
}
