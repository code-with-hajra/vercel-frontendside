
import './App.css'
import Home from './home/Home.jsx'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses.jsx'
import { Toaster } from 'react-hot-toast'
import Signup from './components/Signup.jsx'
import { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser] = useAuth();
  console.log(authUser)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
      <Toaster />
    </>
  )
}

export default App
