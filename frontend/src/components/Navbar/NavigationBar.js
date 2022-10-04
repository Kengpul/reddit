import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Button,
} from 'reactstrap';

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Reddit</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <div className='ms-auto nav-user'>
                        {user ?
                            <div className='d-flex justify-content-center align-items-center'>
                                <span className='me-3 text-muted'>{user.username}</span>
                                <Button onClick={logout}>Logout</Button>
                            </div> :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>Signup</Link>
                            </>
                        }
                    </div>
                </Collapse>
            </Navbar>
        </div>
    )
}
