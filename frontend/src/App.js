import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap"
import Badge from "react-bootstrap/esm/Badge";
import { Store } from "./Store";
import { useContext } from "react";

const App = () => {

  const {state} = useContext(Store)
  const {cart} = state
  
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>ECOMM</Navbar.Brand>
            </LinkContainer>
            <Nav>
              <Link to="/cart" className="nav-Link">
                Cart 
                {cart.cartItems.length > 0 && <Badge pill bg="danger">{cart.cartItems.length}</Badge>}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
        </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">All Rights Reserved</div>
      </footer>
    </div>
    </BrowserRouter>
  );
};

export default App;