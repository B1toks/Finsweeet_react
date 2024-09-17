import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import FAQ from './components/faq'
import PricingPlans from './components/OurPricingPlans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <wrapper className="wrapper">
        <Header />
        <main className="main">
            <PricingPlans />
            <FAQ />
        </main>
    </wrapper>

    </>
  )
}

export default App
