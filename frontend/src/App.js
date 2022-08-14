import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from './Store'

function App() {
  const { state } = useContext(Store)
  const { cart } = state
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column site-container">
        <header>
          <Navbar className="nav-top">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="nav-text">
                  {' '}
                  <i className="fas fa-shopping-cart"></i> Shopify
                </Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link nav-text">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-5">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            © 2022 Shopify. All Rights Reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
