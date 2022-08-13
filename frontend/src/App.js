import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <a href="/">EShop</a>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
