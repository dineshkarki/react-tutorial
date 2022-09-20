import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FunctionComponent from './components/FunctionComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Pagination} from "react-bootstrap";
import Banner1 from "./Images/banner-1.jpg";
import FetchData from './components/FetchData';
import FunctionAPIfetch from './components/FunctionAPIfetch';
import Paginate from './components/Pagination';
import './App.css';
import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <h1 class='text-center'>Welcome to React JS</h1>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Header name="dinesh" id={101} />} />
         </Routes>
      </BrowserRouter>
      <Container>
      <Row>
        <Col className='box'>
          <Content />
          <Button variant="primary">
            Primary
          </Button>
          <Button variant="secondary">
              Secondary
          </Button>
          <Button variant="danger">
              Danger
          </Button>
        </Col>
        <Col className='box'>
          <FunctionComponent />
        </Col>
        <Col>
          <h3>Image Binding</h3>
          <img src={Banner1} alt="banner1" style={{width:'350px'}}/>
          <MovieProvider>
            <div>
              <Nav />
              <MovieList />
            </div>
          </MovieProvider>
        </Col>
      </Row>
      <Row>
        <Col>
          <FetchData />
        </Col>
        <Col>
          <FunctionAPIfetch />
        </Col>
      </Row>
      <Row>
        <Col>
          <Products />
        </Col>
      </Row>
      <Row>
        <Col>
            <h3>React JS Pagination</h3>
            <Paginate />
        </Col>
      </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;