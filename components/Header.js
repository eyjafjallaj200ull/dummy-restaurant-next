import Link from "next/link"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

class Header extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render () {
        return (
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Awesome Ristorante</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link href="/about"><a className="nav-link">About Us</a></Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/menu"><a className="nav-link">Menu</a></Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/contact"><a className="nav-link">Contact</a></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        )
    }
} 

export default Header;