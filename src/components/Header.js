import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Header.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
    return(
        <Navbar expand="lg" variant='dark'>
          <Container className='w-75 px-1'>
            <Link className='navbar-brand mx-2' to={"/"}>Movies</Link>
            <div className='me-5 d-flex align-items-center'>
              <Link className='navbar-brand me-5'to="/">Watch List</Link >
              <Link className='navbar-brand me-5' to={"/watched"}>Watched</Link >
              <Link className='btn btn-success' to={"/addlist"} >ADD</Link>
            </div>
          </Container>
      </Navbar>
    )
}

export default Header