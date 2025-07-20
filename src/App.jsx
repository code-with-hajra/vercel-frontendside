
import './App.css'
import Home from './home/home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/courses'
import { Toaster } from 'react-hot-toast'
import Signup from './components/Signup'
import { useAuth } from './context/authprovider.jsx'
import AuthProvider from './context/authprovider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
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
