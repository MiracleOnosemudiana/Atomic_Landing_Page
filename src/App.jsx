import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import NewLogin from './components/NewLogin'

function App() {

  const [submitted, setSubmitted] = useState(true)

  return (
    <div className="">
      <Home
        submitted={submitted}
        setSubmitted={setSubmitted} />
      <About />
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {submitted && <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur w-100'>
        <NewLogin
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </div>}
    </ div>
  )
}

export default App
