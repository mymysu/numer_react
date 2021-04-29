import {
    Navbar,
    Nav,
    Form,
    FormControl,
    NavDropdown,
    Button,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/login" className="nav-link">
                        login
                    </NavLink>
                    <NavLink to="/register" className="nav-link">
                        register
                    </NavLink>
                    <NavLink to="/count" className="nav-link">
                        count
                    </NavLink>
                    <NavLink to="/graph" className="nav-link">
                        grash
                    </NavLink>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar
