import { useState } from 'react';
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
                            <>
                                <Button onClick={logout}>Logout</Button>
                            </> :
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
