import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './components/quotes.json'

function App() {
  
  const indexRandom = Math.floor(Math.random() * quotes.length)
  const [qoIndex, setQoIndex] = useState (indexRandom)

  const changeQuotes = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQoIndex(random)
  }

  
   return (
    <div className="App">
        <QuoteBox qoIndex={qoIndex} changeQuotes={changeQuotes}/>
    </div>
  )
}

export default App
