import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0 )

  return (
   <div className="App">
    <Sidebar/>
    {/* <Body/> */}
    <Footer />
   </div>
  )
}

export default App
