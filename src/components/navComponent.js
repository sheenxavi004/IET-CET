import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/component.css';
import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarBrand, NavbarToggler } from 'reactstrap';
import { CaretRightFill } from 'react-bootstrap-icons'
import anime from 'animejs';
import { Link } from 'react-router-dom';


function Navigation(){
    const [collapse, setCollapse] = useState(false);
    const toggle = () => {
        setCollapse(prevState => !prevState)
        if(collapse === true)
        {
            anime({
                targets: '.down',
                rotate: 0
            });
        }
        else
        {
            anime({
                targets: '.down',
                rotate: 90
            });
        }
    }
    return(
        <div>
            <Navbar expand='md' color='light'>
                <NavbarBrand>
                    <img src={logo} width='200px' alt='IET On Campus'/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} >
                    <CaretRightFill className="down"/>
                </NavbarToggler>
                <Collapse isOpen={collapse} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink>
                                <Link to='/' className="navlink">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/events' className="navlink">Events</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/projects' className="navlink">Projects</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/team' className="navlink">The Team</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/aboutus' className="navlink">About Us</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;