import React, { useEffect , useState } from "react";
import './index.css'
import { Loader , Navbar , Header , About , Projects , Contact , Footer } from './components'


function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    
  },[loading])

  return (
    <div className="App">
      {loading?<Loader setLoading={setLoading}></Loader>:      
      <> 
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </> }
    </div>
  )
}

export default App
