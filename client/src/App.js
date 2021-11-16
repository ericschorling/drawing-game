import React, {useState} from 'react'
import './App.css';

const serverUrl ='http://localhost:3333'

function App() {
  const [plantsJSON, setPlantsJSON] = useState([])
  const getJson = async () => {
    const response = await fetch(`${serverUrl}/`)
    const templates = await response.json()
    await setPlantsJSON(templates)
    console.log(plantsJSON)
  }
  const _handleClick=(e)=>{
    e.preventDefault()
    getJson()
  }
  return (
    <div className="App">
      <header >
       <h1>Drawing Game</h1>
      </header>
      <main>
        <button onClick={(e)=>_handleClick(e)}>Click Me</button>
      </main>
    </div>
  );
}

export default App;
