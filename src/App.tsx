import { useState } from 'react'
import './App.css'
import NFTCard from './components/NFTCard/NFTCard'
import OrderSummary from './components/OrderSummary/OrderSummary'
import ProfileCard from './components/ProfileCard/ProfileCard'
import QRCard from './components/QRCard/QRCard'
import Tindercards from './components/Tindercards/Tindercards'

function App() {


  const componentList = [
    <Tindercards />,
    <NFTCard />, 
    <OrderSummary />,
    <ProfileCard />,
    <QRCard />,

  ]
  const [index, setIndex] = useState(0)

  const scrollRight = () => {
    if (index != componentList.length-1)
      setIndex(i => i + 1);
  }

  const scrollLeft = () => {
    if (index != 0)
      setIndex(i => i - 1)

  }

  return (
    <div className="App">
    <div className="navigator">
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => scrollLeft()} className="navArrow" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path></svg>
      Edward's Component Potpourri ({index+1}/{componentList.length})
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => scrollRight()} className="navArrow" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path></svg>
    </div>
      {
        componentList[index]
      }
      
    </div>
  )
}

export default App
