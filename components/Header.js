import Link from "next/link"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import Fade from 'react-reveal/Fade';

class Header extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render () {
        return (
                <Navbar dark className="header-navbar" expand="md">
                    <Fade top>
                        <NavbarBrand href="/">Awesome Ristorante</NavbarBrand>
                    </Fade>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Fade top>
                                <Nav navbar>
                            <NavItem>
                                <Link href="/"><a className="text-center nav-link">Home</a></Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/about"><a className="text-center nav-link">About Us</a></Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/menu"><a className="text-center nav-link">Menu</a></Link>
                            </NavItem>
                            </Nav>
                            </Fade>
                        </Nav>
                    </Collapse>
                </Navbar>
        )
    }
} 

export default Header;